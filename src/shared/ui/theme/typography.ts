/**
 * ============================================================================
 * Typography - 타이포그래피 프리셋 "키 목록"
 * ============================================================================
 *
 * colors.ts / spacing.ts와 같은 원리예요.
 * 실제 값(font-size, font-weight, line-height 등)은
 * _typography.scss 의 $typography map에 있고,
 * 이 파일은 "이런 이름의 프리셋이 존재한다"는 목록만 가지고 있어요.
 *
 * 네이밍 규칙: [카테고리][크기][굵기]
 *  - 카테고리: d(display, 아주 큰 제목) / h(heading, 제목) / b(body, 본문) / c(caption, 설명글)
 *  - 크기: 폰트 사이즈(px)
 *  - 굵기: b(bold,700) / sb(semibold,600) / m(medium,500) / r(regular,400)
 *
 * 예) h24b → heading, 24px, bold
 *     b17m → body, 17px, medium
 *     c13r → caption, 13px, regular
 *
 * ⚠️ 프리셋을 추가/삭제할 때는 _typography.scss의 $typography map도 함께 고쳐야 해요.
 * 이름이 서로 안 맞으면, <Text preset="새프리셋" /> 이 타입 체크는 통과해도
 * 실제로는 스타일이 하나도 안 입혀진 채로 렌더링돼요 (class를 못 찾으니까).
 */

export const typographyTokens = [
  // Display - 랜딩/배너 등 아주 큰 타이틀
  'd32b',
  'd28b',

  // Heading - 화면/섹션 타이틀
  'h24b',
  'h20b',
  'h20sb',
  'h18sb',

  // Body - 본문
  'b17sb',
  'b17m',
  'b17r',
  'b15m',
  'b15r',

  // Caption - 보조/설명 텍스트
  'c13m',
  'c13r',
  'c11r',
] as const;

/**
 * TypographyKey 타입
 * <Text preset="..." /> 에 넘길 수 있는 값들의 타입이에요.
 * typographyTokens 배열에 없는 문자열을 넣으면 타입 에러가 나서
 * 오타나 존재하지 않는 프리셋 사용을 미리 막아줘요.
 */
export type TypographyKey = (typeof typographyTokens)[number];