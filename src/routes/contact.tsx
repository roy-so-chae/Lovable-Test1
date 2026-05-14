import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader, Eyebrow } from "@/components/page-parts";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — S25 Capital" },
      { name: "description", content: "Reach the right team at S25 Capital." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  { city: "New York", role: "Headquarters", addr: "One Reserve Plaza, 25th Floor\nNew York, NY 10004", tel: "+1 (212) 555-0100" },
  { city: "London", role: "European Operations", addr: "12 Threadneedle Street\nLondon EC2R 8AY", tel: "+44 20 7946 0125" },
  { city: "Singapore", role: "Asia Pacific", addr: "8 Marina Boulevard, Tower 2\nSingapore 018981", tel: "+65 6812 5500" },
  { city: "Omaha", role: "Trust & Insurance", addr: "1440 Kiewit Plaza\nOmaha, NE 68131", tel: "+1 (402) 555-0125" },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        num="09"
        eyebrow="Contact"
        title="Reach the right desk."
        lede="We respond to every serious inquiry, and we do so personally. Please write to the team most relevant to your matter."
      />

      <section className="px-5 py-12">
        <Eyebrow num="09.1">Direct lines</Eyebrow>
        <div className="space-y-4">
          {[
            ["Investor Relations", "ir@s25capital.com", "+1 (212) 555-0125"],
            ["Media & Communications", "press@s25capital.com", "+1 (212) 555-0145"],
            ["Trust & Private Banking", "trust@s25capital.com", "+1 (402) 555-0188"],
            ["Foundation Inquiries", "foundation@s25capital.com", "+1 (212) 555-0190"],
            ["Careers", "careers@s25capital.com", "—"],
          ].map(([t, e, p]) => (
            <div key={t} className="border-t border-border pt-4">
              <div className="font-display text-lg text-primary">{t}</div>
              <div className="text-sm text-foreground mt-1">{e}</div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                {p}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-cream border-y border-border">
        <Eyebrow num="09.2">Offices</Eyebrow>
        <div className="space-y-8">
          {offices.map((o) => (
            <article key={o.city} className="border-t-2 border-primary pt-5">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">
                {o.role}
              </div>
              <h3 className="font-display text-3xl text-primary mt-1">{o.city}</h3>
              <p className="text-sm text-muted-foreground mt-3 whitespace-pre-line leading-relaxed">
                {o.addr}
              </p>
              <p className="font-mono text-xs text-foreground mt-2">{o.tel}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12">
        <Eyebrow num="09.3">Send a message</Eyebrow>
        <form className="space-y-4">
          <div>
            <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Your name
            </label>
            <input className="w-full bg-transparent border-b border-border py-3 mt-1 focus:outline-none focus:border-gold" />
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-border py-3 mt-1 focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Concerning
            </label>
            <select className="w-full bg-transparent border-b border-border py-3 mt-1 focus:outline-none focus:border-gold">
              <option>Investor Relations</option>
              <option>Media</option>
              <option>Trust & Banking</option>
              <option>Foundation</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 mt-1 focus:outline-none focus:border-gold"
            />
          </div>
          <button
            type="button"
            className="w-full bg-primary text-primary-foreground py-4 text-sm font-medium tracking-wide mt-4"
          >
            Submit Inquiry →
          </button>
          <p className="text-xs text-muted-foreground text-center pt-2">
            We respond within two business days.
          </p>
        </form>
      </section>

      <div className="px-5 py-12 border-t border-border">
        <Link to="/" className="block group">
          <div className="eyebrow mb-2">Return</div>
          <div className="flex items-baseline justify-between">
            <span className="font-display text-3xl text-primary group-hover:text-gold transition-colors">
              Home
            </span>
            <span className="text-2xl text-gold">↑</span>
          </div>
        </Link>
      </div>
    </PageShell>
  );
}
