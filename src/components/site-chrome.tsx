import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/businesses", label: "Strategy" },
  { to: "/investments", label: "Holdings" },
  { to: "/insights", label: "Insights" },
  { to: "/investors", label: "Investors" },
  { to: "/contact", label: "Contact" },
] as const;

const utilityLinks = [
  { to: "/leadership", label: "Leadership" },
  { to: "/responsibility", label: "Responsibility" },
  { to: "/careers", label: "Careers" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="flex items-center justify-between px-5 h-16">
        <Link to="/" className="flex items-baseline" onClick={() => setOpen(false)}>
          <span className="font-brand text-[1.85rem] leading-none text-primary">Mirandil</span>
          <span className="font-brand text-[1.1rem] leading-none text-gold ml-[1px]">.ai</span>
        </Link>
        <button
          aria-label="menu"
          onClick={() => setOpen((o) => !o)}
          className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-5 h-px bg-foreground transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background">
          <ul className="px-5 py-2">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-display text-lg text-foreground"
                  activeProps={{ className: "block py-3.5 font-display text-lg text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-white">
      <div className="px-5 py-14">
        <div className="mb-8">
          <span className="font-brand text-3xl leading-none">Mirandil</span>
        </div>
        <p className="font-display text-2xl leading-snug mb-10 text-white/95">
          Stewards of capital.<br />Builders of enduring value.
        </p>

        <div className="border-t border-white/10 pt-6 mb-8">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">
            Explore
          </div>
          <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-sm">
            {links.slice(1).map((l) => (
              <Link key={l.to} to={l.to} className="text-white/80 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mb-10">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-50 mb-4">
            Company
          </div>
          <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-sm">
            {utilityLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-white/70 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 space-y-2">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase opacity-50">
            Mirandil Holdings, Inc.
          </p>
          <p className="text-xs opacity-55">
            One Reserve Plaza, 25th Floor<br />
            New York, NY 10004
          </p>
          <p className="text-xs opacity-40 pt-4">
            © {new Date().getFullYear()} Mirandil. All rights reserved. Member FINRA / SIPC.
          </p>
        </div>
      </div>
    </footer>
  );
}

