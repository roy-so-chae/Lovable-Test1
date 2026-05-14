import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/page-parts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S25 Capital — Stewards of Enduring Value" },
      { name: "description", content: "A diversified holding company partnering with exceptional businesses for the long term." },
    ],
  }),
  component: HomePage,
});

const navCards = [
  { to: "/about", num: "01", label: "About", desc: "Our philosophy and history since 1987." },
  { to: "/leadership", num: "02", label: "Leadership", desc: "Stewards entrusted with your capital." },
  { to: "/businesses", num: "03", label: "Businesses", desc: "Five sectors. One discipline." },
  { to: "/investments", num: "04", label: "Investments", desc: "Concentrated, long-duration capital." },
  { to: "/insights", num: "05", label: "Insights", desc: "Letters and market commentary." },
  { to: "/responsibility", num: "06", label: "Responsibility", desc: "Stewardship beyond returns." },
  { to: "/investors", num: "07", label: "Investors", desc: "Reports, governance, disclosures." },
  { to: "/careers", num: "08", label: "Careers", desc: "Join a multi-decade institution." },
  { to: "/contact", num: "09", label: "Contact", desc: "Reach our offices." },
] as const;

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="px-5 pt-12 pb-12 fade-in">
        <Eyebrow num="00">Established 1987</Eyebrow>
        <h1 className="font-display text-[52px] leading-[0.95] tracking-tight text-primary">
          Stewards of capital.
          <br />
          <span className="italic text-gold">Builders</span> of enduring value.
        </h1>
        <p className="mt-7 text-base leading-relaxed text-muted-foreground">
          A diversified holding company partnering with exceptional businesses
          and long-term investors for nearly four decades.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-sm font-medium tracking-wide"
          >
            Our Philosophy <span>→</span>
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

      {/* Main navigation hub */}
      <section className="px-5 py-14">
        <Eyebrow num="01">Explore</Eyebrow>
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

      {/* Brief quote */}
      <section className="px-5 py-14 bg-primary text-primary-foreground">
        <div className="eyebrow mb-6 text-gold">Letter to Shareholders</div>
        <p className="font-display text-2xl leading-snug italic">
          "Our task is simple: to allocate capital wisely, to honor the trust placed in us."
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
