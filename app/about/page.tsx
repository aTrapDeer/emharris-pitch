import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { aboutStats, capabilities, timeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Founded 1989 . St. Louis, Missouri"
        title="Preserving the past, building the future."
        body="A legacy built around tax-credit fluency, disciplined preconstruction, and complex urban job sites that demand steady execution."
      />

      <section className="section">
        <div className="container split-panel">
          <div className="content-panel">
            <p className="eyebrow">A trusted partner for complex funding</p>
            <h2 className="section-title">Construction rigor matched to funding rigor.</h2>
            <p className="section-copy">
              E.M. Harris has spent decades working where deadlines, compliance,
              and public accountability are inseparable from the build itself.
              Our process is shaped for LIHTC, historic tax credits, HUD
              requirements, and demanding redevelopment contexts.
            </p>

            <div className="capability-list">
              {capabilities.map((item) => (
                <div key={item.title} className="capability-list-item">
                  <span />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-panel content-panel-card">
            <p className="eyebrow">The reliability standard</p>
            <div className="stats-grid">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="quote-panel">
              <p>
                "Tight budgets are not a constraint to work around. They are a
                core design condition for how the project must be managed."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Our evolution</p>
              <h2 className="section-title">A timeline of measured growth.</h2>
            </div>
          </div>

          <div className="timeline">
            {timeline.map((entry, index) => (
              <article
                key={entry.year}
                className={`timeline-item ${index % 2 === 1 ? "timeline-item-reverse" : ""}`}
              >
                <div className="timeline-copy">
                  <p className="eyebrow">{entry.year}</p>
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                </div>
                <div className="timeline-image">
                  {entry.image ? (
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt ?? entry.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                    />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Delivery discipline</p>
              <h2 className="section-title">Built for tight budgets and fixed dates.</h2>
            </div>
            <p className="section-copy">
              Our preconstruction and field management systems are designed to
              reduce waste, maintain transparency, and protect schedule-critical
              funding milestones from avoidable drift.
            </p>
          </div>

          <div className="capability-grid">
            <article className="capability-card capability-card-dark">
              <p className="eyebrow">Pre-Construction Rigor</p>
              <p>
                Value engineering and scope planning that preserve architectural
                intent without losing cost control.
              </p>
            </article>
            <article className="capability-card capability-card-dark">
              <p className="eyebrow">Critical Path Mastery</p>
              <p>
                Schedule control tuned to tax-credit deadlines, occupied-site
                logistics, and phased handover requirements.
              </p>
            </article>
            <article className="capability-card capability-card-dark">
              <p className="eyebrow">Compliance Leadership</p>
              <p>
                Site documentation and coordination aligned to regulatory
                expectations rather than treated as afterthoughts.
              </p>
            </article>
          </div>

          <div className="button-row">
            <Link href="/projects" className="button button-solid">
              View Projects
            </Link>
            <Link href="/contact" className="button button-ghost button-ghost-light">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
