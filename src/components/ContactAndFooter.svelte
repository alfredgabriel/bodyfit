<script>
  import { t } from '../i18n/store.js';
  import logoSrc from '../assets/BodyFitLogo.png';
  const currentYear = new Date().getFullYear();
</script>

<section id="contacto" class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-text">
        <span class="kicker">{$t.contact.kicker}</span>
        <h2 class="title-lg">{$t.contact.title}</h2>

        <div class="contact-entries">
          <div class="entry">
            <span class="entry-label">{$t.contact.addressLabel}</span>
            <p class="entry-value">{$t.contact.addressValue}</p>
          </div>

          <div class="entry">
            <span class="entry-label">{$t.contact.phoneLabel}</span>
            <p class="entry-value">
              <a href="tel:+34644479320">{$t.contact.phoneValue}</a>
            </p>
          </div>

          <div class="entry">
            <span class="entry-label">{$t.contact.hoursLabel}</span>
            <p class="entry-value">{$t.contact.hoursValue}</p>
          </div>

          <div class="entry">
            <span class="entry-label">{$t.contact.instagramLabel}</span>
            <p class="entry-value">
              <a href="https://www.instagram.com/bodyfitzorroza/" target="_blank" rel="noopener noreferrer">
                {$t.contact.instagramValue} ↗
              </a>
            </p>
          </div>
        </div>

        <div class="contact-buttons">
          <a
            href="https://wa.me/34644479320"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-whatsapp"
          >
            {$t.contact.whatsappBtn}
          </a>
          <a href="tel:+34644479320" class="btn btn-secondary">
            {$t.contact.callBtn}
          </a>
        </div>
      </div>

      <div class="map-frame">
        <iframe
          src="https://maps.google.com/maps?q=Zorrotza+Kastrexana+Errepidea+3+Bilbao+48013&output=embed&hl=es"
          title="Ubicación de BodyFit Zorroza en Bilbao"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</section><!-- Footer (Slim, Compact & Clean) -->
<footer class="footer">
  <div class="container footer-row">
    <div class="f-brand-block">
      <img src={logoSrc} alt="BodyFit Zorroza" class="f-logo" />
      <span class="f-name">BodyFit</span>
      <span class="f-sub">ZORROZA</span>
      <span class="f-sep">/</span>
      <span class="f-copy">&copy; {currentYear}</span>
    </div>

    <div class="f-links">
      <a href="#disciplinas">{$t.nav.disciplines}</a>
      <a href="#horarios">{$t.nav.schedule}</a>
      <a href="#nosotros">{$t.nav.about}</a>
      <a href="#tarifas">{$t.nav.pricing}</a>
      <a href="#contacto">{$t.nav.contact}</a>
      <a href="https://www.instagram.com/bodyfitzorroza/" target="_blank" rel="noopener noreferrer" class="f-ig">
        Instagram
      </a>
    </div>
  </div>
</footer>

<style>
  :root {
    --c-brand-blue: #6990c0;
    --c-brand-purple: #9d5e95;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.5rem;
    align-items: center;
  }
  .contact-text .title-lg {
    margin-bottom: 2rem;
  }
  .contact-entries {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
  .entry-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--c-brand-purple);
    margin-bottom: 0.25rem;
  }
  .entry-value {
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-black);
    line-height: 1.4;
  }
  .entry-value a {
    color: var(--c-brand-blue);
    text-decoration: none;
  }
  .entry-value a:hover {
    text-decoration: underline;
  }
  .contact-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .map-frame {
    height: 400px;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  .map-frame iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  /* Compact Footer */
  .footer {
    background: #ffffff;
    border-top: 1px solid var(--c-gray-200);
    padding: 1.25rem 0;
  }
  .footer-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .f-brand-block {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .f-logo {
    height: 26px;
    width: auto;
  }
  .f-name {
    font-weight: 800;
    font-size: 0.95rem;
    color: var(--c-black);
    letter-spacing: -0.01em;
  }
  .f-sub {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--c-brand-blue);
  }
  .f-sep {
    color: var(--c-gray-300);
    font-size: 0.8rem;
  }
  .f-copy {
    font-size: 0.8rem;
    color: var(--c-gray-400);
  }
  .f-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .f-links a {
    color: var(--c-gray-600);
    text-decoration: none;
    font-size: 0.825rem;
    font-weight: 500;
    transition: color 0.15s ease;
  }
  .f-links a:hover {
    color: var(--c-brand-blue);
  }
  .f-links a.f-ig {
    color: var(--c-brand-purple);
    font-weight: 600;
  }

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .footer-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>
