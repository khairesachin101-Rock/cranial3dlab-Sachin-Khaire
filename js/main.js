/* =============================================
   CRANIAL3DLAB — Main JavaScript
   ============================================= */

// ── NAV SCROLL ──
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── HAMBURGER MENU ──
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('.nav__link').forEach(l => {
    l.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── ACTIVE NAV LINK ──
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .nav__mobile .nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === '#') || href.endsWith(path)) {
      link.classList.add('active');
    }
  });
})();

// ── SCROLL REVEAL ──
(function() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    io.observe(el);
  });
})();

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── CONTACT FORM ──
const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('✅ Message sent! I\'ll get back to you within 48 hours.');
    form.reset();
  });
}

// ── TOAST ──
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}
window.showToast = showToast;

// ── DOWNLOAD SIMULATION ──
document.querySelectorAll('[data-dl]').forEach(btn => {
  btn.addEventListener('click', () => {
    showToast('📥 Download started! Check your downloads folder.');
  });
});

// ── TABS ──
document.querySelectorAll('.tabs').forEach(tabGroup => {
  tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = tabGroup.closest('section') || document;
      section.querySelectorAll('[data-panel]').forEach(p => {
        p.style.display = p.dataset.panel === target ? '' : 'none';
      });
    });
  });
});

// ── GALLERY THUMBS ──
document.querySelectorAll('.gallery-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const group = thumb.closest('.gallery-group') || document;
    group.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    const mainImg = document.querySelector('#galleryMain');
    if (mainImg && thumb.dataset.src) {
      mainImg.src = thumb.dataset.src;
    }
  });
});

// ── SMOOTH COUNTER ──
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  if (!target) return;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const tick = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + (el.dataset.suffix || '');
    if (current < target) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterIO.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

// ── KEYBOARD NAVIGATION ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (mobileMenu) { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  }
});
