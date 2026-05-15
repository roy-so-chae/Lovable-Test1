import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirandil.ai — AI-Native Risk Intelligence" },
      {
        name: "description",
        content:
          "Mirandil.ai — AI가 먼저 리스크를 봅니다. 1987년 설립, 단 세 자산(USD·QQQ·SPY)으로 운용하는 AI 네이티브 자산운용사.",
      },
    ],
  }),
  component: HomePage,
});

const principles = [
  {
    num: "01",
    title: "See risk first.",
    desc: "AI monitors global macro, geopolitical, and market signals 24/7.",
  },
  {
    num: "02",
    title: "Hold only quality.",
    desc: "Three assets. Nothing else. USD · QQQ · SPY.",
  },
  {
    num: "03",
    title: "Retreat when it triggers.",
    desc: "Sell quality, hold dollars, wait for the storm to pass.",
  },
  {
    num: "04",
    title: "Return when it clears.",
    desc: "Re-enter the same quality assets. Compounding resumes.",
  },
] as const;

const navCards = [
  { to: "/about", num: "05", label: "About", desc: "Our philosophy and history since 1987." },
  { to: "/leadership", num: "06", label: "Leadership", desc: "Stewards entrusted with your capital." },
  { to: "/businesses", num: "07", label: "Strategy", desc: "How the AI risk engine works." },
  { to: "/investments", num: "08", label: "Holdings", desc: "Current posture — USD · QQQ · SPY." },
  { to: "/insights", num: "09", label: "Insights", desc: "Letters and market commentary." },
  { to: "/investors", num: "10", label: "Investors", desc: "Reports and disclosures." },
  { to: "/contact", num: "11", label: "Contact", desc: "Reach our offices." },
] as const;

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="px-5 pt-12 pb-10 fade-in">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Established 1987
          </span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Live
            </span>
          </div>
        </div>

        <div className="mb-7 flex items-baseline">
          <span className="font-brand text-[3.6rem] leading-none text-primary">Mirandil</span>
          <span className="font-brand text-[2rem] leading-none text-gold ml-[2px]">.ai</span>
        </div>

        <Eyebrow num="00">AI Risk Engine</Eyebrow>
        <h1 className="font-display text-[44px] leading-[1.02] tracking-tight text-primary">
          See risk first.
          <br />
          Hold only <span className="italic text-gold">quality</span>.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Our AI watches global risk around the clock. When the signal triggers,
          we move to cash. When it clears, we return to quality.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            to="/businesses"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium tracking-wide"
          >
            Our Strategy <span>→</span>
          </Link>
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            USD · QQQ · SPY
          </span>
        </div>
      </section>

      {/* Signal panel — current state */}
      <section className="mx-5 mt-8 bg-primary text-primary-foreground relative overflow-hidden">
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
          <div className="text-sm opacity-80">Holding quality assets.</div>

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
          A simple rule,<br />in four steps.
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
          Through every<br />cycle.
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {[
            ["38", "yrs", "Since 1987"],
            ["3", "", "Assets — USD · QQQ · SPY"],
            ["24/7", "", "AI Risk Surveillance"],
            ["+12.9%", "", "10-Year Annualized"],
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
          Where would you<br />like to begin?
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
          "We do not predict the market.
          We detect risk, preserve quality, and return."
        </p>
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 mt-6 text-sm font-medium underline underline-offset-4 decoration-gold"
        >
          Read the full letter <span>→</span>
        </Link>
      </section>
    </PageShell>
  );
}
