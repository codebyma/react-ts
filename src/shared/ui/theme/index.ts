/**
 * ============================================================================
 * Theme - 디자인 토큰 모음 (barrel file)
 * ============================================================================
 *
 * 이 파일은 theme 폴더 안의 여러 파일(colors, spacing, typography)에서
 * export한 것들을 한 군데로 모아서 다시 내보내는 역할만 해요.
 * ("barrel file" 이라고 부르는 흔한 패턴이에요)
 *
 * 이 파일이 있으면, 다른 컴포넌트에서 이렇게 여러 줄로 안 쓰고
 *   import { ColorToken } from '../theme/colors'
 *   import { SpacingKey } from '../theme/spacing'
 *   import { TypographyKey } from '../theme/typography'
 *
 * 이렇게 한 줄로 편하게 쓸 수 있어요.
 *   import { ColorToken, SpacingKey, TypographyKey } from '../theme'
 *
 * ⚠️ palette는 여기서 export하지 않아요.
 * palette(원시 색상값)는 오직 _palette.scss → _colors.scss 안에서만
 * 쓰이는 내부 전용 값이라, 컴포넌트 쪽(TS)에서 직접 쓸 일이 없어요.
 * 그래서 palette.ts 파일 자체를 프로젝트에서 삭제했어요.
 */

export * from './colors';
export * from './spacing';
export * from './typography';