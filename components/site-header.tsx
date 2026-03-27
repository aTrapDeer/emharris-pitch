"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LogoMark } from "@/components/logo-mark";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <div className="header-brand">
          <LogoMark priority />
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
          <span className="nav-toggle-label">
            {isMenuOpen ? "Close" : "Menu"}
          </span>
        </button>

        <nav
          id="primary-nav"
          className={isMenuOpen ? "site-nav site-nav-open" : "site-nav"}
          aria-label="Primary"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="button button-solid header-cta-mobile"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>

        <Link href="/contact" className="button button-solid header-cta">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
