import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Stat } from "@/components/page-parts";

export const Route = createFileRoute("/responsibility")({
  head: () => ({
    meta: [
      { title: "Responsibility — Mirandil" },
      { name: "description", content: "Our approach to governance, sustainability, and the communities we serve." },
    ],
  }),
  component: ResponsibilityPage,
});

function ResponsibilityPage() {
  return (
    <PageShell>
      <PageHeader

        eyebrow="Responsibility"
        title="Capital with conscience."
        lede="A long-term investor cannot be indifferent to the world its capital helps build. Stewardship is not a department at Mirandil — it is the work itself."
      />

      <section className="px-5 py-12">
        <Eyebrow>Pillars</Eyebrow>
        <div className="space-y-8">
          {[
            {
              n: "01",
              t: "Governance",
              d: "Independent boards, transparent compensation, fiduciary clarity. We chair every audit committee with seriousness, never theater.",
            },
            {
              n: "02",
              t: "Climate",
              d: "Net-zero across operating businesses by 2040. $48B committed to energy transition infrastructure since 2018.",
            },
            {
              n: "03",
              t: "Communities",
              d: "Through the Mirandil Foundation, $1.2B granted since 1995 to education, civic infrastructure, and emergency relief.",
            },
            {
              n: "04",
              t: "People",
              d: "Profit sharing for every employee. Pension funded at 102%. Median tenure: 14 years.",
            },
          ].map((p) => (
            <article key={p.n} className="border-t-2 border-primary pt-5">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-display text-3xl text-gold italic">{p.n}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Pillar
                </span>
              </div>
              <h3 className="font-display text-2xl text-primary">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-cream border-y border-border">
        <Eyebrow>Impact, in figures</Eyebrow>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-6">
          <Stat value="$1.2" suffix="B" label="Foundation Grants" />
          <Stat value="$48" suffix="B" label="Transition Capital" />
          <Stat value="102" suffix="%" label="Pension Funded" />
          <Stat value="2040" label="Net-Zero Target" />
        </div>
      </section>

      <section className="px-5 py-12">
        <Eyebrow>Reporting</Eyebrow>
        <div className="space-y-3">
          {[
            "TCFD Climate Disclosure 2024",
            "Stewardship Report 2024",
            "Foundation Annual Review",
            "Corporate Governance Guidelines",
          ].map((d) => (
            <a
              key={d}
              href="#"
              className="flex items-center justify-between border border-border p-4 group hover:border-gold transition-colors"
            >
              <span className="text-sm font-medium text-primary">{d}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-gold">
                PDF →
              </span>
            </a>
          ))}
        </div>
      </section>

      <NextPage to="/investors" label="Investor Relations" />
    </PageShell>
  );
}
