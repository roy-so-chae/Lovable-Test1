import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S25 Capital — AI 위험 감지로 우량 자산을 지키는 투자" },
      {
        name: "description",
        content:
          "1987년 설립. AI가 전세계 위험을 감지하면 우량 자산을 현금화하고, 위험이 지나가면 다시 매수합니다. USD · QQQ · SPY 단 세 자산에만 집중합니다.",
      },
    ],
  }),
  component: HomePage,
});

const principles = [
  {
    num: "01",
    title: "위험을 먼저 본다",
    desc: "AI가 전세계 거시·지정학·시장 신호를 24시간 감시합니다.",
  },
  {
    num: "02",
    title: "우량만 보유한다",
    desc: "투자 자산은 단 세 가지. USD · QQQ · SPY.",
  },
  {
    num: "03",
    title: "위험이 오면 비운다",
    desc: "신호가 켜지면 우량 자산을 팔고 달러로 후퇴합니다.",
  },
  {
    num: "04",
    title: "지나가면 다시 산다",
    desc: "위험이 끝나면 같은 우량 자산을 다시 매수합니다.",
  },
] as const;

const navCards = [
  { to: "/about", num: "05", label: "About", desc: "1987년부터의 철학과 역사." },
  { to: "/leadership", num: "06", label: "Leadership", desc: "자본을 위탁받은 사람들." },
  { to: "/businesses", num: "07", label: "Strategy", desc: "AI 위험 감지 모델의 작동 방식." },
  { to: "/investments", num: "08", label: "Holdings", desc: "현재 보유 — USD · QQQ · SPY." },
  { to: "/insights", num: "09", label: "Insights", desc: "주주 서한과 시장 노트." },
  { to: "/investors", num: "10", label: "Investors", desc: "리포트와 공시." },
  { to: "/contact", num: "11", label: "Contact", desc: "오피스 연락처." },
] as const;

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="px-5 pt-12 pb-10 fade-in">
        <Eyebrow num="00">Established 1987</Eyebrow>
        <h1 className="font-display text-[48px] leading-[0.98] tracking-tight text-primary">
          위험을 먼저 본다.
          <br />
          <span className="italic text-gold">우량</span>만 남긴다.
        </h1>
        <p className="mt-7 text-base leading-relaxed text-muted-foreground">
          AI가 전세계 위험을 감지합니다. 신호가 켜지면 우량 자산을 팔고
          달러를 보유합니다. 위험이 지나가면 다시 매수합니다.
          단 세 자산 — <span className="text-foreground font-medium">USD · QQQ · SPY</span> 만 다룹니다.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            to="/businesses"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-sm font-medium tracking-wide"
          >
            전략 보기 <span>→</span>
          </Link>
          <Link to="/investors" className="text-sm font-medium underline underline-offset-4 decoration-gold">
            Investor Relations
          </Link>
        </div>
      </section>

      {/* Signal panel — 현재 상태 */}
      <section className="mx-5 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-[0.06]" />
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase opacity-80">
                Live · Risk Signal
              </span>
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] opacity-60">
              FY 2025
            </span>
          </div>

          <div className="font-mono text-[10px] tracking-[0.25em] opacity-70 mb-2">
            CURRENT POSTURE
          </div>
          <div className="font-display text-5xl leading-none mb-1">
            <span className="text-gold">RISK-ON</span>
          </div>
          <div className="text-sm opacity-80">우량 자산 보유 단계</div>

          <div className="grid grid-cols-3 mt-8 border-t border-primary-foreground/20">
            {[
              ["USD", "12%"],
              ["QQQ", "44%"],
              ["SPY", "44%"],
            ].map(([k, v]) => (
              <div key={k} className="border-r border-primary-foreground/20 last:border-r-0 py-4 px-1">
                <div className="font-mono text-[10px] tracking-[0.2em] opacity-60">{k}</div>
                <div className="font-display text-2xl mt-1">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-primary-foreground/20 flex items-baseline justify-between">
            <span className="font-mono text-[10px] tracking-[0.2em] opacity-60">LAST ROTATION</span>
            <span className="font-mono text-xs opacity-80">2025 · 03 · 18</span>
          </div>
        </div>
      </section>

      {/* Four principles */}
      <section className="px-5 py-14">
        <Eyebrow num="01">Method</Eyebrow>
        <h2 className="font-display text-3xl text-primary mb-8 leading-tight">
          단순한 규칙,<br />네 단계.
        </h2>
        <div className="space-y-0">
          {principles.map((p) => (
            <div key={p.num} className="py-5 border-t border-border first:border-t last:border-b">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-gold tracking-[0.25em]">{p.num}</span>
                <div className="flex-1">
                  <div className="font-display text-xl text-primary">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className="px-5 py-12 bg-secondary">
        <Eyebrow num="02">Track Record</Eyebrow>
        <h2 className="font-display text-3xl text-primary mb-8 leading-tight">
          모든 사이클을<br />지나오며.
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {[
            ["38", "년", "1987년부터"],
            ["3", "자산", "USD · QQQ · SPY"],
            ["24/7", "", "AI 위험 감시"],
            ["+12.9%", "", "10년 연평균 수익"],
          ].map(([v, suf, label]) => (
            <div key={label} className="border-t border-border pt-3">
              <div className="font-display text-4xl text-primary leading-none">
                {v}
                {suf && <span className="text-gold text-xl ml-1">{suf}</span>}
              </div>
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation hub */}
      <section className="px-5 py-14">
        <Eyebrow num="03">Explore</Eyebrow>
        <h2 className="font-display text-3xl text-primary mb-8 leading-tight">
          어디서부터<br />보시겠어요?
        </h2>
        <nav className="space-y-0">
          {navCards.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="flex items-center justify-between py-5 border-b border-border first:border-t group"
            >
              <div className="flex-1 pr-4">
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
                  {c.num}
                </div>
                <div className="font-display text-xl text-primary mt-1 group-hover:text-gold transition-colors">
                  {c.label}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{c.desc}</div>
              </div>
              <span className="text-gold text-xl">→</span>
            </Link>
          ))}
        </nav>
      </section>

      {/* Letter quote */}
      <section className="px-5 py-14 bg-primary text-primary-foreground">
        <div className="eyebrow mb-6 text-gold">Letter to Shareholders</div>
        <p className="font-display text-2xl leading-snug italic">
          "우리는 시장을 예측하지 않습니다.
          위험을 감지하고, 우량을 지키고, 다시 돌아옵니다."
        </p>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium underline underline-offset-4 decoration-gold"
        >
          전체 서한 읽기 <span>→</span>
        </Link>
      </section>
    </PageShell>
  );
}
