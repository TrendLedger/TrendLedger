// =============================================
// TRENDLEDGER — MAIN JS
// =============================================

// Scroll-triggered nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Intersection Observer for fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// Mobile menu
function toggleMenu() {
  let menu = document.getElementById('mobile-menu');
  if (!menu) {
    menu = document.createElement('div');
    menu.id = 'mobile-menu';
    menu.className = 'mobile-menu';
    menu.innerHTML = `
      <button class="mobile-close" onclick="toggleMenu()">✕</button>
      <a href="index.html" onclick="toggleMenu()">Home</a>
      <a href="product.html" onclick="toggleMenu()">Product</a>
      <a href="philosophy.html" onclick="toggleMenu()">Philosophy</a>
      <a href="pricing.html" onclick="toggleMenu()">Pricing</a>
      <a href="early-access.html" onclick="toggleMenu()">Early Access</a>
    `;
    document.body.appendChild(menu);
  }
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

// Animate factor bars when visible
const factorFills = document.querySelectorAll('.factor-fill');
if (factorFills.length) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.width;
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  factorFills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => {
      barObserver.observe(fill);
      fill.style.width = targetWidth;
    }, 100);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const hash = href.split('#')[1];
    const samePage = !href.includes('.html') || href.startsWith('#');

    if (samePage && hash) {
      const target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Score ring subtle animation
const scoreNumber = document.querySelector('.score-number');
if (scoreNumber) {
  let start = 60;
  const end = 84;
  const duration = 1800;

  const scoreObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          scoreNumber.textContent = Math.round(start + (end - start) * eased);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        scoreObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  scoreObserver.observe(scoreNumber);
}
