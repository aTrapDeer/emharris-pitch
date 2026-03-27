import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-media">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0xi92pjfPXqzxlPEsIbbRoIXI4y58NuZxvpiMhJJbkt37yktnFtaHYIPLwmCtPMFqfai7ZclYyBYWULVZp7AymLnPn3C-oFWNANDCwauMS8GJaDCaaGnPJUIBactdIDnBWC9lzphl7g85PHfuzT9dz1_EI_5Q4RBCWn7sHUuAOAIfhRPrRm_ml6trtuR2k7dehpTD0JjgG3PySTkcdxXeonT_7ko40Rscggv-ddGWkYcj7i4IIzSJcEbJ90GqknVoinFl5fm4I_A"
            alt="Cinematic wide shot of a large-scale construction site at dusk with industrial cranes against a deep blue sky."
            fill
            priority
            sizes="100vw"
          />
          <div className="home-hero-overlay" />
        </div>

        <div className="container home-hero-content">
          <div className="home-hero-copy">
            <span className="home-kicker">Established 1989</span>
            <h1 className="home-title">
              Preserving the Past.
              <br />
              <span>Building the Future.</span>
            </h1>
            <p className="home-summary">
              A legacy of structural integrity and architectural excellence.
              E.M. Harris delivers sophisticated construction management for the
              next generation of urban landscapes.
            </p>
            <div className="home-actions">
              <Link href="/projects" className="home-button home-button-light">
                Explore Our Projects
              </Link>
              <Link href="/about" className="home-button home-button-outline">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-surface">
        <div className="container home-about-grid">
          <div className="home-about-media">
            <div className="home-about-image">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChR4yyUv1fDx_7OpkLLf55SjyZ1oXNkkx5VADX6s2kXTgRN5Nr_pjDaCr18ABvfn43wQEvqWkWk4eWmGnmLx9n5gPGnCYKjP6KYTH4EE6lfPZB3xgQnJjGuK8PaiOPGJCX7NiHbotCNYfzGc2nuzDWq2OOV6nuZFgvzjRc7k4hCa6YViLALAwxCWvK3mLGQAZFIgp-049dMAg5AfUE32_c3id6uxXVZMvdiyOv6i8Yop7wGw9myXt6gwOEu807Zkq9J2LeJhPc2U4"
                alt="Minimalist architectural detail of a modern concrete building with sharp shadows and blue sky."
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            <div className="home-about-stat">
              <div className="home-about-stat-inner">
                <strong>35+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>

          <div className="home-about-copy">
            <h2>Full-Service General Contracting</h2>
            <p>
              Since 1989, E.M. Harris Construction Company has stood as a
              pillar of reliability in the construction industry. We do not just
              build structures; we cultivate environments that honor their
              history while embracing modern functionality.
            </p>
            <div className="home-feature-list">
              <div className="home-feature">
                <span className="material-symbols-outlined home-feature-icon">
                  architecture
                </span>
                <div>
                  <h4>Precision Planning</h4>
                  <p>
                    Every project begins with a blueprint for longevity and
                    efficiency.
                  </p>
                </div>
              </div>
              <div className="home-feature">
                <span className="material-symbols-outlined home-feature-icon">
                  handyman
                </span>
                <div>
                  <h4>Expert Craftsmanship</h4>
                  <p>
                    Specialized teams for new builds and sensitive historic
                    renovations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted">
        <div className="container">
          <div className="home-section-heading home-section-heading-center">
            <p>Our Core Services</p>
            <h3>Mastering the Build</h3>
          </div>

          <div className="home-services-grid">
            <article className="home-service-card">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgrUbY5xPulJZt1OrYkLOX44CjBWnXTrNFrbQJ6h7eA6tp3W7NrbgSV2fkTef3cr4rwwLsZ6jrvGWyizLIxSxM3mX_HBd8U-0ZpNf2qI_G-5XvXRy1x_WIPMmtqpEPIGrB8PLt4S_9DNxxF0_xMKrW9ET02wcvS1ajAedar5Yol-CVRZoVJAaoqORfDpQdeY5S87TSh0njbEcS1ryYCRN-Nh-kTv1nGtz_LyRdA4VeOh8NbZ7lEbBPVsP_MDYslTic7JVi7DeDOtk"
                alt="Modern steel frame of a skyscraper being built under a bright clear sky."
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="home-service-overlay" />
              <div className="home-service-copy">
                <h4>New Construction</h4>
                <p>
                  Ground-up developments tailored to modern demands and
                  future-proof standards.
                </p>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </article>

            <article className="home-service-card home-service-card-bordered">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYKsh1_rPLCxU4TOy-QCAK4fuMNeAM3K80mLzMGEh3LRC98E8n97NEsCfXWBZDOfqTxD5M2wfO8hl61tA90W1_he-ZiA2BuoeVTwTWbhbtVpDWEC0jdA5SN-GnbJKQfZPMuNQTJIMzv5EY-TeN9rf2Z12PQYDhe53hKBfkomUn4vc-AAHgkCmsEooeQguF0MLpytp0TAJunyyWTd0_1NV1SrndxpMHCMBT_v2IJP4oLgHFsj6QJNIuNhW4MJPIkSiGTmFKJ1E6Kuw"
                alt="Close-up of high-end interior renovation with modern finishes and bright lighting."
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="home-service-overlay" />
              <div className="home-service-copy">
                <h4>General Renovation</h4>
                <p>
                  Transforming existing spaces into high-performance
                  contemporary environments.
                </p>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </article>

            <article className="home-service-card">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUo8NSvYAajpsNHZqUJYcvkPKbs9GFTw96avE1ZAuxlXGRQw6fy2CkMOQl45uZsvzjIsjHeABcxJ6O1syFYlq0oqqO1NRwAINNCRM1PJXKNsPQ6GplCUleLl0ycYtEFf1rZbFLDsI881hOFnL1MDHjBetKsaM4xly3nFjQuo6qLR6HnNPxPzCON89M9rgTdhCMxJCb5ocH3LAAyTtKcus9mC0-gLSZ0VsfQ_TkgeIvtT46W5uAYdm-mdNslUkxEuJIL7bx_bFw_iA"
                alt="Intricate historic brickwork and restored windows on a heritage building."
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="home-service-overlay" />
              <div className="home-service-copy">
                <h4>Historic Renovation</h4>
                <p>
                  Preserving architectural heritage with specialized techniques
                  and authentic materials.
                </p>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-section-surface">
        <div className="container">
          <div className="home-section-heading home-section-heading-split">
            <div>
              <p>Expertise Across Sectors</p>
              <h3>Diversified Portfolio of Impact.</h3>
            </div>
            <span>
              We specialize in various sectors, bringing the same level of
              precision to every project type.
            </span>
          </div>

          <div className="home-sectors-grid">
            <article className="home-sector-tile home-sector-tile-large">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHC-TIHDl-Vph9Gh9tKMniHW695F0NuugAeODY0A8I3IQG2uaOaEVAHUY8oGe7ZtIA4OB-joaIU-Oa8Rp2tgKHNxmkjukeiTLNe-K-ZLGWsueE8Xi0ZIasL_xNdtKLNWxAE8zny7-ItyQM14AsPmzks-0SKhdtHQGlZucH5NZLMo3U0hFTtYVln58QZGoJ5DskizzIV7cVrk0Jc74fVNBmWVw9lDAeyx_lUzIsDMZjEJBP23rMY8rf3eUwdGb0Dkso7BBk1ecSuGY"
                alt="Modern corporate office lobby with glass walls and minimalist furniture."
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="home-sector-overlay">
                <span>Commercial</span>
              </div>
            </article>

            <article className="home-sector-tile">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR3J04Dx7CtZuKhuSNfLzc7G1_y_EcB6oXNMgh6tG-WLpmZUIFjqHq30HkF6XsRbDbK6DpOxC3RWblZud9wwHbVXWFwJzO4Zrz1i-6olq2n5fH1PZN0Qk2h8sILxPaIhDDQpe4TZXDL7TDUd4R3l60164yySiycQu0zneylSVlpU9FZSjgTo6muN8cfkAgmgawNLq3hWLS0ItKeamotD_xyV0G-Ltkh8F0nc7R8pOOi9gF-Rt7uMPA91YGQYsx7ezWREfPUI4WrJc"
                alt="Elegant single-family home with modern architectural lines and landscaping."
                fill
                sizes="(max-width: 900px) 100vw, 25vw"
              />
              <div className="home-sector-overlay">
                <span>Single-family</span>
              </div>
            </article>

            <article className="home-sector-tile home-sector-tile-tall">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjPySAjhcW54xulqu8mJUGq6ZTqY3nlvFXetu5N2kJRSCKXuHOxCF9iM9gctPN1wrAJnhUAHdhIFxqH8VLWTeH16JypQaZMBRGC31wbYJSll4K6_9kJZwaXFS8rvoX7six-PfVjo60Z-QK4Y1Crqdq2vhzCDOC5-lzNkNtt4HVrIS5GlqMtGZICDh7kSqhwzwPYj-zN_VRV2hH51384Hcq4K0BI59GJrl2lMNwFqUj8EG5YcBHWEWRLkFcn5Nzlh7PEVuPhGjOXf0"
                alt="Large multi-family apartment complex with contemporary design and balconies."
                fill
                sizes="(max-width: 900px) 100vw, 25vw"
              />
              <div className="home-sector-overlay home-sector-overlay-vertical">
                <span>Multi-family</span>
              </div>
            </article>

            <article className="home-sector-panel">
              <span className="material-symbols-outlined">school</span>
              <h4>Education</h4>
              <p>Building spaces for future minds.</p>
            </article>

            <article className="home-sector-tile home-sector-tile-wide">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB80BAuzsZIWaDYsgaPoayQuYCuKZUGjP-alODYeVf0ZnJI_rHddrRJVZG4tE9MZ3BpnHYDkdlE_dMzLNoGbCvS1SvJQgVg8QSQwYzMGb0MYyFRSDvYsVTFLPyb9RH8RdHq6NVBvAwMqeJVbAoycnklsS0EH0l-BhIE5yBuJByWwPBUtlmMd6TWGScz24Szv-wgXMkK9FcAacaM48iXW5laTMmcLNdnhrQa5_jXATIhsIfsjXyffPDI8-Habnlh7ooUpahb9X--564"
                alt="Modern non-profit community center with welcoming open spaces."
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="home-sector-overlay">
                <span>Non-profit</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-cta-section">
        <div className="container">
          <div className="home-cta-band">
            <div className="home-cta-blueprint">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmBmH4AOMu5kO4P_9ntK9Ele_SxLZDqgZ5KY8ElPh1HoLwkI08V_hvCleOVIaJmQ8UfAxvmxP2FFyd74k67AqX4hreahkGy1FumtQU43v_RfMA6TMRyQKG9IJk2eB6Di4jb0YsmYE7aeOE896U3CTn3ASYERISjETAPUQThrs9ndAOBbAfjqttfLnHsitjlpDp8tJ-Je_alMUT3KG-bxkNmyBmMoC7PdfqlDHsxHQ3-eCbCMbj05QMQBjUpIYnsnBmLGipu6m-bJ8"
                alt="Blueprints and architectural drawings on a table."
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="home-cta-copy">
              <h2>Ready to Build Your Legacy?</h2>
              <p>
                Let&apos;s discuss how E.M. Harris can bring structural
                integrity and superior management to your next project.
              </p>
              <Link href="/contact" className="home-button home-button-light">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
