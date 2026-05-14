import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Quote } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — S25 Capital" },
      { name: "description", content: "Founded in 1987, S25 Capital is built on long-term partnership and disciplined stewardship." },
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
        title="A house built to outlast its founders."
        lede="Founded in 1987 by three partners with a shared conviction — that capital, patiently allocated, compounds into prosperity for shareholders, employees, and communities alike."
      />

      <section className="px-5 py-12">
        <Eyebrow num="01.1">Our Founding</Eyebrow>
        <p className="text-base leading-relaxed text-foreground/80">
          S25 began in a single office on lower Broadway with $25 million in committed capital and
          a single mandate: to find businesses worth owning forever. Today we steward over $847
          billion across five operating sectors, but our mandate remains unchanged.
        </p>
      </section>

      <section className="mx-5 aspect-[4/3] bg-cream border border-border relative">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="font-display text-4xl text-primary leading-tight">
            38 years.
            <br />
            <span className="italic text-gold">One philosophy.</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <Eyebrow num="01.2">Timeline</Eyebrow>
        <div className="space-y-8">
          {[
            { y: "1987", t: "Founded in New York", d: "Three partners. $25M of committed capital." },
            { y: "1994", t: "First insurance acquisition", d: "Entry into property & casualty underwriting." },
            { y: "2003", t: "Public listing on NYSE", d: "Ticker SCH. Voting structure preserves long-term focus." },
            { y: "2011", t: "Trust & private banking platform", d: "Acquisition of Heritage Trust Company." },
            { y: "2019", t: "$500B in assets crossed", d: "Disciplined growth through two cycles." },
            { y: "2025", t: "Fourth generation of stewards", d: "Leadership transition complete." },
          ].map((m) => (
            <div key={m.y} className="grid grid-cols-[64px_1fr] gap-4 border-t border-border pt-5">
              <div className="font-display text-2xl text-gold">{m.y}</div>
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
          text="Reputation is the only asset that compounds without limit and disappears without warning. We protect ours every day."
          author="Margaret H. Whitfield"
          role="Chair & Chief Executive"
        />
      </section>

      <section className="px-5 py-16">
        <Eyebrow num="01.3">What We Believe</Eyebrow>
        <div className="space-y-6">
          {[
            "Time is the investor's greatest ally and the speculator's greatest enemy.",
            "Underwriting discipline outweighs market enthusiasm in every cycle.",
            "Permanent capital allows permanent thinking.",
            "Trust is earned in drops and lost in buckets.",
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
