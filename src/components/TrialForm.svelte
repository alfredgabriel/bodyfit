<script>
  import { t } from '../i18n/store.js';
</script>

<section id="prueba" class="section">
  <div class="container trial-wrapper">
    <div class="trial-card">
      <div class="trial-main">
        <span class="kicker">{$t.trial.kicker}</span>
        <h2 class="title-lg">{$t.trial.title}</h2>
        <p class="lead">{$t.trial.subtitle}</p>

        <div class="how-it-works">
          <h3 class="hw-title">{$t.trial.howItWorksTitle}</h3>
          <div class="steps-grid">
            <div class="step-card">
              <span class="step-num">1</span>
              <p>{$t.trial.step1}</p>
            </div>
            <div class="step-card">
              <span class="step-num">2</span>
              <p>{$t.trial.step2}</p>
            </div>
            <div class="step-card">
              <span class="step-num">3</span>
              <p>{$t.trial.step3}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="trial-contact-side">
        <div class="contact-box">
          <h4>{$t.trial.contactTitle}</h4>
          <p>{$t.trial.contactDesc}</p>

          <div class="contact-buttons">
            <a
              href="https://wa.me/34644479320"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-whatsapp btn-block"
            >
              <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {$t.trial.whatsappBtn}
            </a>
            <a href="tel:+34644479320" class="btn btn-secondary btn-block">
              {$t.trial.callBtn}
            </a>
          </div>

          <div class="direct-info">
            <span class="di-addr">Zorrotza Kastrexana, 3 · Bilbao</span>
            <span class="di-hours">L-V: 7:00 a 22:00 | S: 9:00 a 14:00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .trial-wrapper {
    max-width: 1050px;
  }
  .trial-card {
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    padding: 3.5rem;
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 3.5rem;
    align-items: center;
  }
  .trial-main .title-lg {
    margin-bottom: 0.75rem;
  }
  .trial-main .lead {
    margin-bottom: 2.25rem;
  }
  .hw-title {
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--c-black);
    margin-bottom: 1.25rem;
  }
  .steps-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .step-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-sm);
    padding: 0.85rem 1rem;
  }
  .step-num {
    width: 24px;
    height: 24px;
    background: var(--c-brand-blue, #6990c0);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 800;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
  .step-card p {
    font-size: 0.9rem;
    color: var(--c-charcoal);
    line-height: 1.45;
    margin: 0;
  }

  .trial-contact-side {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .contact-box {
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-top: 3px solid var(--c-brand-purple, #9d5e95);
    border-radius: var(--radius-sm);
    padding: 2rem 1.75rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .contact-box h4 {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--c-black);
    line-height: 1.3;
  }
  .contact-box p {
    font-size: 0.875rem;
    color: var(--c-gray-600);
    line-height: 1.5;
  }
  .contact-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0.5rem 0;
  }
  .wa-icon {
    width: 18px;
    height: 18px;
  }
  .direct-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--c-gray-200);
    font-size: 0.775rem;
    color: var(--c-gray-500);
  }
  .di-addr {
    font-weight: 600;
    color: var(--c-charcoal);
  }

  @media (max-width: 900px) {
    .trial-card {
      grid-template-columns: 1fr;
      padding: 2rem 1.5rem;
      gap: 2.5rem;
    }
  }
</style>
