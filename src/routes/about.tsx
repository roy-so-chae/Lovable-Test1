import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Quote } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mirandil" },
      {
        name: "description",
        content:
          "Mirandil is an AI-native fintech startup founded on July 1, 2027. Our AI agents detect risk first and allocate capital across just three assets.",
      },
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
        title="AI sees risk first."
        lede="Mirandil is an AI-native fintech startup founded on July 1, 2027. Not a traditional asset manager — a new kind of investment firm where AI agents monitor markets and allocate capital."
      />

      <section className="px-5 py-12">
        <Eyebrow num="01.1">Our Founding</Eyebrow>
        <p className="text-base leading-relaxed text-foreground/80">
          Mirandil was founded on July 1, 2027 by a small team of AI engineers and quant traders.
          Our thesis is simple — machines see macro risk before humans do. On top of that signal,
          we run capital through only three assets: USD, QQQ, and SPY.
        </p>
      </section>

      <section className="mx-5 aspect-[4/3] bg-cream border border-border relative">
        <div className="absolute inset-0 bg-pattern opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="font-display text-4xl text-primary leading-tight">
            One engine.
            <br />
            <span className="italic text-gold">Three assets.</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <Eyebrow num="01.2">Timeline</Eyebrow>
        <div className="space-y-8">
          {[
            { y: "2027.07", t: "Founded", d: "AI engineers and quant traders come together." },
            { y: "2027.09", t: "Risk Engine v0", d: "First AI risk engine fusing macro, geopolitical, and market signals goes live." },
            { y: "2027.11", t: "Seed Round", d: "Seed funding led by AI fintech specialist investors." },
            { y: "2028.02", t: "Live Deployment", d: "Three-asset rotation strategy (USD · QQQ · SPY) deployed in production." },
            { y: "2028.06", t: "Agent Framework", d: "Multi-agent architecture separating detection, decision, and execution ships." },
            { y: "2028.12", t: "First Annual Letter", d: "Inaugural letter to investors published." },
          ].map((m) => (
            <div key={m.y} className="grid grid-cols-[72px_1fr] gap-4 border-t border-border pt-5">
              <div className="font-display text-xl text-gold">{m.y}</div>
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
          text="We do not predict the market. We detect risk, preserve quality, and return."
          author="Mirandil Founding Team"
          role="Founders"
        />
      </section>

      <section className="px-5 py-16">
        <Eyebrow num="01.3">What We Believe</Eyebrow>
        <div className="space-y-6">
          {[
            "Machines see risk before humans do.",
            "Simple rules outperform complex models.",
            "Fewer holdings, better outcomes — USD, QQQ, SPY. That's all.",
            "We don't predict. We detect, retreat, and return.",
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
