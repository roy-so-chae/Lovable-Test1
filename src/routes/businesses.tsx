import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Stat } from "@/components/page-parts";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Businesses — Mirandil" },
      { name: "description", content: "Five operating sectors, each held with the same long-term discipline." },
    ],
  }),
  component: BusinessesPage,
});

const sectors = [
  {
    n: "I",
    name: "Insurance & Reinsurance",
    desc: "Property, casualty, and specialty lines underwritten with multi-decade discipline. The float we generate is patient capital for the rest of the firm.",
    metrics: [["$214B", "Premium float"], ["A++", "AM Best rating"]],
  },
  {
    n: "II",
    name: "Banking & Trust",
    desc: "Heritage Trust Company serves over 18,000 families and institutions. Conservative balance sheet. No proprietary trading. Relationships measured in generations.",
    metrics: [["$186B", "Client assets"], ["1894", "Founded"]],
  },
  {
    n: "III",
    name: "Asset Management",
    desc: "Concentrated portfolios in public equity and private credit, managed for endowments, pensions, and sovereign clients. We charge what we earn — no more.",
    metrics: [["$312B", "AUM"], ["64", "Investment professionals"]],
  },
  {
    n: "IV",
    name: "Industrials & Energy",
    desc: "Long-cycle infrastructure assets — railroads, regulated utilities, midstream energy. Boring on purpose. Predictable on principle.",
    metrics: [["$94B", "Asset base"], ["38yr", "Average asset life"]],
  },
  {
    n: "V",
    name: "Consumer Brands",
    desc: "Heritage household names with durable economics and honest management. We do not turn them around. We do not turn them over. We compound them.",
    metrics: [["41", "Operating brands"], ["112yr", "Oldest holding"]],
  },
];

function BusinessesPage() {
  return (
    <PageShell>
      <PageHeader
        num="03"
        eyebrow="Operating Businesses"
        title="Five sectors. One discipline."
        lede="We do not chase trends or rotate sectors. Each of our five operating groups is held with the same standard: durable economics, honest leadership, and a margin of safety."
      />

      <section className="px-5 py-12">
        <div className="space-y-12">
          {sectors.map((s) => (
            <article key={s.n} className="border-t-2 border-primary pt-6">
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-display text-5xl text-gold italic">{s.n}</span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Sector
                </span>
              </div>
              <h2 className="font-display text-3xl text-primary leading-tight">{s.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">{s.desc}</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {s.metrics.map(([v, l]) => (
                  <div key={l} className="bg-cream border border-border p-4">
                    <div className="font-display text-2xl text-primary">{v}</div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <NextPage to="/investments" label="Investment Approach" />
    </PageShell>
  );
}
