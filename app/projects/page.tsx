import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title="Structural integrity across every project type."
        body="From historic restoration to commercial build-out and multi-family delivery, the portfolio reflects a consistent standard of disciplined execution."
      />

      <section className="section">
        <div className="container">
          <div className="filter-row">
            <span className="filter-pill filter-pill-active">All Projects</span>
            <span className="filter-pill">Commercial</span>
            <span className="filter-pill">Multi-Family</span>
            <span className="filter-pill">Historic Renovation</span>
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container cta-band">
          <div>
            <p className="eyebrow">Start your next landmark</p>
            <h2 className="section-title">Bring decades of expertise into the plan.</h2>
          </div>
          <div className="cta-actions">
            <p className="section-copy">
              We bring the same management discipline to early conversations
              that we bring to live jobsites, so the path from concept to
              construction starts cleanly.
            </p>
            <Link href="/contact" className="button button-solid">
              Contact Project Leads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
