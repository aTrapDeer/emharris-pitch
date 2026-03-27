import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Inquiry and collaboration"
        title="Building the connection."
        body="From historic restoration to modern development, our team is ready to review scope, schedule, and delivery strategy."
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-card">
            <p className="eyebrow">Submit an inquiry</p>
            <h2 className="section-title">Tell us about the project.</h2>
            <ContactForm />
          </div>

          <div className="contact-side">
            <article className="address-card">
              <p className="eyebrow">Headquarters</p>
              <h3>St. Louis, MO</h3>
              <p>{company.addressLine1}</p>
              <p>{company.addressLine2}</p>
              <a href={company.phoneHref}>{company.phoneDisplay}</a>
            </article>

            <div className="map-card">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBITPv6_544jfTKM3IewvGLtLmI5uD_Wx4o-OEmjJfZLX6oNTi8pm99g_eKm7dOKYxB3N6CSTHVY23xxrnaWS7d98i970taxZ7HKIcejuYixkZBxe_IyKtDrT7P7x7QspSJ7IjOKaF9z3t-rGA6cm1p3JeKOo8BalptfYBLhIWPODQ2vrUfkE7FHQ5WpMJZY7Cjflt442idZ7E3hy7F8m_h1XL6vdvr2_v_01RcPAvhTiZLwvR6g06-I1Ou49yzb_OA8pX2WxIAWhE"
                alt="Stylized architectural map of downtown St. Louis."
                fill
                sizes="(max-width: 900px) 100vw, 35vw"
              />
              <div className="map-overlay">
                <span>Get Directions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-panel">
          <div className="image-panel">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7YLK7WGMswQWlL-hjUJ_-TBqQnqsXkFX0GlL9g2GKyFFrnzCWmkY9gChTZUmGlRwVVdoOOpLrzULS6z-RTFFlYRLR8TfedKxyZhIdi9cw0U4RuaZS_PPlFFEnwQrdQ_JF6PXHXrAVnSxfrvU60NKTQ42KI3WgbvBEbvVa_P1NoEYunQfHJv_eFESw5AAWlX1DRz-HdO4ErpIFoX_CJek8Tfn3g42SVjK5FWnPxUyhuxel8JUIxRE6ltzSFJDKA42NlRSOIlCPtY"
              alt="High-end office interior with exposed brick and drafting tables."
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className="content-panel">
            <p className="eyebrow">Established integrity</p>
            <h2 className="section-title">Communication is part of the build.</h2>
            <p className="section-copy">
              For more than four decades, E.M. Harris has worked at the
              intersection of architecture, funding discipline, and community
              impact. We treat early conversations with the same seriousness as
              the field work that follows.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>40+</strong>
                <span>Years of trust</span>
              </div>
              <div className="stat-card">
                <strong>500+</strong>
                <span>Completed projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
