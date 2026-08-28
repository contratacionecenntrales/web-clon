'use client';

import { useEffect } from 'react';

/**
 * Client-side behavior for the Labs24k landing page, ported 1:1 from the
 * original vanilla JS (js/main.js): hero nebula canvas, scroll progress,
 * dismissible AI Act banner, mobile nav, header scroll state, scroll-top
 * button, scroll-reveal animations, and the contact form.
 *
 * The FAQ accordion is NOT ported here — it now uses the animated
 * `FAQ` component (components/ui/faq-tabs.tsx) with its own React state.
 *
 * Renders nothing; only wires up side effects after mount.
 */
export function SiteInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    /* ---------- Hero animated nebula background ---------- */
    const heroCanvas = document.getElementById('heroCanvas') as HTMLCanvasElement | null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (heroCanvas && !prefersReducedMotion) {
      const ctx = heroCanvas.getContext('2d');
      if (ctx) {
        let width = 0;
        let height = 0;
        let dpr = 1;
        type Particle = {
          cx: number; cy: number; radius: number; angle: number;
          speed: number; size: number; color: string; alpha: number;
        };
        let particles: Particle[] = [];
        let rafId: number | null = null;
        let running = false;

        const PARTICLE_COUNT = 46;
        const COLORS = ['rgba(48,164,206,', 'rgba(139,92,246,', 'rgba(5,99,167,'];

        const resize = () => {
          const rect = heroCanvas.parentElement!.getBoundingClientRect();
          dpr = Math.min(window.devicePixelRatio || 1, 2);
          width = rect.width;
          height = rect.height;
          heroCanvas.width = width * dpr;
          heroCanvas.height = height * dpr;
          heroCanvas.style.width = width + 'px';
          heroCanvas.style.height = height + 'px';
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const initParticles = () => {
          const cx = width / 2;
          const cy = height * 0.42;
          particles = Array.from({ length: PARTICLE_COUNT }, () => {
            const radius = 60 + Math.random() * Math.min(width, height) * 0.42;
            const angle = Math.random() * Math.PI * 2;
            return {
              cx, cy, radius,
              angle,
              speed: (0.06 + Math.random() * 0.1) * (Math.random() < 0.5 ? 1 : -1) / radius * 40,
              size: 1 + Math.random() * 2,
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
              alpha: 0.25 + Math.random() * 0.5,
            };
          });
        };

        const drawArcs = () => {
          const cx = width / 2;
          const cy = height * 0.42;
          const maxR = Math.min(width, height) * 0.5;
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(cx, cy, (maxR / 3) * i, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(48,164,206,' + (0.06 - i * 0.012) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        };

        const draw = () => {
          ctx.clearRect(0, 0, width, height);
          drawArcs();
          particles.forEach((p) => {
            p.angle += p.speed * 0.016;
            const x = p.cx + Math.cos(p.angle) * p.radius;
            const y = p.cy + Math.sin(p.angle) * p.radius * 0.6;
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.shadowColor = p.color + '0.8)';
            ctx.shadowBlur = 6;
            ctx.fill();
          });
          ctx.shadowBlur = 0;
          if (running) rafId = requestAnimationFrame(draw);
        };

        const start = () => {
          if (running) return;
          running = true;
          rafId = requestAnimationFrame(draw);
        };
        const stop = () => {
          running = false;
          if (rafId) cancelAnimationFrame(rafId);
        };

        resize();
        initParticles();
        start();

        const onResizeCanvas = () => { resize(); initParticles(); };
        const onVisibility = () => { if (document.hidden) stop(); else start(); };

        window.addEventListener('resize', onResizeCanvas, { passive: true });
        document.addEventListener('visibilitychange', onVisibility);

        cleanups.push(() => {
          stop();
          window.removeEventListener('resize', onResizeCanvas);
          document.removeEventListener('visibilitychange', onVisibility);
        });
      }
    }

    /* ---------- Scroll progress bar ---------- */
    const scrollProgress = document.getElementById('scrollProgress');
    const updateProgress = () => {
      if (!scrollProgress) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      scrollProgress.style.width = pct + '%';
    };

    /* ---------- AI Act alert banner (dismissible) ---------- */
    const alertBanner = document.getElementById('alertBanner');
    const alertClose = document.getElementById('alertClose');
    const BANNER_KEY = 'labs24k-banner-dismissed';

    try {
      if (sessionStorage.getItem(BANNER_KEY) === '1' && alertBanner) {
        alertBanner.classList.add('is-hidden');
      }
    } catch {
      /* storage unavailable */
    }

    const onAlertClose = () => {
      alertBanner?.classList.add('is-hidden');
      try {
        sessionStorage.setItem(BANNER_KEY, '1');
      } catch {
        /* ignore */
      }
    };
    alertClose?.addEventListener('click', onAlertClose);
    cleanups.push(() => alertClose?.removeEventListener('click', onAlertClose));

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    const closeNav = () => {
      nav?.classList.remove('is-open');
      navToggle?.classList.remove('is-active');
      navToggle?.setAttribute('aria-expanded', 'false');
    };

    if (navToggle && nav) {
      const onToggleClick = () => {
        const isOpen = nav.classList.toggle('is-open');
        navToggle.classList.toggle('is-active', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
      };
      navToggle.addEventListener('click', onToggleClick);
      cleanups.push(() => navToggle.removeEventListener('click', onToggleClick));

      const links = Array.from(nav.querySelectorAll('a'));
      links.forEach((link) => link.addEventListener('click', closeNav));
      cleanups.push(() => links.forEach((link) => link.removeEventListener('click', closeNav)));
    }

    /* ---------- Header shadow + scroll-top visibility ---------- */
    const header = document.getElementById('header');
    const scrollTopBtn = document.getElementById('scrollTop');

    const onScroll = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 20);
      scrollTopBtn?.classList.toggle('is-visible', window.scrollY > 500);
      updateProgress();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    const onScrollTopClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollTopBtn?.addEventListener('click', onScrollTopClick);
    cleanups.push(() => scrollTopBtn?.removeEventListener('click', onScrollTopClick));

    /* ---------- Scroll reveal ---------- */
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).dataset.revealDelay || '0';
            setTimeout(() => entry.target.classList.add('is-visible'), Number(delay));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    /* ---------- Contact form ---------- */
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    const formSuccess = document.getElementById('formSuccess');

    const onSubmit = (e: Event) => {
      e.preventDefault();
      if (!form || !form.checkValidity()) {
        form?.reportValidity();
        return;
      }
      formSuccess?.classList.add('is-visible');
      form.reset();
      setTimeout(() => formSuccess?.classList.remove('is-visible'), 6000);
    };
    form?.addEventListener('submit', onSubmit);
    cleanups.push(() => form?.removeEventListener('submit', onSubmit));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
