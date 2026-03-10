/* ============================================
   Sally Gordon Therapy — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav scroll effect --- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* --- Mobile menu toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });

    // Close menu on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  /* --- Nav dropdowns --- */
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  const isMobile = () => window.innerWidth <= 768;

  dropdowns.forEach(dropdown => {
    const toggleBtn = dropdown.querySelector('.nav-dropdown-toggle');

    // Click/tap toggle (works on both mobile and desktop)
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = dropdown.classList.contains('open');
      // Close all others
      dropdowns.forEach(d => {
        d.classList.remove('open');
        d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        dropdown.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Desktop hover
    dropdown.addEventListener('mouseenter', () => {
      if (!isMobile()) {
        dropdown.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });
    dropdown.addEventListener('mouseleave', () => {
      if (!isMobile()) {
        dropdown.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      dropdowns.forEach(d => {
        d.classList.remove('open');
        d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* --- Scroll reveal --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = nav ? nav.offsetHeight + 16 : 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
