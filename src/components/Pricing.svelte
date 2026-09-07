<script>
  import { t } from '../i18n/store.js';
</script>

<section id="tarifas" class="section section-subtle">
  <div class="container">
    <div class="pricing-intro">
      <span class="kicker">{$t.pricing.kicker}</span>
      <h2 class="title-lg">{$t.pricing.title}</h2>
      <p class="lead">{$t.pricing.subtitle}</p>
    </div>

    <!-- Pricing Cards -->
    <div class="pricing-cards">
      <!-- Adult Card (Primary) -->
      <div class="card card-featured">
        <div class="card-tag">{$t.pricing.badgePopular}</div>
        <div class="card-head">
          <h3 class="plan-title">{$t.pricing.adultTitle}</h3>
          <p class="plan-sub">{$t.pricing.adultSub}</p>
          <div class="plan-cost">
            <span class="currency">€</span>
            <span class="amount">{$t.pricing.adultPrice}</span>
            <span class="period">/ mes</span>
          </div>
        </div>

        <ul class="plan-list">
          <li><strong>+ 1 disciplina dirigida o arte marcial a tu elección</strong></li>
          <li>Asesoramiento y supervisión en sala</li>
          <li>Uso de vestuarios, duchas y taquillas</li>
          <li>Sin matrícula de inscripción</li>
          <li>Sin permanencia</li>
        </ul>

        <a href="#prueba" class="btn btn-primary btn-block">
          Probar una clase gratis
        </a>
      </div>

      <!-- Child Card -->
      <div class="card">
        <div class="card-head">
          <h3 class="plan-title">{$t.pricing.childTitle}</h3>
          <p class="plan-sub">{$t.pricing.childSub}</p>
          <div class="plan-cost">
            <span class="currency">€</span>
            <span class="amount">{$t.pricing.childPrice}</span>
            <span class="period">/ mes</span>
          </div>
        </div>

        <ul class="plan-list">
          <li>Clases de Judo Infantil y artes marciales</li>
          <li>Desarrollo psicomotriz, disciplina y compañerismo</li>
          <li>Monitores titulados con experiencia en iniciación</li>
          <li>Uso de vestuarios y tatami seguro</li>
          <li>Sin matrícula de inscripción</li>
          <li>Sin permanencia</li>
        </ul>

        <a href="#prueba" class="btn btn-secondary btn-block">
          Probar una clase gratis
        </a>
      </div>
    </div>

    <!-- Transparent Terms & Payment Methods -->
    <div class="payment-policy-box">
      <div class="policy-col">
        <h4 class="col-title">{$t.pricing.includesTitle}</h4>
        <ul class="clean-bullets">
          <li>{$t.pricing.inc1}</li>
          <li>{$t.pricing.inc2}</li>
          <li>{$t.pricing.inc3}</li>
          <li>{$t.pricing.inc4}</li>
        </ul>
      </div>

      <div class="policy-col">
        <h4 class="col-title">{$t.pricing.paymentTitle}</h4>
        <div class="payment-types">
          <div class="pay-method">
            <span class="pay-dot"></span>
            <div>
              <strong>{$t.pricing.cash}</strong>
              <p>Directamente en el mostrador del gimnasio.</p>
            </div>
          </div>
          <div class="pay-method">
            <span class="pay-dot"></span>
            <div>
              <strong>{$t.pricing.card}</strong>
              <p>TPV y contactless disponible en recepción.</p>
            </div>
          </div>
        </div>
        <p class="policy-note">{$t.pricing.policy}</p>
      </div>
    </div>
  </div>
</section>

<style>
  .pricing-intro {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 3.5rem;
  }
  .pricing-intro .title-lg {
    margin-bottom: 0.75rem;
  }
  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 3.5rem;
  }
  .card {
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    padding: 2.75rem 2.25rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .card-featured {
    border-color: var(--c-brand-blue, #6990c0);
    box-shadow: 0 4px 20px rgba(105, 144, 192, 0.12);
  }
  .card-tag {
    position: absolute;
    top: 1rem;
    right: 1.25rem;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--c-brand-purple, #9d5e95);
    background: rgba(157, 94, 149, 0.06);
    border: 1px solid rgba(157, 94, 149, 0.25);
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
  }
  .card-head {
    margin-bottom: 2rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid var(--c-gray-100);
  }
  .plan-title {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--c-black);
    letter-spacing: -0.02em;
    margin-bottom: 0.25rem;
  }
  .plan-sub {
    font-size: 0.875rem;
    color: var(--c-gray-500);
    margin-bottom: 1.25rem;
  }
  .plan-cost {
    display: flex;
    align-items: baseline;
    gap: 0.2rem;
  }
  .currency {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--c-black);
  }
  .amount {
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
    color: var(--c-black);
  }
  .period {
    font-size: 0.95rem;
    color: var(--c-gray-500);
    font-weight: 500;
    margin-left: 0.25rem;
  }
  .plan-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin-bottom: 2.25rem;
    flex-grow: 1;
  }
  .plan-list li {
    font-size: 0.925rem;
    color: var(--c-gray-700);
    line-height: 1.45;
    position: relative;
    padding-left: 1.25rem;
  }
  .plan-list li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--c-gray-400);
  }
  .payment-policy-box {
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    padding: 2.5rem;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3.5rem;
  }
  .col-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--c-black);
    letter-spacing: -0.01em;
    margin-bottom: 1.25rem;
  }
  .clean-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .clean-bullets li {
    font-size: 0.9rem;
    color: var(--c-gray-700);
    line-height: 1.5;
    position: relative;
    padding-left: 1.25rem;
  }
  .clean-bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--c-black);
    font-weight: bold;
  }
  .payment-types {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .pay-method {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
  }
  .pay-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--c-brand-blue, #6990c0);
    margin-top: 0.5rem;
  }
  .pay-method strong {
    display: block;
    font-size: 0.925rem;
    color: var(--c-black);
  }
  .pay-method p {
    font-size: 0.825rem;
    color: var(--c-gray-500);
    margin: 0;
  }
  .policy-note {
    font-size: 0.8rem;
    color: var(--c-gray-500);
    border-top: 1px solid var(--c-gray-100);
    padding-top: 1rem;
  }

  @media (max-width: 850px) {
    .pricing-cards {
      grid-template-columns: 1fr;
    }
    .payment-policy-box {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 1.75rem;
    }
  }
</style>
