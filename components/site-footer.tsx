import Link from "next/link";

import { LogoMark } from "@/components/logo-mark";
import { company, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <LogoMark />
          <p className="footer-copy">
            Preserving the past and building with precision across St. Louis and
            beyond.
          </p>
        </div>

        <div className="footer-links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="footer-contact">
          <a href={company.phoneHref}>{company.phoneDisplay}</a>
          <p>{company.addressLine1}</p>
          <p>{company.addressLine2}</p>
        </div>
      </div>
    </footer>
  );
}
