/* =============================================
   CRANIAL3DLAB — Shared Components
   ============================================= */

const NAV_LINKS = [
  { href: 'index.html',       label: 'Home'        },
  { href: 'about.html',       label: 'About Me'    },
  { href: 'meshmixer.html',   label: 'Meshmixer'   },
  { href: 'workflow.html',    label: 'Workflow'     },
  { href: 'cases.html',       label: 'Case Studies' },
  { href: 'downloads.html',   label: 'Downloads'   },
  { href: 'gallery.html',     label: '3D Gallery'  },
  { href: 'blog.html',        label: 'Blog'        },
  { href: 'faq.html',         label: 'FAQ'         },
  { href: 'contact.html',     label: 'Contact',    cta: true },
];

function injectNav() {
  const el = document.getElementById('nav');
  if (!el) return;
  el.innerHTML = `
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="nav__inner">
      <a href="index.html" class="nav__brand" aria-label="Cranial3DLab Home">
        <div class="nav__logo">🧠</div>
        <span class="nav__name">Cranial<span>3D</span>Lab</span>
      </a>
      <ul class="nav__links" role="list">
        ${NAV_LINKS.map(l => `
          <li><a href="${l.href}" class="nav__link${l.cta ? ' nav__cta' : ''}">${l.label}</a></li>
        `).join('')}
      </ul>
      <button class="nav__hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="nav__mobile" role="dialog" aria-label="Mobile navigation">
    ${NAV_LINKS.map(l => `<a href="${l.href}" class="nav__link">${l.label}</a>`).join('')}
  </div>`;
}

function injectFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand-name">🧠 Cranial<span style="color:var(--accent)">3D</span>Lab</div>
          <p class="footer__brand-desc">An open educational platform for patient-specific cranial implant design using free and open-source tools. Created for biomedical engineers, neurosurgeons, and medical technologists worldwide.</p>
        </div>
        <div>
          <div class="footer__heading">Platform</div>
          <ul class="footer__links">
            <li><a href="meshmixer.html" class="footer__link">Learn Meshmixer</a></li>
            <li><a href="workflow.html" class="footer__link">Cranial Workflow</a></li>
            <li><a href="cases.html" class="footer__link">Case Studies</a></li>
            <li><a href="gallery.html" class="footer__link">3D Gallery</a></li>
          </ul>
        </div>
        <div>
          <div class="footer__heading">Resources</div>
          <ul class="footer__links">
            <li><a href="downloads.html" class="footer__link">PDF Reports</a></li>
            <li><a href="downloads.html" class="footer__link">STL Files</a></li>
            <li><a href="downloads.html" class="footer__link">Templates</a></li>
            <li><a href="blog.html" class="footer__link">Blog Articles</a></li>
          </ul>
        </div>
        <div>
          <div class="footer__heading">Connect</div>
          <ul class="footer__links">
            <li><a href="about.html" class="footer__link">About Sachin</a></li>
            <li><a href="contact.html" class="footer__link">Contact Us</a></li>
            <li><a href="faq.html" class="footer__link">FAQ</a></li>
            <li><a href="https://www.linkedin.com/in/skhaire2812" target="_blank" class="footer__link">LinkedIn ↗</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span class="footer__copy">© 2025 Cranial3DLab · Sachin Balu Khaire · IIT Guwahati</span>
        <div class="footer__socials">
          <a href="https://www.linkedin.com/in/skhaire2812" target="_blank" class="footer__social" aria-label="LinkedIn" rel="noopener">in</a>
          <a href="mailto:khairesachin101@gmail.com" class="footer__social" aria-label="Email">✉</a>
          <a href="https://github.com" target="_blank" class="footer__social" aria-label="GitHub" rel="noopener">⌥</a>
        </div>
      </div>
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
});
