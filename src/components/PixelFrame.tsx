'use client';

import type { ReactNode, CSSProperties } from 'react';

/**
 * JRPG 像素边框组件 — 纯 CSS + SVG 拼装实现
 *
 * 架构设计（Why）：
 * CSS border 画不出像素风的"切角弧度"，border-radius 又是平滑曲线。
 * 所以我们把边框拆成两部分：
 *   1. 八条 <div> 边条 — 负责四条直线段（外框×4 + 内框×4），可任意拉伸
 *   2. 四个角落 SVG — 在 12×12 像素网格上逐点绘制圆弧转角 + 回纹装饰
 *
 * 角标只画左上角，其余三角通过 CSS scale 镜像翻转得到。
 * 每个 SVG 像素以 SCALE 倍放大渲染（默认 2×），保留硬朗的 8-bit 颗粒感。
 */

// ═══════════════════════════════════════════
// 常量：所有尺寸基于 SVG 像素，乘以 SCALE 得到 CSS 像素
// ═══════════════════════════════════════════
const CORNER_GRID_SIZE = 12; // 角标 SVG 画布尺寸（像素）
const EDGE_THICKNESS = 3; // 边缘总宽度（SVG像素）：1px外框 + 1px填充 + 1px内框
const BASE_PAD = 8; // 护角块最大延伸到 8 像素

/**
 * 左上角像素网格 — 逐行定义
 *
 * # = 边框线（外框、内框）
 * O = 填充色（面板厚度）
 * @ = 强调色（角标中心的宝石/铆钉）
 * . = 透明
 *
 * 设计解读：
 * 方案 4 的轻量版：保留物理厚重感，但整体变薄。
 * 边框从 4 个单位缩减到 3 个单位（一粗一细中间夹心）。
 * 护角方块从 6x6 缩减为更加精致可爱的 5x5，让出了更多的内容显示空间。
 */
const CORNER_GRID: string[] = [
  '...#########', // R0:  大圆角外框顶线
  '..#OOOOOOOOO', // R1:  切角过度 + 顶部填充
  '.#O#########', // R2:  切角过度 + 护角块顶边/内框顶线
  '#O#OOO#.....', // R3:  外框/填充 + 护角块左壁 + 填充 + 护角块右壁
  '#O#O@O#.....', // R4:  护角块中心点缀（单像素宝石/铆钉）
  '#O#OOO#.....', // R5:  护角块底部填充
  '#O#####.....', // R6:  护角块底边
  '#O#.........', // R7:  左侧内框线
  '#O#.........', // R8:  左侧内框线
  '#O#.........', // R9:  左侧内框线
  '#O#.........', // R10: 左侧内框线
  '#O#.........', // R11: 左侧内框线
];

// ═══════════════════════════════════════════
// 角标 SVG 组件
// ═══════════════════════════════════════════

interface CornerSVGProps {
  borderColor: string;
  fillColor: string;
  accentColor: string;
  size: string;
}

