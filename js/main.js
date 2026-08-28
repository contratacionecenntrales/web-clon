document.addEventListener('DOMContentLoaded', () => {

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
