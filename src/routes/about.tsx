import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Quote } from "@/components/page-parts";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mirandil" },
      {
        name: "description",
        content:
          "Mirandil is an AI-native fintech startup founded on July 1, 2027. Run by AI and the Founder — no committees, no analysts. Just three assets.",
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
        title="Run by AI and the Founder."
        lede="Mirandil is an AI-native fintech startup founded on July 1, 2027. The entire firm is operated by two parties — autonomous AI agents and a single Founder. No committees. No analysts. No legacy desks."
      />

      <section className="px-5 py-12">
        <h2 className="font-display text-3xl text-primary mb-6 leading-tight">Our Founding</h2>
        <p className="text-base leading-relaxed text-foreground/80">
          Mirandil was founded on July 1, 2027. From day one, the firm has been operated by AI and
          the Founder — together. AI agents monitor global risk and execute the rotation; the Founder
          sets the mandate, owns the outcomes, and signs every letter. On top of that partnership,
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
        <h2 className="font-display text-3xl text-primary mb-6 leading-tight">
          The Name — <span className="italic text-gold">Friend of the Jewel.</span>
        </h2>
        <p className="text-base leading-relaxed text-foreground/80 mb-8">
          The name <em>Mirandil</em> is drawn from the languages of J.R.R. Tolkien, formed from
          two Elvish roots:
        </p>
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-[80px_1fr] gap-4 border-t border-border pt-4">
            <div className="font-display text-2xl text-gold">mir</div>
            <div>
              <div className="font-display text-lg text-primary">"jewel, precious thing"</div>
              <div className="text-sm text-muted-foreground mt-1">
                Quenya — that which is rare, lasting, and worth guarding. For us, the client's capital.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-4 border-t border-border pt-4">
            <div className="font-display text-2xl text-gold">-(n)dil</div>
            <div>
              <div className="font-display text-lg text-primary">"devoted friend, steward"</div>
              <div className="text-sm text-muted-foreground mt-1">
                Quenya suffix denoting selfless devotion — not ownership, but loyal service to what
                is entrusted.
              </div>
            </div>
          </div>
        </div>
        <p className="text-base leading-relaxed text-foreground/80 border-l-2 border-gold pl-4">
          Together: <strong className="text-primary">Mirandil</strong> — one devoted to the jewel.
          A steward of what is precious. It is the posture we take toward every dollar under our care:
          AI watches, the Founder answers, and the asset is protected first.
        </p>
      </section>

      <section className="px-5 py-16 border-t border-border">
        <h2 className="font-display text-3xl text-primary mb-6 leading-tight">Timeline</h2>
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
        <h2 className="font-display text-3xl text-primary mb-6 leading-tight">What We Believe</h2>
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
