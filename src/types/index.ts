import { Blog } from 'contentlayer/generated';
import { Metadata } from 'next';
import { MouseEventHandler, ReactNode } from 'react';
//User
export interface User {
  name: string;
  picture: string;
  sub: string;
  email?: string;
}
//Highlight
export interface Highlight {
  title: string;
  quote: string;
  author: string;
  url: string;
}
//Comment
export interface Comment {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
}
//CommentListProps
export interface CommentListProps {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
}

//Theme
export type Theme = 'dark' | 'light';
//Target
export type Target = '_blank' | '_self';

//ChildrenProps
export interface ChildrenProps {
  children: ReactNode;
}
//TitleProps
export interface TitleProps {
  text: string;
  size: 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl';
  className?: string;
}
//WrapperProps
export interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
//ButtonProsp
export interface ButtonProsp {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
//TagPageProps
export interface TagPageProps {
  params: { tag: string };
}
//PostListProsp
export interface PostListProsp {
  posts: Blog[];
}
//BrandProps
export interface BrandProps {
  route: string;
  label: string;
}
//CommentFormProps
export interface CommentFormProps {
  text: string;
  setText: (text: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}
//ImagedocProps
export interface ImagedocProps {
  src: string;
  alt: string;
  className?: string;
}
//AnchorProps
export interface AnchorProps {
  children: ReactNode;
  href: string;
  target: Target;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  font?: 'font-light ' | 'font-normal';
  size?: 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl';
}
//ClassProps
export interface ClassProps {
  className?: string;
}

//IconPlusProps
export interface IconPlusProps {
  children: React.ReactNode;
  className?: string;
}

//ThemeContextValue
export interface ThemeContextValue {
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}
//Collapse
export type Collapse = 'ON' | 'OFF';
//CollapseContextValue
export interface CollapseContextValue {
  collapse: Collapse;
  setCollapse: (collapse: Collapse) => void;
}

//Slug
export type Slug = string[];
export interface SlugProps {
  slug: Slug;
}
//ParamsProps
export interface ParamsProps {
  params: { slug: Slug };
}
//RenderProps
export type RenderProps = ({ params }: ParamsProps) => {
  seo: Metadata | undefined | null;
  page: JSX.Element | null;
};

////MDX Components

export * from './blogSeo';
export * from './params';
export * from './links';
