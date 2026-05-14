import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow } from "@/components/page-parts";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Mirandil Capital" },
      { name: "description", content: "Meet the executive committee and board of directors of Mirandil Capital." },
    ],
  }),
  component: LeadershipPage,
});

const execs = [
  { name: "Margaret H. Whitfield", role: "Chair & Chief Executive Officer", tenure: "Since 2019", bio: "Joined Mirandil in 1998. Previously head of Reinsurance Group. Trustee, Carnegie Endowment." },
  { name: "Jonathan A. Reyes", role: "President & Chief Operating Officer", tenure: "Since 2021", bio: "Twenty-three years at Mirandil across banking and asset management. Wharton MBA." },
  { name: "Ines Brunelli", role: "Chief Financial Officer", tenure: "Since 2020", bio: "Former Partner, McKinsey & Co. Joined Mirandil to lead capital allocation discipline." },
  { name: "David Okonkwo", role: "Chief Investment Officer", tenure: "Since 2017", bio: "Oversees $312B of public and private market portfolios. Author, 'The Patient Mandate.'" },
  { name: "Helena Park", role: "General Counsel", tenure: "Since 2018", bio: "Former Assistant U.S. Attorney, S.D.N.Y. Yale Law School, 2002." },
  { name: "Thomas Reinhardt", role: "Chief Risk Officer", tenure: "Since 2022", bio: "Three decades in insurance underwriting and enterprise risk management." },
];

export default function LeadershipPage() {
  return (
    <PageShell>
      <PageHeader
        num="02"
        eyebrow="Leadership"
        title="Stewards, not celebrities."
        lede="Our leaders are chosen for judgment, character, and the willingness to think in decades. They are paid to allocate capital wisely — and to step aside when wiser hands appear."
      />

      <section className="px-5 py-12">
        <Eyebrow num="02.1">Executive Committee</Eyebrow>
        <div className="space-y-0">
          {execs.map((e, i) => (
            <article key={e.name} className="border-t border-border py-6 last:border-b">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 shrink-0 bg-primary text-primary-foreground flex items-center justify-center font-display text-xl">
                  {e.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] text-gold tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-xl text-primary mt-1 leading-tight">{e.name}</h3>
                  <div className="text-sm text-foreground mt-1">{e.role}</div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    {e.tenure}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{e.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 bg-primary text-primary-foreground">
        <div className="eyebrow text-gold mb-4">Board of Directors</div>
        <h2 className="font-display text-3xl mb-8 leading-tight">
          Twelve independent voices.
          <br />
          <span className="italic">One fiduciary standard.</span>
        </h2>
        <ul className="space-y-3">
          {[
            "Sir Geoffrey Allerton — Former Governor, Bank of England",
            "Dr. Anjali Mehrotra — Professor of Economics, Princeton",
            "Charles E. Whitman — Retired Chair, Whitman Industries",
            "Yuki Tanaka — Founding Partner, Sakura Ventures",
            "Robert J. Halsey — Former Vice Chair, Federal Reserve",
            "Beatriz Salgado — CEO, Salgado Foundation",
          ].map((n) => (
            <li key={n} className="text-sm border-b border-primary-foreground/20 pb-3">
              {n}
            </li>
          ))}
        </ul>
        <div className="mt-6 font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
          + Six additional independent directors
        </div>
      </section>

      <NextPage to="/businesses" label="Our Businesses" />
    </PageShell>
  );
}
