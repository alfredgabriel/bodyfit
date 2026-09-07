<script>
  import { t, currentLang, setLanguage } from '../i18n/store.js';
  import logoSrc from '../assets/BodyFitLogo.png';

  let isScrolled = $state(false);
  let mobileMenuOpen = $state(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      isScrolled = window.scrollY > 15;
    }, { passive: true });
  }

  function toggleMobile() {
    mobileMenuOpen = !mobileMenuOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    }
  }

  function closeMenu() {
    mobileMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
</script>

<header class="navbar" class:scrolled={isScrolled}>
  <div class="nav-inner">
    <!-- Brand Logo -->
    <a href="#inicio" class="brand" onclick={closeMenu}>
      <img src={logoSrc} alt="BodyFit Zorroza" class="brand-logo" />
      <div class="brand-text">
        <span class="brand-name">BodyFit</span>
        <span class="brand-location">GIMNASIO · ZORROZA</span>
      </div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="nav-links">
      <a href="#disciplinas">{$t.nav.disciplines}</a>
      <a href="#horarios">{$t.nav.schedule}</a>
      <a href="#nosotros">{$t.nav.about}</a>
      <a href="#tarifas">{$t.nav.pricing}</a>
      <a href="#contacto">{$t.nav.contact}</a>
    </nav>

    <!-- Language & CTA -->
    <div class="nav-right">
      <div class="lang-selector">
        <button
          type="button"
          class="lang-link"
          class:active={$currentLang === 'es'}
          onclick={() => setLanguage('es')}
        >
          ES
        </button>
        <span class="lang-sep">/</span>
        <button
          type="button"
          class="lang-link"
          class:active={$currentLang === 'eu'}
          onclick={() => setLanguage('eu')}
        >
          EU
        </button>
        <span class="lang-sep">/</span>
        <button
          type="button"
          class="lang-link"
          class:active={$currentLang === 'en'}
          onclick={() => setLanguage('en')}
        >
          EN
        </button>
      </div>

      <a href="#prueba" class="btn btn-secondary-brand nav-cta">
        {$t.nav.freeTrial}
      </a>

      <!-- Mobile Hamburger -->
      <button
        type="button"
        class="menu-toggle"
        class:open={mobileMenuOpen}
        onclick={toggleMobile}
        aria-label="Menú"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Drawer & Backdrop -->
  {#if mobileMenuOpen}
    <div class="mobile-backdrop" onclick={closeMenu} aria-hidden="true"></div>
    <div class="mobile-pane">
      <nav class="mobile-links">
        <a href="#disciplinas" onclick={closeMenu}>{$t.nav.disciplines}</a>
        <a href="#horarios" onclick={closeMenu}>{$t.nav.schedule}</a>
        <a href="#nosotros" onclick={closeMenu}>{$t.nav.about}</a>
        <a href="#tarifas" onclick={closeMenu}>{$t.nav.pricing}</a>
        <a href="#contacto" onclick={closeMenu}>{$t.nav.contact}</a>
      </nav>
      <div class="mobile-footer">
        <div class="mobile-langs">
          <button
            class="lang-link"
            class:active={$currentLang === 'es'}
            onclick={() => { setLanguage('es'); closeMenu(); }}
          >
            Castellano (ES)
          </button>
          <button
            class="lang-link"
            class:active={$currentLang === 'eu'}
            onclick={() => { setLanguage('eu'); closeMenu(); }}
          >
            Euskara (EU)
          </button>
          <button
            class="lang-link"
            class:active={$currentLang === 'en'}
            onclick={() => { setLanguage('en'); closeMenu(); }}
          >
            English (EN)
          </button>
        </div>
        <a href="#prueba" class="btn btn-secondary-brand btn-block" onclick={closeMenu}>
          {$t.nav.freeTrial}
        </a>
      </div>
    </div>
  {/if}
</header>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: #ffffff;
    border-bottom: 1px solid var(--c-gray-200);
    transition: box-shadow 0.2s ease;
  }
  .navbar.scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  }
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.85rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    text-decoration: none;
    color: inherit;
  }
  .brand-logo {
    height: 44px;
    width: auto;
    display: block;
  }
  .brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }
  .brand-name {
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    color: var(--c-black);
  }
  .brand-location {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--c-brand-blue);
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2.25rem;
  }
  .nav-links a {
    text-decoration: none;
    color: var(--c-gray-700);
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.15s ease;
  }
  .nav-links a:hover {
    color: var(--c-brand-blue);
  }
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .lang-selector {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }
  .lang-link {
    background: none;
    border: none;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--c-gray-500);
    cursor: pointer;
    padding: 0.2rem;
    transition: color 0.15s ease;
  }
  .lang-link:hover {
    color: var(--c-brand-blue);
  }
  .lang-link.active {
    color: var(--c-brand-blue);
    font-weight: 800;
    border-bottom: 2px solid var(--c-brand-purple);
  }
  .lang-sep {
    color: var(--c-gray-300);
    font-size: 0.8rem;
  }
  .btn-secondary-brand {
    background: var(--c-brand-blue);
    color: #ffffff;
    border: 1px solid var(--c-brand-blue);
    font-weight: 600;
  }
  .btn-secondary-brand:hover {
    background: #577ea8;
    border-color: #577ea8;
    color: #ffffff;
  }
  .nav-cta {
    padding: 0.6rem 1.15rem;
    font-size: 0.875rem;
  }
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 6px;
    padding: 0.5rem;
  }
  .menu-toggle span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--c-black);
    transition: all 0.2s ease;
  }
  .menu-toggle.open span:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
  }
  .menu-toggle.open span:nth-child(2) {
    transform: translateY(-4px) rotate(-45deg);
  }

  .mobile-backdrop {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 11, 0.45);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 90;
  }

  @media (max-width: 900px) {
    .nav-links, .nav-cta {
      display: none;
    }
    .menu-toggle {
      display: flex;
    }
    .mobile-pane {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #ffffff;
      border-bottom: 1px solid var(--c-gray-200);
      padding: 1.5rem;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.15);
      z-index: 95;
    }
    .mobile-links {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }
    .mobile-links a {
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--c-black);
    }
    .mobile-footer {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding-top: 1.25rem;
      border-top: 1px solid var(--c-gray-100);
    }
    .mobile-langs {
      display: flex;
      gap: 1rem;
    }
  }
</style>
