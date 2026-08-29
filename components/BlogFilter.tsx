'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/data/blog';

const ALL = 'Todos';

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [active, setActive] = useState<string>(ALL);
  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="blog-filter" role="tablist" aria-label="Filtrar artículos por sección">
        <button
          type="button"
          role="tab"
          aria-selected={active === ALL}
          className={`blog-filter__tab${active === ALL ? ' is-active' : ''}`}
          onClick={() => setActive(ALL)}
        >
          Todos
        </button>
        {categories.map((cat) => {
          const color = posts.find((p) => p.category === cat)?.categoryColor;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              className={`blog-filter__tab${active === cat ? ' is-active' : ''}`}
              style={{ '--cat-color': color } as CSSProperties}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="blog-grid">
        {filtered.map((post) => (
          <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
            <span className="blog-card__category" style={{ '--cat-color': post.categoryColor } as CSSProperties}>{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="blog-card__meta">
              <span>{post.dateLabel}</span>
              <span>{post.readTime} de lectura</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
