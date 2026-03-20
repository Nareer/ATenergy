

document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLang(currentLang === 'th' ? 'en' : 'th');
    });
    applyLang(currentLang);
  }

  // Hero Carousel
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let autoplay;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAutoplay() {
    autoplay = setInterval(() => goTo(current + 1), 4000);
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }

  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  if (prevBtn && nextBtn && slides.length) {
    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetAutoplay(); }));
    startAutoplay();
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Nav scroll highlight
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? 'var(--sun)' : '';
    });
  });
});
