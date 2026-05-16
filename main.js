/* =============================================
   AAMIR NODHLA — PORTFOLIO SCRIPTS
   main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     1. SCROLL REVEAL — Intersection Observer
  ------------------------------------------ */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll('.reveal, .timeline-item, .project-card, .skill-group')
    .forEach((el) => observer.observe(el));


  /* ------------------------------------------
     2. STAGGERED ENTRANCE ANIMATIONS
  ------------------------------------------ */

  // Project cards — staggered delay
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  // Skill groups — staggered delay
  document.querySelectorAll('.skill-group').forEach((group, i) => {
    group.style.transitionDelay = `${i * 0.07}s`;
  });

  // Timeline items — staggered delay
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.12}s`;
  });


  /* ------------------------------------------
     3. ACTIVE NAV LINK ON SCROLL
  ------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    let current = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.style.color =
        link.getAttribute('href') === '#' + current
          ? 'var(--accent)'
          : '';
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });


  /* ------------------------------------------
     4. SMOOTH SCROLL FOR NAV LINKS
  ------------------------------------------ */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ------------------------------------------
     5. NAV BACKGROUND ON SCROLL
  ------------------------------------------ */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(7, 11, 20, 0.95)';
    } else {
      nav.style.background = 'rgba(7, 11, 20, 0.8)';
    }
  }, { passive: true });

});
