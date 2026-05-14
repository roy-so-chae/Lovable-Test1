import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Stat } from "@/components/page-parts";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Investment Approach — Mirandil Capital" },
      { name: "description", content: "Concentrated, conservative, compounding. Our investment philosophy in practice." },
    ],
  }),
  component: InvestmentsPage,
});

function InvestmentsPage() {
  return (
    <PageShell>
      <PageHeader
        num="04"
        eyebrow="Investment Approach"
        title="Concentrated. Conservative. Compounding."
        lede="We are not in the business of being interesting. We are in the business of being right, slowly, with great consistency."
      />

      <section className="px-5 py-12">
        <Eyebrow num="04.1">Allocation</Eyebrow>
        <div className="space-y-3">
          {[
            ["Public Equity", 38, "$322B"],
            ["Private Markets", 24, "$203B"],
            ["Fixed Income", 19, "$161B"],
            ["Real Assets", 12, "$102B"],
            ["Cash & Equivalents", 7, "$59B"],
          ].map(([name, pct, amt]) => (
            <div key={name as string} className="border-t border-border pt-3">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-display text-lg text-primary">{name}</span>
                <span className="font-mono text-sm text-muted-foreground">{amt}</span>
              </div>
              <div className="h-1.5 bg-secondary relative">
                <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: `${pct}%` }} />
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1">{pct}%</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-primary text-primary-foreground">
        <div className="eyebrow text-gold mb-4">Performance</div>
        <h2 className="font-display text-3xl mb-8 leading-tight">Through every cycle.</h2>
        <div className="space-y-6">
          {[
            ["1-Year", "+11.4%", "+9.2%"],
            ["5-Year", "+13.7%", "+10.1%"],
            ["10-Year", "+12.9%", "+9.4%"],
            ["Since 1987", "+14.2%", "+10.6%"],
          ].map(([p, s25, bench]) => (
            <div key={p} className="grid grid-cols-3 items-baseline border-b border-primary-foreground/20 pb-4">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-70">{p}</div>
              <div className="font-display text-2xl text-gold text-right">{s25}</div>
              <div className="font-mono text-xs opacity-60 text-right">{bench} S&P</div>
            </div>
          ))}
        </div>
        <p className="text-xs opacity-50 mt-6 leading-relaxed">
          Returns are net of all fees, annualized. Past performance does not guarantee future
          results. Comparison to S&P 500 Total Return Index is for context only.
        </p>
      </section>

      <section className="px-5 py-12">
        <Eyebrow num="04.2">Selected Holdings</Eyebrow>
        <div className="space-y-0">
          {[
            ["Heritage Trust Co.", "Wholly owned since 2011", "Banking"],
            ["Continental Re Group", "Acquired 1994", "Insurance"],
            ["Pacific Northwest Rail", "Controlling stake since 2008", "Industrials"],
            ["Aldersgate Beverages", "Wholly owned since 2003", "Consumer"],
            ["Meridian Energy Partners", "Founding investor, 2014", "Energy"],
            ["Fairview Insurance Holdings", "Wholly owned since 1999", "Insurance"],
          ].map(([n, sub, tag]) => (
            <div key={n} className="py-4 border-t border-border last:border-b">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="font-display text-lg text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-gold whitespace-nowrap">
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NextPage to="/insights" label="Research & Insights" />
    </PageShell>
  );
}
