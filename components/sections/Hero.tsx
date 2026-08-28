import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/es";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero" id="top">
        <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true"></canvas>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="hero__grid" aria-hidden="true"></div>
        <div className="container hero__inner">
          <div className="hero__layout">
            <div className="hero__copy">
              <span className="hero__eyebrow reveal">
                <Sparkles aria-hidden="true" size={14} />
                {dict.eyebrow}
              </span>
              <h1 className="hero__title reveal" data-reveal-delay="60">
                <span className="hero__title-line">{dict.titleLine1}</span>
                <span className="hero__title-line text-gradient-blue">{dict.titleLine2}</span>
              </h1>
              <p className="hero__subtitle reveal" data-reveal-delay="120">
                {dict.subtitle}
              </p>
              <div className="hero__actions reveal" data-reveal-delay="180">
                <a href="#contacto" className="btn btn--primary btn--lg">
                  {dict.ctaPrimary}
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a href="#servicios" className="btn btn--outline btn--lg">{dict.ctaSecondary}</a>
              </div>
              <div className="hero__meta reveal" data-reveal-delay="240">
                {dict.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="hero__visual reveal" data-reveal-delay="200" aria-hidden="true">
              <div className="hero__visual-card">
                <div className="hero__visual-bar">
                  <span className="hero__visual-dot hero__visual-dot--red"></span>
                  <span className="hero__visual-dot hero__visual-dot--amber"></span>
                  <span className="hero__visual-dot hero__visual-dot--green"></span>
                  <span className="hero__visual-bar-label">{dict.visual.panelLabel}</span>
                </div>
                <div className="hero__visual-body">
                  <div className="hero__visual-chat">
                    <span className="hero__visual-chat-badge">
                      <Image src="/labs24k-icon.svg" alt="" width={16} height={16} />
                    </span>
                    <p>{dict.visual.chatMessage}</p>
                  </div>
                  {dict.visual.metrics.map((metric) => (
                    <div className="hero__visual-metric" key={metric.label}>
                      <div className="hero__visual-metric-row">
                        <span>{metric.label}</span><strong>{metric.value}</strong>
                      </div>
                      <div className="hero__visual-progress"><span style={{ width: metric.value }}></span></div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="hero__visual-caption">
                <ShieldCheck aria-hidden="true" size={14} />
                {dict.visual.caption1}
                <span className="hero__visual-caption-dot"></span>
                {dict.visual.caption2}
              </p>
            </div>
          </div>

          <div className="hero__stats reveal" data-reveal-delay="320">
            {dict.stats.map((stat) => (
              <a href="#clientes" className="hero-stat" key={stat.label}>
                <span className="hero-stat__number">{stat.number}</span>
                <span className="hero-stat__label">{stat.label}</span>
                <span className="hero-stat__desc">{stat.desc}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span>{dict.scroll}</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>
  );
}
