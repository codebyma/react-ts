/**
 * ============================================================================
 * Colors - 색상 토큰 "키 목록"
 * ============================================================================
 *
 * 🔑 이 파일이 하는 일
 * 여기 있는 건 실제 색상값(#191f28 같은 hex 코드)이 아니라,
 * "어떤 색상 이름들이 존재하는지"를 나열해둔 목록이에요.
 *
 * 예를 들어 컴포넌트에서 <Text color="text-primary" /> 처럼 쓸 때,
 * "text-primary"라는 문자열이 실제로 존재하는 색상 이름인지 TypeScript가
 * 체크해줄 수 있게 하려고 이 파일이 필요해요.
 * 오타로 <Text color="text-primaryy" /> 처럼 쓰면 즉시 빨간줄(에러)이 떠요.
 *
 * 🎨 그럼 진짜 색상값(#191f28 등)은 어디 있나요?
 * → src/shared/ui/theme/_colors.scss 파일에 있어요.
 * 실제 화면에 칠해지는 색은 전부 그 SCSS 파일이 담당하고,
 * 이 TS 파일은 "이런 이름의 색이 있다"는 것만 TypeScript에게 알려주는 역할이에요.
 *
 * 이렇게 "진짜 값은 한 곳(SCSS)에만 두고, TS는 이름만 아는" 방식을 쓰면
 * - 색상값을 두 군데서 따로 관리하다가 서로 달라지는 실수를 막을 수 있고
 * - 나중에 다크모드를 붙일 때도 SCSS 파일 하나만 고치면 돼요.
 *
 * ⚠️ 색을 추가/삭제할 때 꼭 기억하세요
 * 1. _colors.scss 의 $colors map에 추가
 * 2. 아래 colorTokens 배열에도 똑같은 이름으로 추가
 * 두 파일에 같은 이름이 항상 똑같이 들어있어야 정상 동작해요.
 */

export const colorTokens = [
  // 텍스트에 쓰는 색
  'text-primary', // 기본 텍스트 색 (가장 진함)
  'text-secondary', // 보조 설명 텍스트
  'text-tertiary', // 더 흐린 보조 텍스트
  'text-disabled', // 비활성화된 텍스트
  'text-inverse', // 어두운 배경 위에 쓰는 밝은 텍스트
  'text-link', // 링크 텍스트

  // 배경에 쓰는 색
  'bg-default', // 기본 배경 (보통 흰색)
  'bg-subtle', // 살짝 톤 있는 배경
  'bg-muted', // 좀 더 진한 배경 (카드, 섹션 구분용)
  'bg-inverse', // 어두운 배경 (다크 섹션용)

  // 테두리에 쓰는 색
  'border-default', // 기본 테두리
  'border-strong', // 좀 더 진한 테두리
  'border-focus', // 인풋 등이 포커스됐을 때 테두리

  // 브랜드(서비스 고유) 색상
  'brand', // 메인 브랜드 색
  'brand-hover', // 브랜드 색 버튼에 마우스 올렸을 때
  'brand-pressed', // 브랜드 색 버튼을 눌렀을 때
  'brand-subtle', // 브랜드 색의 아주 연한 버전 (배경용)

  // 상태를 나타내는 색 (성공/경고/에러)
  'success', // 성공 (보통 초록)
  'success-subtle',
  'warning', // 경고 (보통 노랑)
  'warning-subtle',
  'danger', // 위험/에러 (보통 빨강)
  'danger-hover',
  'danger-subtle',

  'overlay', // 모달 뒤 반투명 배경 같은 용도
] as const;
// ↑ `as const`를 붙이면 TypeScript가 이 배열을 "언제든 바뀔 수 있는 string[]"이 아니라
//   "정확히 이 문자열들만 들어있는 배열"로 더 엄격하게 인식해요.
//   그래야 아래 ColorToken 타입이 정확하게 만들어져요.

/**
 * ColorToken 타입
 *
 * colorTokens 배열에 있는 문자열들 중 "하나"를 의미하는 타입이에요.
 * 즉 'text-primary' | 'text-secondary' | 'brand' | ... 이런 식으로
 * 배열 안의 모든 값을 자동으로 유니온 타입으로 만들어줘요.
 *
 * 배열에 새 색을 추가하면 이 타입도 자동으로 갱신되니, 따로 관리할 필요 없어요.
 */
export type ColorToken = (typeof colorTokens)[number];