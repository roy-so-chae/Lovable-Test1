import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Stat } from "@/components/page-parts";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investor Relations — S25 Capital" },
      { name: "description", content: "Financial reports, shareholder letters, and stock information for S25 Capital." },
    ],
  }),
  component: InvestorsPage,
});

function InvestorsPage() {
  return (
    <PageShell>
      <PageHeader
        num="07"
        eyebrow="Investor Relations"
        title="Reported plainly. Disclosed fully."
        lede="We tell our shareholders the truth as we know it — in good years and in difficult ones. The figures below are updated each business day."
      />

      <section className="px-5 py-10 bg-primary text-primary-foreground">
        <div className="flex items-baseline justify-between mb-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-gold">NYSE: SCH</span>
          <span className="font-mono text-[10px] opacity-60">Last close · May 13, 2026</span>
        </div>
        <div className="font-display text-6xl mt-2">$847.40</div>
        <div className="flex items-center gap-3 mt-2">
          <span className="font-mono text-sm text-gold">+$4.18</span>
          <span className="font-mono text-sm opacity-70">+0.50%</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {[
            ["Market Cap", "$612.4B"],
            ["52-Wk High", "$891.20"],
            ["52-Wk Low", "$702.55"],
            ["Book Value", "$418.30"],
            ["P/B Ratio", "2.03×"],
            ["Dividend", "1.82%"],
          ].map(([l, v]) => (
            <div key={l} className="border-t border-primary-foreground/20 pt-3">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-60">{l}</div>
              <div className="font-display text-xl mt-1">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12">
        <Eyebrow num="07.1">Latest Filings</Eyebrow>
        <div className="space-y-0">
          {[
            ["10-K Annual Report", "FY 2025", "Mar 2026", "284 pages"],
            ["Proxy Statement", "2026", "Mar 2026", "112 pages"],
            ["10-Q Quarterly", "Q1 2026", "May 2026", "68 pages"],
            ["Annual Letter", "2025", "Mar 2026", "26 pages"],
            ["8-K Current Report", "Apr 28, 2026", "Apr 2026", "—"],
          ].map(([t, p, d, pages]) => (
            <a
              key={t + p}
              href="#"
              className="flex items-center justify-between py-5 border-t border-border last:border-b group"
            >
              <div>
                <div className="font-display text-lg text-primary group-hover:text-gold transition-colors">
                  {t}
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  {p} · {d} · {pages}
                </div>
              </div>
              <span className="text-gold">↓</span>
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-cream border-y border-border">
        <Eyebrow num="07.2">Annual Meeting</Eyebrow>
        <div className="font-display text-4xl text-primary leading-tight">
          Saturday<br />
          <span className="text-gold italic">May 2, 2026</span>
        </div>
        <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
          The 39th Annual Meeting of Shareholders will be held at the Civic Auditorium in Omaha,
          Nebraska. All shareholders of record are warmly invited to attend in person or via
          livestream.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium"
        >
          Register to attend <span>→</span>
        </a>
      </section>

      <section className="px-5 py-12">
        <Eyebrow num="07.3">Investor Contact</Eyebrow>
        <div className="space-y-3 text-sm">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">Name</div>
            <div className="font-display text-xl text-primary mt-1">Eleanor Vance</div>
            <div className="text-muted-foreground">Head of Investor Relations</div>
          </div>
          <div className="pt-3 border-t border-border">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">Direct</div>
            <div className="text-foreground mt-1">+1 (212) 555-0125</div>
            <div className="text-foreground">ir@s25capital.com</div>
          </div>
        </div>
      </section>

      <NextPage to="/careers" label="Careers" />
    </PageShell>
  );
}
