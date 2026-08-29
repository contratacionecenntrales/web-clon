import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import es from "@/i18n/dictionaries/es";
import { getLocalizedServices } from "@/i18n/get-services";
import { blogPosts } from "@/data/blog";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export const metadata: Metadata = {
  title: "Blog | Labs24k",
  description: "Estrategia, implementación y cumplimiento normativo en Inteligencia Artificial: artículos prácticos para llevar la IA a tu empresa sin rodeos.",
};

export default function BlogPage() {
  const services = getLocalizedServices(es);
  return (
    <>
      <SiteInteractions emailDict={es.contact.form} />
      <SiteChrome dict={es} locale="es" />
      <main id="main">
        <section className="blog-hero">
          <div className="container">
            <div className="section-head reveal">
              <span className="label">Blog</span>
              <h1 className="section-heading">Recursos para llevar la IA a tu empresa, sin rodeos</h1>
              <p className="section-subtext">Estrategia, implementación y cumplimiento normativo, explicados con casos reales — no con teoría genérica sobre inteligencia artificial.</p>
            </div>
          </div>
        </section>

        <section className="section-light">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post, i) => (
                <Link href={`/blog/${post.slug}`} className="blog-card reveal" data-reveal-delay={(i % 3) * 80} key={post.slug}>
                  <span className="blog-card__category" style={{ "--cat-color": post.categoryColor } as CSSProperties}>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{post.dateLabel}</span>
                    <span>{post.readTime} de lectura</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <h2 className="section-heading">¿Prefieres hablarlo directamente?</h2>
            <p>Una llamada de 30 minutos, sin compromiso, para ver por dónde tiene sentido empezar en tu caso.</p>
            <Link href="/#contacto" className="btn btn--primary btn--lg">
              Agendar llamada gratuita
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer dict={es.footer} services={services} locale="es" />
    </>
  );
}
