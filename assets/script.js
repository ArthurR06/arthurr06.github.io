(() => {
  'use strict';

  document.documentElement.classList.add('js');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');

  function closeMenu(returnFocus = false) {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
    if (returnFocus) menuButton.focus();
  }

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation?.classList.toggle('is-open', open);
  });

  navigation?.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    closeMenu();
    const section = document.querySelector(link.getAttribute('href'));
    if (section && window.matchMedia('(max-width: 780px)').matches) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });

  const desktopQuery = window.matchMedia('(min-width: 781px)');
  desktopQuery.addEventListener?.('change', () => closeMenu());

  if ('IntersectionObserver' in window) {
    const navLinks = [...document.querySelectorAll('.main-nav a[href^="#"]')];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navLinks) {
          if (link.getAttribute('href') === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-12% 0px -58% 0px', threshold: 0 });
    document.querySelectorAll('.section-anchor').forEach(section => observer.observe(section));
  }
})();
