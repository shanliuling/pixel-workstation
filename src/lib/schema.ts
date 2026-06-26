import { z } from 'zod';

export const NavItemSchema = z.object({
  id: z.string(),
  label: z.string(),
  labelEn: z.string(),
  icon: z.string(), // name of icon
  href: z.string(),
  active: z.boolean().optional(),
});
export type NavItem = z.infer<typeof NavItemSchema>;

export const TopBarStatSchema = z.object({
  icon: z.string(),
  label: z.string(),
  value: z.string(),
});
export type TopBarStat = z.infer<typeof TopBarStatSchema>;

export const PostItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  tag: z.string(),
  tagColor: z.string(),
  readTime: z.string(),
  date: z.string(),
});
export type PostItem = z.infer<typeof PostItemSchema>;

export const LogEntrySchema = z.object({
  text: z.string(),
  exp: z.number(),
  done: z.boolean().default(true),
});
export type LogEntry = z.infer<typeof LogEntrySchema>;

export const SkillItemSchema = z.object({
  name: z.string(),
  level: z.number(),
});
export type SkillItem = z.infer<typeof SkillItemSchema>;

export const TechStackItemSchema = z.object({
  name: z.string(),
  icon: z.string(),
});
export type TechStackItem = z.infer<typeof TechStackItemSchema>;