function CornerSVG({ borderColor, fillColor, accentColor, size }: CornerSVGProps) {
  const rects: Array<{ x: number; y: number; fill: string }> = [];

  for (let row = 0; row < CORNER_GRID.length; row++) {
    const line = CORNER_GRID[row];
    for (let col = 0; col < line.length; col++) {
      const ch = line[col];
      if (ch === '#') {
        rects.push({ x: col, y: row, fill: borderColor });
      } else if (ch === 'O') {
        rects.push({ x: col, y: row, fill: fillColor });
      } else if (ch === '@') {
        rects.push({ x: col, y: row, fill: accentColor });
      }
      // '.' = 透明，不绘制
    }
  }

  return (
    <svg
      viewBox={`0 0 ${CORNER_GRID_SIZE} ${CORNER_GRID_SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, imageRendering: 'pixelated', display: 'block' }}
    >
      {rects.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={1} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════
// 主组件
// ═══════════════════════════════════════════

interface PixelFrameProps {
  children: ReactNode;
  className?: string;
  /** 边框线条色，默认深金棕 */
  borderColor?: string;
  /** 边框物理填充色，默认暖木色 */
  fillColor?: string;
  /** 角标中心宝石色，默认祖母绿 */
  accentColor?: string;
  /** 内部背景色，默认透明 */
  bg?: string;
  /** 内容区额外内边距（px），默认 4 */
  padding?: number;
  style?: CSSProperties;
}

export function PixelFrame({
  children,
  className = '',
  borderColor = '#8c735a', // 默认加深边框线，更有立体感
  fillColor = '#c5a882',   // 默认填充色
  accentColor = '#5c9e69', // 绿宝石色
  bg = 'transparent',
  padding = 2,
  style,
}: PixelFrameProps) {
  // 响应式 CSS 像素换算
  const scaleVar = `var(--pixel-scale, 2)`;
  const cornerCssSize = `calc(${scaleVar} * ${CORNER_GRID_SIZE}px)`;
  const edgeCss = `calc(${scaleVar} * ${EDGE_THICKNESS}px)`;
  const borderCss = `calc(${scaleVar} * 1px)`;
  const contentPad = `calc(${scaleVar} * ${BASE_PAD}px + ${padding}px)`;

  const barBase: CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    backgroundColor: fillColor,
  };

  return (
    <div
      className={`relative ${className}`}
      style={{ padding: contentPad, backgroundColor: bg, ...style }}
    >
      {/* ══════ 四条复合边条 ══════ */}
      <div style={{ ...barBase, top: 0, left: cornerCssSize, right: cornerCssSize, height: edgeCss, borderTop: `${borderCss} solid ${borderColor}`, borderBottom: `${borderCss} solid ${borderColor}` }} />
      <div style={{ ...barBase, bottom: 0, left: cornerCssSize, right: cornerCssSize, height: edgeCss, borderTop: `${borderCss} solid ${borderColor}`, borderBottom: `${borderCss} solid ${borderColor}` }} />
      <div style={{ ...barBase, left: 0, top: cornerCssSize, bottom: cornerCssSize, width: edgeCss, borderLeft: `${borderCss} solid ${borderColor}`, borderRight: `${borderCss} solid ${borderColor}` }} />
      <div style={{ ...barBase, right: 0, top: cornerCssSize, bottom: cornerCssSize, width: edgeCss, borderLeft: `${borderCss} solid ${borderColor}`, borderRight: `${borderCss} solid ${borderColor}` }} />

      {/* ══════ 四角装饰 SVG ══════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[4px]">
        {/* 左上（原图） */}
        <div className="absolute top-0 left-0">
          <CornerSVG borderColor={borderColor} fillColor={fillColor} accentColor={accentColor} size={cornerCssSize} />
        </div>
        {/* 右上（水平翻转） */}
        <div className="absolute top-0 right-0" style={{ transform: 'scaleX(-1)' }}>
          <CornerSVG borderColor={borderColor} fillColor={fillColor} accentColor={accentColor} size={cornerCssSize} />
        </div>
        {/* 左下（垂直翻转） */}
        <div className="absolute bottom-0 left-0" style={{ transform: 'scaleY(-1)' }}>
          <CornerSVG borderColor={borderColor} fillColor={fillColor} accentColor={accentColor} size={cornerCssSize} />
        </div>
        {/* 右下（180° 翻转） */}
        <div className="absolute bottom-0 right-0" style={{ transform: 'scale(-1, -1)' }}>
          <CornerSVG borderColor={borderColor} fillColor={fillColor} accentColor={accentColor} size={cornerCssSize} />
        </div>
      </div>

      {/* ══════ 内容区域 ══════ */}
      {/* 移除原本的 div 包装，直接渲染 children，这样 flex/grid 等 class 才能正确作用于子元素 */}
      {children}
    </div>
  );
}
