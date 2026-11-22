import Link from "next/link";
import type { ReactNode } from "react";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="announcement">
        Your next great escape starts here <span>·</span>{" "}
        <Link href="/fleet">Explore the fleet ↗</Link>
      </div>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="RentByEnn home">
          <span className="brand-mark">r.</span> rentbyenn
          <span className="brand-period">.</span>
        </Link>

        <nav className="page-nav" aria-label="Main navigation">
          <Link href="/fleet">Explore cars</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">Our story</Link>
          <Link href="/help">Help</Link>
        </nav>

        <div className="page-nav-actions">
          <Link href="/host">List your car</Link>
          <Link className="sign-in" href="/sign-in">
            Sign in ↗
          </Link>
        </div>
      </header>

      <main className="page-main">{children}</main>

      <footer className="page-footer">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">r.</span> rentbyenn
            <span className="brand-period">.</span>
          </Link>
          <p>Good cars. Great stories. Go make one.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/fleet">Explore cars</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/about">Our story</Link>
          <Link href="/help">Help</Link>
          <Link href="/host">List your car</Link>
        </nav>
        <small>© 2025 RentByEnn. Made for the way out there.</small>
      </footer>
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <div className="eyebrow">
        <span className="eyebrow-line" />
        {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
