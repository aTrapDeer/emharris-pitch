"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoMark } from "@/components/logo-mark";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-bar">
        <div className="header-brand">
          <LogoMark priority />
        </div>

        <nav className="site-nav" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="button button-solid header-cta">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
