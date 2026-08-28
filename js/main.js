document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hero animated nebula background ---------- */
  const heroCanvas = document.getElementById('heroCanvas');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroCanvas && !prefersReducedMotion) {
    const ctx = heroCanvas.getContext('2d');
    let width, height, dpr;
    let particles = [];
    let rafId = null;
    let running = false;

    const PARTICLE_COUNT = 46;
    const COLORS = ['rgba(96,175,255,', 'rgba(139,92,246,', 'rgba(27,79,255,'];

    const resize = () => {
      const rect = heroCanvas.parentElement.getBoundingClientRect();
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
          alpha: 0.25 + Math.random() * 0.5
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
        ctx.strokeStyle = 'rgba(96,175,255,' + (0.06 - i * 0.012) + ')';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      drawArcs();
      particles.forEach(p => {
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

    window.addEventListener('resize', () => { resize(); initParticles(); }, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop(); else start();
    });
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
  const BANNER_KEY = 'centeia-banner-dismissed';

  try {
    if (sessionStorage.getItem(BANNER_KEY) === '1' && alertBanner) {
      alertBanner.classList.add('is-hidden');
    }
  } catch (e) { /* storage unavailable */ }

  alertClose?.addEventListener('click', () => {
    alertBanner?.classList.add('is-hidden');
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) { /* ignore */ }
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
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

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- FAQ Accordion ---------- */
  const accordionItems = document.querySelectorAll('.accordion__item');

  const setPanelHeight = (item, open) => {
    const panel = item.querySelector('.accordion__panel');
    if (!panel) return;
    panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
  };

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    setPanelHeight(item, false);

    trigger?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      item.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
      setPanelHeight(item, willOpen);
    });
  });

  window.addEventListener('resize', () => {
    accordionItems.forEach(item => {
      if (item.classList.contains('is-open')) setPanelHeight(item, true);
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => entry.target.classList.add('is-visible'), Number(delay));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Contact form ---------- */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    formSuccess?.classList.add('is-visible');
    form.reset();
    setTimeout(() => formSuccess?.classList.remove('is-visible'), 6000);
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
