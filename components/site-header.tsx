"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoMark } from "@/components/logo-mark";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-bar">
        <div className="header-brand">
          <LogoMark priority />
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        <div className={`header-nav-group ${isMenuOpen ? "is-open" : ""}`}>
          <nav className="site-nav" aria-label="Primary">
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
          </nav>

          <Link 
            href="/contact" 
            className="button button-solid header-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
