# Mirandil — AI-Driven Risk Detection

Lovable로 제작한 프로젝트입니다.

## 🌐 실제 웹사이트 보기 (Live Demo)

> 👉 **[웹사이트 바로 열기](https://id-preview--138139c2-24fc-4e1f-9479-c85b1a0cf20f.lovable.app)** ← 이 링크를 클릭하면 실제 렌더링된 Mirandil 웹사이트가 크롬에서 바로 열립니다.

| 종류 | 주소 |
|------|------|
| 🏠 메인 사이트 | https://id-preview--138139c2-24fc-4e1f-9479-c85b1a0cf20f.lovable.app |
| 📄 스타일된 README (HTML) | https://id-preview--138139c2-24fc-4e1f-9479-c85b1a0cf20f.lovable.app/readme.html |

> ⚠️ GitHub에서 `.html` 파일을 클릭하면 **소스코드**가 표시됩니다. 실제 렌더링된 페이지를 보려면 위 링크를 사용하세요.

## 과제 설명

가상의 자산운용사 **Mirandil** (설립 1987)의 공식 웹사이트를 구현한 과제입니다.
"AI가 먼저 리스크를 본다(See risk first)"라는 철학을 기반으로, 단 세 가지 자산
(**USD · QQQ · SPY**)만 운용하는 방어형 투자 전략을 브랜드 사이트로 표현합니다.

### 핵심 컨셉
- **AI 리스크 감지**: 거시·지정학·시장 시그널을 24/7 모니터링
- **품질 자산만 보유**: USD, QQQ, SPY 세 가지로 단순화
- **리스크 발생 시 후퇴**: 자산을 매도하고 달러로 대피
- **리스크 해소 시 복귀**: 동일한 품질 자산으로 재진입, 복리 재개

### 페이지 구성
| 경로 | 설명 |
|------|------|
| `/` | 홈 — 4가지 운용 원칙과 사이트 내비게이션 |
| `/about` | 회사 철학과 1987년부터의 역사 |
| `/leadership` | 운용진 소개 |
| `/businesses` | AI 리스크 엔진 작동 방식(전략) |
| `/investments` | 현재 보유 포지션 |
| `/insights` | 마켓 코멘터리 / 투자 서한 |
| `/investors` | 투자자 리포트 및 공시 |
| `/careers` | 채용 |
| `/responsibility` | 사회적 책임 |
| `/contact` | 연락처 |

## 기술 스택
- **Framework**: TanStack Start v1 (React 19 + Vite 7)
- **Styling**: Tailwind CSS v4 (semantic tokens in `src/styles.css`)
- **UI**: shadcn/ui 컴포넌트
- **Routing**: TanStack Router (file-based, `src/routes/`)
- **배포**: Cloudflare Workers (edge runtime)

## 폴더 구조
```
src/
├── routes/         # 파일 기반 라우트 (페이지)
├── components/     # 재사용 UI 컴포넌트
│   └── ui/         # shadcn/ui 프리미티브
├── hooks/          # 커스텀 React 훅
├── lib/            # 유틸리티
├── styles.css      # Tailwind + 디자인 토큰
└── router.tsx      # 라우터 부트스트랩
```

## 개발

```bash
bun install
bun run dev
```

---
Made with [Lovable](https://lovable.dev).
