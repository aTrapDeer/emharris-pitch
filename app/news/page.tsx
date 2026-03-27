import type { Metadata } from "next";

import { NewsGrid } from "@/components/news-grid";
import { PageHero } from "@/components/page-hero";
import { milestones, newsArticles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Company journal"
        title="Building the future."
        body="Field notes, project milestones, community initiatives, and the decisions shaping the company across every phase of work."
      />

      <section className="section">
        <div className="container">
          <NewsGrid articles={newsArticles} />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container newsletter-band">
          <div>
            <p className="eyebrow">Stay informed</p>
            <h2 className="section-title">Updates from the field and the office.</h2>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Professional Email Address" />
            <button type="submit" className="button button-solid">
              Join the Network
            </button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Recent milestones</p>
              <h2 className="section-title">Signals from the last twelve months.</h2>
            </div>
          </div>

          <div className="milestone-list">
            {milestones.map((item) => (
              <article key={item.month} className="milestone-item">
                <div className="milestone-date">{item.month}</div>
                <div className="milestone-dot" />
                <div className="milestone-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
