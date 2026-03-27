type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "split" | "stack";
};

export function PageHero({
  eyebrow,
  title,
  body,
  align = "split",
}: PageHeroProps) {
  return (
    <section className={`page-hero ${align === "stack" ? "page-hero-stack" : ""}`}>
      <div className="container">
        <div className="page-hero-inner">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display-title">{title}</h1>
          </div>
          <p className="intro-copy">{body}</p>
        </div>
      </div>
    </section>
  );
}
