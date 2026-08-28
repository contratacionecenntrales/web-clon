document.addEventListener('DOMContentLoaded', () => {

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

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTop');

  const onScroll = () => {
    const scrolled = window.scrollY > 20;
    header?.classList.toggle('is-scrolled', scrolled);
    scrollTopBtn?.classList.toggle('is-visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Tabs (Casos de uso) ---------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      tabPanels.forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.panel === target);
      });
    });
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
    setPanelHeight(item, item.classList.contains('is-open'));

    trigger?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');

      accordionItems.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.accordion__trigger')?.setAttribute('aria-expanded', 'false');
        setPanelHeight(other, false);
      });

      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        setPanelHeight(item, true);
      }
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
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = Number(el.dataset.count);
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

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
