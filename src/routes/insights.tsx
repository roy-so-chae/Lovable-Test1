import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow } from "@/components/page-parts";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Mirandil Capital" },
      { name: "description", content: "Research, letters, and perspectives from our investment team." },
    ],
  }),
  component: InsightsPage,
});

const features = [
  {
    cat: "Annual Letter",
    date: "March 2025",
    title: "On Holding Periods, and Why Ours Is Forever",
    excerpt: "A letter from the Chair on the discipline of permanence in an age of impatience.",
    read: "18 min",
  },
  {
    cat: "Research Note",
    date: "February 2025",
    title: "The Reinsurance Cycle Has Turned. We Have Not.",
    excerpt: "Hard market discipline and what underwriting integrity costs in a soft year.",
    read: "9 min",
  },
];

const articles = [
  ["White Paper", "Private Credit in a Higher-Rate Regime", "Jan 2025", "12 min"],
  ["Perspective", "Why We Still Read 10-Ks Front to Back", "Dec 2024", "6 min"],
  ["Quarterly", "Q4 2024 Portfolio Commentary", "Nov 2024", "22 min"],
  ["Speech", "The Quiet Virtue of Boring Capital", "Oct 2024", "14 min"],
  ["Research", "Energy Transition: Patient Capital Required", "Sep 2024", "11 min"],
  ["Note", "Three Things We Learned from the 2008 Letter", "Aug 2024", "7 min"],
];

function InsightsPage() {
  return (
    <PageShell>
      <PageHeader
        num="05"
        eyebrow="Research & Insights"
        title="Letters, research, and the long view."
        lede="We write so that we may think more clearly. We publish so that our partners may hold us to account."
      />

      <section className="px-5 py-12">
        <Eyebrow num="05.1">Featured</Eyebrow>
        <div className="space-y-8">
          {features.map((a) => (
            <article key={a.title} className="bg-cream border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">
                  {a.cat}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{a.date}</span>
              </div>
              <h2 className="font-display text-2xl text-primary leading-tight">{a.title}</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {a.read} read
                </span>
                <span className="text-gold text-sm font-medium">Read essay →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 border-t border-border">
        <Eyebrow num="05.2">Archive</Eyebrow>
        <div className="space-y-0">
          {articles.map(([cat, title, date, read]) => (
            <article key={title} className="py-5 border-t border-border first:border-t-0">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                {cat} · {date}
              </div>
              <h3 className="font-display text-lg text-primary leading-tight">{title}</h3>
              <div className="font-mono text-[10px] text-muted-foreground mt-2">{read} read →</div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-primary text-primary-foreground">
        <div className="eyebrow text-gold mb-4">Subscribe</div>
        <h2 className="font-display text-3xl mb-4 leading-tight">
          The Quarterly,
          <br />
          delivered to your desk.
        </h2>
        <p className="text-sm opacity-80 mb-6">
          A printed letter four times a year. No tracking, no algorithms — just our latest
          thinking, posted to your address.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="your.email@firm.com"
            className="w-full bg-transparent border border-primary-foreground/30 px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold"
          />
          <button className="w-full bg-gold text-gold-foreground py-3 text-sm font-medium tracking-wide">
            Request Subscription
          </button>
        </form>
      </section>

      <NextPage to="/responsibility" label="Responsibility" />
    </PageShell>
  );
}
