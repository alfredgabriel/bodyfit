<script>
  import { t } from '../i18n/store.js';
</script>

<section id="inicio" class="hero">
  <div class="container hero-layout">
    <div class="hero-text">
      <span class="location-badge">{$t.hero.badge}</span>
      <h1 class="hero-title">{$t.hero.title}</h1>
      <p class="hero-lead">{$t.hero.subtitle}</p>

      <div class="hero-buttons">
        <a href="#prueba" class="btn btn-primary btn-lg">
          {$t.hero.ctaTrial}
        </a>
        <a
          href="https://wa.me/34644479320"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-whatsapp btn-lg"
        >
          {$t.hero.ctaWhatsapp}
        </a>
      </div>

      <div class="hero-pillars">
        <div class="pillar">
          <span class="pillar-line"></span>
          <span>{$t.hero.point1}</span>
        </div>
        <div class="pillar">
          <span class="pillar-line"></span>
          <span>{$t.hero.point2}</span>
        </div>
        <div class="pillar">
          <span class="pillar-line"></span>
          <span>{$t.hero.point3}</span>
        </div>
      </div>
    </div>

    <!-- Editorial Visual Frame -->
    <div class="hero-visual">
      <div class="visual-card">
        <div class="card-interior">
          <img src="/images/BodyFitLogo.png" alt="BodyFit" class="visual-logo" />
          <div class="visual-text">
            <h3>BodyFit Zorroza</h3>
            <p>Espacio reservado para foto del gimnasio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 5rem 0 4.5rem;
    background: #ffffff;
  }
  .hero-layout {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4rem;
    align-items: center;
  }
  .location-badge {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--c-brand-blue, #6990c0);
    margin-bottom: 1.25rem;
  }
  .hero-title {
    font-size: clamp(2.35rem, 4.2vw, 3.4rem);
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.035em;
    color: var(--c-black);
    margin-bottom: 1.25rem;
  }
  .hero-lead {
    font-size: 1.1rem;
    line-height: 1.65;
    color: var(--c-gray-700);
    max-width: 520px;
    margin-bottom: 2.25rem;
  }
  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .hero-pillars {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 2rem;
    border-top: 1px solid var(--c-gray-200);
  }
  .pillar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.925rem;
    font-weight: 500;
    color: var(--c-charcoal);
  }
  .pillar-line {
    width: 16px;
    height: 2px;
    background: var(--c-brand-purple, #9d5e95);
  }
  .hero-visual {
    width: 100%;
  }
  .visual-card {
    aspect-ratio: 4 / 3.3;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
    text-align: center;
  }
  .card-interior {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .visual-logo {
    height: 60px;
    width: auto;
    opacity: 0.85;
  }
  .visual-text h3 {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: var(--c-black);
    margin-bottom: 0.35rem;
  }
  .visual-text p {
    font-size: 0.85rem;
    color: var(--c-gray-500);
  }

  @media (max-width: 900px) {
    .hero-layout {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
