import type { ElementType, ReactNode, CSSProperties } from 'react';
import { type ColorToken } from '../theme';
import styles from './Text.module.scss';
import type { TypographyKey } from '../theme';

type TextTag = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'strong' | 'small';
type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps {
  preset: TypographyKey;
  as?: TextTag;
  children: ReactNode;
  /** 텍스트 색상 토큰 (예: 'textPrimary', 'brand'). 기본값은 'textPrimary' */
  color?: ColorToken;
  align?: TextAlign;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  truncate?: boolean;
  maxLines?: number;
  noSelect?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const defaultTagByCategory: Record<string, TextTag> = {
  d: 'h1',
  h: 'h2',
  b: 'p',
  c: 'span',
};

const getDefaultTag = (preset: TypographyKey): TextTag => {
  const category = preset[0];
  return defaultTagByCategory[category] ?? 'span';
};

const Text = ({
  preset,
  as,
  children,
  color = 'text-primary',
  align,
  italic,
  underline,
  strikethrough,
  truncate,
  maxLines,
  noSelect,
  className,
  style,
  onClick,
}: TextProps) => {
  const Component = (as ?? getDefaultTag(preset)) as ElementType;

  const textDecoration =
    underline && strikethrough
      ? 'underline line-through'
      : underline
        ? 'underline'
        : strikethrough
          ? 'line-through'
          : undefined;

  const computedStyle: CSSProperties = {
    textAlign: align,
    fontStyle: italic ? 'italic' : undefined,
    textDecoration,
    userSelect: noSelect ? 'none' : undefined,
    cursor: onClick ? 'pointer' : undefined,
    margin: 0,
    ...(truncate && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),
    ...(maxLines && {
      display: '-webkit-box',
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
    }),
    ...style,
  };

  const presetClassName = (styles as Record<string, string>)[preset];
  const colorClassName = (styles as Record<string, string>)[`color-${color}`];

  const combinedClassName = [presetClassName, colorClassName, className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClassName || undefined} style={computedStyle} onClick={onClick}>
      {children}
    </Component>
  );
};

export default Text;