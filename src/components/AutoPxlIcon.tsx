'use client';

import React from 'react';
import { PxlKitIcon, AnimatedPxlKitIcon } from '@pxlkit/core';

interface AutoPxlIconProps {
  icon: any;
  size?: number;
  appearance?: 'solid' | 'palette';
  color?: string;
  className?: string;
}

export function AutoPxlIcon({ icon, ...props }: AutoPxlIconProps) {
  if (!icon) return null;
  
  // 兼容各种可能的动画图标特征判断
  const isAnimated = 
    ('frames' in icon && Array.isArray(icon.frames)) || 
    'keyframes' in icon || 
    ('frameDuration' in icon);

  if (isAnimated) {
    return <AnimatedPxlKitIcon icon={icon} {...props} />;
  }
  
  return <PxlKitIcon icon={icon} {...props} />;
}
