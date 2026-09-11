/**
 * ============================================================================
 * Spacing / Radius / Shadow - 간격·모서리·그림자 토큰 "키 목록"
 * ============================================================================
 *
 * colors.ts와 똑같은 원리예요.
 * - 진짜 값(4px, 8px, box-shadow 값 등)은 _spacing.scss에 있고
 * - 여기 있는 건 "이런 이름/숫자의 토큰이 존재한다"는 목록뿐이에요
 *
 * 컴포넌트를 스타일링할 때 실제 값은 SCSS에서
 *   padding: spacing.get(16);
 *   border-radius: spacing.radius(md);
 * 이런 식으로 함수를 호출해서 가져다 쓰세요.
 *
 * ⚠️ 토큰을 추가/삭제할 때는 _spacing.scss의 해당 map도 함께 고쳐야 해요.
 */

/**
 * Spacing - 간격 스케일 (padding, margin, gap 등에 사용)
 * 4px 단위를 기본으로 하는 숫자들이에요.
 * "13px처럼 스케일에 없는 임의의 값은 쓰지 말고, 이 목록 중에서만 골라 쓰자"는 규칙을
 * 지키기 위한 목록이에요.
 */
export const spacingTokens = [
  0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96,
] as const;

export type SpacingKey = (typeof spacingTokens)[number];

/**
 * Radius - 모서리를 얼마나 둥글게 할지 정하는 스케일
 * none(각짐) ~ full(완전 동그라미/알약모양) 까지 단계별로 있어요.
 */
export const radiusTokens = ['none', 'sm', 'md', 'lg', 'xl', 'full'] as const;

export type RadiusKey = (typeof radiusTokens)[number];

/**
 * Shadow - 그림자 스케일
 * sm(살짝) ~ xl(진하고 크게) 까지 단계별로 있어요.
 */
export const shadowTokens = ['none', 'sm', 'md', 'lg', 'xl'] as const;

export type ShadowKey = (typeof shadowTokens)[number];

/**
 * Breakpoints - 반응형 화면 기준점 (px)
 *
 * ⚠️ 위 토큰들과 달리, 이건 실제 숫자값을 그대로 가지고 있어요!
 * 이유: 반응형 처리를 CSS(SCSS)뿐 아니라 JavaScript에서도 해야 할 때가 있어요.
 * 예) 화면 너비가 768px 이상인지 JS로 직접 체크하는 경우
 *     (window.matchMedia('(min-width: 768px)') 같은 코드)
 * 이런 경우엔 실제 숫자가 코드에 있어야 하기 때문에, 이 토큰만 값을 그대로 뒀어요.
 */
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type BreakpointKey = keyof typeof breakpoints;