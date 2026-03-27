import Image from "next/image";

import type { NewsArticle } from "@/lib/site-data";

type NewsGridProps = {
  articles: NewsArticle[];
};

export function NewsGrid({ articles }: NewsGridProps) {
  const [featured, secondary, accent, wide] = articles;

  return (
    <div className="news-grid">
      <article className="news-card news-card-feature">
        {featured.image ? (
          <div className="news-media news-media-feature">
            <Image
              src={featured.image}
              alt={featured.imageAlt ?? featured.title}
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
            />
          </div>
        ) : null}
        <div className="news-body">
          <div className="news-meta-row">
            <span className="pill">{featured.category}</span>
            <span className="meta">{featured.date}</span>
          </div>
          <h3>{featured.title}</h3>
          <p>{featured.excerpt}</p>
        </div>
      </article>

      <article className="news-card">
        {secondary.image ? (
          <div className="news-media news-media-compact">
            <Image
              src={secondary.image}
              alt={secondary.imageAlt ?? secondary.title}
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
            />
          </div>
        ) : null}
        <div className="news-body">
          <p className="meta">{secondary.category}</p>
          <h3>{secondary.title}</h3>
          <p>{secondary.excerpt}</p>
          <span className="meta">{secondary.date}</span>
        </div>
      </article>

      <article className="news-card news-card-dark">
        <div className="news-body">
          <p className="meta">{accent.category}</p>
          <h3>{accent.title}</h3>
          <p>{accent.excerpt}</p>
          <span className="meta">{accent.date}</span>
        </div>
      </article>

      <article className="news-card news-card-wide">
        {wide.image ? (
          <div className="news-media news-media-wide">
            <Image
              src={wide.image}
              alt={wide.imageAlt ?? wide.title}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
        ) : null}
        <div className="news-body">
          <p className="meta">{wide.category}</p>
          <h3>{wide.title}</h3>
          <p>{wide.excerpt}</p>
          <span className="meta">{wide.date}</span>
        </div>
      </article>
    </div>
  );
}
