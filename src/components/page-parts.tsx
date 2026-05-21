import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header, Footer } from "./site-chrome";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted md:py-6">
      <div className="mx-auto flex min-h-screen md:min-h-[calc(100vh-3rem)] max-w-[440px] flex-col bg-background md:shadow-2xl md:border md:border-border">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export function Eyebrow({ num, children }: { num?: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      {num && <span className="font-mono text-[10px] text-gold tracking-[0.25em]">{num}</span>}
      {num && <span className="gold-line" />}
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function PageHeader({
  num,
  eyebrow,
  title,
  lede,
}: {
  num?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="px-5 pt-10 pb-12 border-b border-border fade-in">
      {eyebrow && (num ? <Eyebrow num={num}>{eyebrow}</Eyebrow> : <div className="eyebrow mb-4">{eyebrow}</div>)}
      <h1 className="font-display text-[44px] leading-[1.05] tracking-tight text-primary">{title}</h1>
      {lede && <p className="mt-6 text-base leading-relaxed text-muted-foreground">{lede}</p>}
    </section>
  );
}

export function SectionTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <div className="mb-6">
      {kicker && <div className="eyebrow mb-2">{kicker}</div>}
      <h2 className="font-display text-3xl leading-tight text-primary">{children}</h2>
    </div>
  );
}

export function NextPage({ to, label }: { to: string; label: string }) {
  return (
    <div className="px-5 py-12 border-t border-border">
      <Link to={to} className="block group">
        <div className="eyebrow mb-2">Next</div>
        <div className="flex items-baseline justify-between">
          <span className="font-display text-3xl text-primary group-hover:text-gold transition-colors">
            {label}
          </span>
          <span className="text-2xl text-gold">→</span>
        </div>
      </Link>
    </div>
  );
}

export function Stat({ value, label, suffix }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-display text-4xl text-primary">
        {value}
        {suffix && <span className="text-gold text-2xl ml-0.5">{suffix}</span>}
      </div>
      <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
}

export function Quote({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <blockquote className="border-l-2 border-gold pl-5 py-2">
      <p className="font-display text-2xl leading-snug text-primary italic">"{text}"</p>
      <footer className="mt-4">
        <div className="text-sm font-medium text-foreground">{author}</div>
        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
          {role}
        </div>
      </footer>
    </blockquote>
  );
}
