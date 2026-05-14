import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader, NextPage, Eyebrow, Quote } from "@/components/page-parts";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — S25 Capital" },
      { name: "description", content: "Join a firm built on judgment, character, and the long view." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  ["Investment Associate", "New York, NY", "Public Equity"],
  ["Underwriter, Specialty Lines", "London, UK", "Insurance"],
  ["Risk Analyst", "Omaha, NE", "Enterprise Risk"],
  ["Trust Officer", "Boston, MA", "Heritage Trust"],
  ["Software Engineer, Treasury Systems", "New York, NY", "Technology"],
  ["Foundation Program Director", "New York, NY", "S25 Foundation"],
];

function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        num="08"
        eyebrow="Careers"
        title="A career, not a rotation."
        lede="We hire for judgment and character, then we develop the rest. Most of our partners joined us in their twenties and built their careers across decades."
      />

      <section className="px-5 py-12 bg-cream border-y border-border">
        <Quote
          text="At S25 the work is patient, the standards are high, and the people stay. I joined as an analyst in 1999 and have never had a reason to leave."
          author="David Okonkwo"
          role="Chief Investment Officer"
        />
      </section>

      <section className="px-5 py-12">
        <Eyebrow num="08.1">What we offer</Eyebrow>
        <div className="space-y-6">
          {[
            ["Profit sharing", "Every employee — analyst to officer — shares in the firm's results."],
            ["Pension", "A defined-benefit plan, fully funded, indexed to inflation."],
            ["Health & family", "Comprehensive coverage and parental leave for all caregivers."],
            ["Sabbatical", "A paid quarter of leave every seven years of service."],
            ["Education", "Continued tuition reimbursement, including doctoral programs."],
          ].map(([t, d]) => (
            <div key={t as string} className="border-t border-border pt-4">
              <div className="font-display text-xl text-primary">{t}</div>
              <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 bg-primary text-primary-foreground">
        <Eyebrow num="08.2">Open roles</Eyebrow>
        <div className="space-y-0 mt-4">
          {roles.map(([t, loc, dept]) => (
            <a
              key={t}
              href="#"
              className="block py-5 border-t border-primary-foreground/20 last:border-b group"
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <div className="font-display text-lg group-hover:text-gold transition-colors">
                    {t}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-60 mt-1">
                    {dept} · {loc}
                  </div>
                </div>
                <span className="text-gold">→</span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-xs opacity-50 mt-8 leading-relaxed">
          S25 Capital is an equal opportunity employer. We hire on the basis of judgment,
          character, and the work — and on no other basis.
        </p>
      </section>

      <NextPage to="/contact" label="Contact" />
    </PageShell>
  );
}
