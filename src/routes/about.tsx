import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Quote } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mirandil" },
      {
        name: "description",
        content:
          "Mirandil은 2027년 7월 1일 설립된 AI 네이티브 핀테크 스타트업입니다. AI 에이전트가 리스크를 먼저 감지하고, 단 세 자산으로 자본을 운용합니다.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        num="01"
        eyebrow="About"
        title="AI가 먼저 리스크를 봅니다."
        lede="Mirandil은 2027년 7월 1일 설립된 AI 네이티브 핀테크 스타트업입니다. 전통적인 자산운용사가 아닌, AI 에이전트가 시장을 감시하고 자본을 배분하는 새로운 형태의 투자 회사입니다."
      />

      <section className="px-5 py-12">
        <Eyebrow num="01.1">Our Founding</Eyebrow>
        <p className="text-base leading-relaxed text-foreground/80">
          Mirandil은 2027년 7월 1일, AI 엔지니어와 퀀트 트레이더로 구성된 소수의 창업팀이
          시작했습니다. 우리의 가설은 단순합니다 — 거시 리스크는 사람보다 AI가 먼저 본다.
          그 신호 위에서, 우리는 단 세 자산(USD · QQQ · SPY)만으로 자본을 운용합니다.
        </p>
      </section>

      <section className="mx-5 aspect-[4/3] bg-cream border border-border relative">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="font-display text-4xl text-primary leading-tight">
            One engine.
            <br />
            <span className="italic text-gold">Three assets.</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <Eyebrow num="01.2">Timeline</Eyebrow>
        <div className="space-y-8">
          {[
            { y: "2027.07", t: "Founded", d: "AI 엔지니어와 퀀트 트레이더가 모여 창업." },
            { y: "2027.09", t: "Risk Engine v0", d: "거시·지정학·시장 신호를 통합한 첫 AI 리스크 엔진 가동." },
            { y: "2027.11", t: "Seed Round", d: "AI 핀테크 전문 투자자 그룹으로부터 시드 투자 유치." },
            { y: "2028.02", t: "Live Deployment", d: "USD · QQQ · SPY 3-자산 로테이션 전략을 실거래에 적용." },
            { y: "2028.06", t: "Agent Framework", d: "리스크 감지 · 의사결정 · 집행을 분리한 멀티 에이전트 구조 출시." },
            { y: "2028.12", t: "First Annual Letter", d: "투자자에게 보내는 첫 연례 서신 발행." },
          ].map((m) => (
            <div key={m.y} className="grid grid-cols-[72px_1fr] gap-4 border-t border-border pt-5">
              <div className="font-display text-xl text-gold">{m.y}</div>
              <div>
                <div className="font-display text-lg text-primary">{m.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 bg-cream border-y border-border">
        <Quote
          text="우리는 시장을 예측하지 않습니다. 리스크를 감지하고, 품질을 지키고, 다시 돌아옵니다."
          author="Mirandil Founding Team"
          role="Founders"
        />
      </section>

      <section className="px-5 py-16">
        <Eyebrow num="01.3">What We Believe</Eyebrow>
        <div className="space-y-6">
          {[
            "리스크는 사람보다 AI가 먼저 본다.",
            "단순한 규칙이 복잡한 모델을 이긴다.",
            "보유 자산은 적을수록 좋다 — USD · QQQ · SPY, 그게 전부.",
            "예측하지 않는다. 감지하고, 후퇴하고, 돌아온다.",
          ].map((s, i) => (
            <p key={i} className="font-display text-xl leading-snug text-primary border-l-2 border-gold pl-4">
              {s}
            </p>
          ))}
        </div>
      </section>

      <NextPage to="/leadership" label="Leadership" />
    </PageShell>
  );
}
