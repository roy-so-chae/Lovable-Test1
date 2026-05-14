import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow, SectionTitle, NextPage, Stat, Quote } from "@/components/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S25 Capital — Stewards of Enduring Value" },
      { name: "description", content: "A diversified holding company partnering with exceptional businesses for the long term." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="px-5 pt-12 pb-16 fade-in">
        <Eyebrow num="00">Established 1987</Eyebrow>
        <h1 className="font-display text-[56px] leading-[0.95] tracking-tight text-primary">
          Stewards of capital.
          <br />
          <span className="italic text-gold">Builders</span> of enduring value.
        </h1>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground">
          For nearly four decades, S25 Capital has partnered with exceptional businesses and
          long-term investors to compound wealth across generations.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-sm font-medium tracking-wide"
          >
            Our Philosophy
            <span>→</span>
          </Link>
          <Link to="/investors" className="text-sm font-medium underline underline-offset-4 decoration-gold">
            Investor Relations
          </Link>
        </div>
      </section>

      {/* Hero figure */}
      <section className="mx-5 aspect-[4/5] bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-[0.08]" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-primary-foreground">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] opacity-70">SINCE</div>
              <div className="font-display text-5xl mt-1">1987</div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] tracking-[0.25em] opacity-70">REPORT</div>
              <div className="font-display text-2xl mt-1">FY 2025</div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-4">
            <div className="font-display text-3xl leading-tight">
              "We do not predict the weather.
              <br />
              <span className="italic text-gold">We build the ark.</span>"
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase mt-3 opacity-70">
              — Letter to Shareholders
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 py-16">
        <Eyebrow num="01">By the Numbers</Eyebrow>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          <Stat value="$847" suffix="B" label="Assets Under Stewardship" />
          <Stat value="38" suffix="yrs" label="Of Continuous Operation" />
          <Stat value="14.2" suffix="%" label="Compound Annual Return" />
          <Stat value="62" label="Portfolio Companies" />
          <Stat value="11,400" label="Employees Worldwide" />
          <Stat value="A+" label="S&P Credit Rating" />
        </div>
      </section>

      {/* Philosophy block */}
      <section className="px-5 py-16 bg-cream border-y border-border">
        <SectionTitle kicker="Our Approach">
          Patient capital.<br />
          <span className="italic">Permanent partnerships.</span>
        </SectionTitle>
        <p className="text-base leading-relaxed text-foreground/80 mb-8">
          We invest with the conviction that the best returns belong to those who measure time in
          decades. Our portfolio is concentrated, our holding period is indefinite, and our
          alignment with partners is absolute.
        </p>
        <div className="space-y-6">
          {[
            { n: "I.", t: "Own great businesses", d: "Operated by exceptional people, for the long term." },
            { n: "II.", t: "Underwrite conservatively", d: "Margin of safety in every commitment we make." },
            { n: "III.", t: "Compound relentlessly", d: "Reinvest earnings where the next dollar earns most." },
          ].map((p) => (
            <div key={p.n} className="flex gap-4 border-t border-border pt-5">
              <div className="font-display text-2xl text-gold w-10">{p.n}</div>
              <div>
                <div className="font-display text-xl text-primary">{p.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Businesses preview */}
      <section className="px-5 py-16">
        <Eyebrow num="02">Operating Businesses</Eyebrow>
        <h2 className="font-display text-3xl text-primary mb-8 leading-tight">
          Five sectors. One discipline.
        </h2>
        <div className="space-y-0">
          {[
            ["Insurance & Reinsurance", "Property, casualty, specialty"],
            ["Banking & Trust", "Private banking, wealth management"],
            ["Asset Management", "Public and private markets"],
            ["Industrials & Energy", "Long-cycle infrastructure"],
            ["Consumer Brands", "Heritage businesses, household names"],
          ].map(([t, d], i) => (
            <Link
              key={t}
              to="/businesses"
              className="flex items-center justify-between py-5 border-b border-border first:border-t group"
            >
              <div>
                <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em]">
                  0{i + 1}
                </div>
                <div className="font-display text-xl text-primary mt-1 group-hover:text-gold transition-colors">
                  {t}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
              <span className="text-gold text-xl">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="px-5 py-16 bg-primary text-primary-foreground">
        <div className="eyebrow mb-6 text-gold">Letter to Shareholders</div>
        <p className="font-display text-2xl leading-snug italic">
          "Our task is simple: to allocate capital wisely, to honor the trust placed in us, and to
          leave the next generation of stewards a stronger foundation than the one we inherited."
        </p>
        <div className="mt-6 font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">
          — Margaret H. Whitfield, Chair & CEO
        </div>
      </section>

      <NextPage to="/about" label="About S25" />
    </PageShell>
  );
}
