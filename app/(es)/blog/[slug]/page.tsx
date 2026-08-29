import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import es from "@/i18n/dictionaries/es";
import { getLocalizedServices } from "@/i18n/get-services";
import { blogPosts, getBlogPost } from "@/data/blog";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Labs24k`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
    twitter: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const services = getLocalizedServices(es);
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const otherPosts = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const catStyle = { "--cat-color": post.categoryColor } as CSSProperties;

  return (
    <>
      <SiteInteractions emailDict={es.contact.form} />
      <SiteChrome dict={es} locale="es" />
      <main id="main">
        <section className="blog-article-hero">
          <div className="container">
            <Link href="/blog" className="blog-article-hero__back">
              <ArrowLeft aria-hidden="true" size={15} />
              Todos los artículos
            </Link>
            <span className="blog-article-hero__category" style={catStyle}>{post.category}</span>
            <h1 className="blog-article-hero__title">{post.title}</h1>
            <div className="blog-article-hero__meta">
              <span>{post.author}</span>
              <span>{post.dateLabel}</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </section>

        <section className="section-light">
          <div className="container">
            <div className="blog-article__body">
              <p className="blog-article__excerpt">{post.excerpt}</p>
              <div className="legal-page__content">
                {post.content.map((block, i) => (
                  <div key={block.heading ?? `block-${i}`}>
                    {block.heading ? <h2>{block.heading}</h2> : null}
                    {block.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                    {block.list ? (
                      <ul>
                        {block.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {otherPosts.length > 0 && (
          <section>
            <div className="container">
              <div className="blog-related__head">
                <span className="label">Sigue leyendo</span>
                <h2 className="section-heading">Más artículos que te pueden interesar</h2>
              </div>
              <div className="blog-grid">
                {otherPosts.map((p) => (
                  <Link href={`/blog/${p.slug}`} className="blog-card" key={p.slug}>
                    <span className="blog-card__category" style={{ "--cat-color": p.categoryColor } as CSSProperties}>{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="blog-card__meta">
                      <span>{p.dateLabel}</span>
                      <span>{p.readTime} de lectura</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="service-cta">
          <div className="container">
            <h2 className="section-heading">¿Hablamos de tu caso concreto?</h2>
            <p>Una llamada de 30 minutos, sin compromiso, para ver por dónde tiene sentido empezar.</p>
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
