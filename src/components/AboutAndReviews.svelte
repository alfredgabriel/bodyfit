<script>
  import { t } from '../i18n/store.js';

  const reviews = [
    {
      name: "Arantza García",
      avatarBg: "#6990c0",
      discipline: "Google Reviews",
      text: "El mejor gimnasio que hay en el barrio, de toda la vida y familiar, tiene para hacer de todo tanto máquinas, como artes marciales, judo, jiu jitsu, zumba, lo que uno quiera para ponerse en forma y lo que le guste, la verdad que la gente es maravillosa y Aaron te guiará en todo lo que quieras hacer, en resumidas cuentas, un buen gimnasio muy recomendable."
    },
    {
      name: "Gurutze Frías",
      avatarBg: "#9d5e95",
      discipline: "Google Reviews",
      text: "Trato cercano, amable, familiar y muy profesional. La verdad es que he sido usuaria de otros gimnasios con instalaciones más modernas y más amplias pero no me he sentido tan cómoda como aquí. Mi pequeñín va a artes marciales y está encantado y yo que lo llevo con toda la confianza pues a los monitores se les nota que saben trabajar con peques y lo mejor de todo se nota que les gustan los niñ@s y hacen con dedicación su trabajo. Yo voy a máquinas y puedo decir más de lo mismo."
    },
    {
      name: "Noemí Gutiérrez Carrillo",
      avatarBg: "#475569",
      discipline: "Google Reviews",
      text: "Estuve solo un mes porque me estoy mudando, pero el ambiente es inmejorable. Además son muy atentos con los primerizos y torpes como yo. Es pequeño pero no tiene nada que envidiar a los gimnasios enormes que parecen bibliotecas porque todos van con cascos. ¡Una maravilla la verdad!"
    }
  ];
</script>

<section id="nosotros" class="section">
  <div class="container">
    <!-- About Intro -->
    <div class="about-block">
      <div class="about-content">
        <span class="kicker">{$t.about.kicker}</span>
        <h2 class="title-lg">{$t.about.title}</h2>
        <p class="about-text">{$t.about.text1}</p>
        <p class="about-text">{$t.about.text2}</p>
      </div>

      <div class="about-visual">
        <div class="about-frame">
          <span>Fotografía — Espacio del gimnasio y ambiente de entrenamiento</span>
        </div>
      </div>
    </div>

    <!-- Honest Reviews -->
    <div class="reviews-section">
      <div class="reviews-header">
        <div>
          <span class="kicker">{$t.reviews.kicker}</span>
          <h3 class="reviews-title">{$t.reviews.title}</h3>
        </div>
        <a
          href="https://www.google.com/maps/search/BodyFit+Zorroza+Bilbao"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
        >
          Google Reviews ↗
        </a>
      </div>

      <div class="reviews-list">
        {#each reviews as r}
          <div class="quote-card">
            <div class="card-header">
              <div class="author-avatar" style="background: {r.avatarBg}">
                {r.name.charAt(0)}
              </div>
              <div class="author-meta">
                <span class="author-name">{r.name}</span>
                <div class="stars-line">
                  <span class="quote-stars" aria-label="5 estrellas">★★★★★</span>
                  <span class="author-tag">· Google Reviews</span>
                </div>
              </div>
            </div>
            <p class="quote-text">"{r.text}"</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about-block {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4.5rem;
    align-items: center;
    margin-bottom: 5.5rem;
  }
  .about-content .title-lg {
    margin-bottom: 1.25rem;
  }
  .about-text {
    font-size: 1.05rem;
    line-height: 1.65;
    color: var(--c-gray-700);
    margin-bottom: 1rem;
  }
  .about-frame {
    aspect-ratio: 4 / 3;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    color: var(--c-gray-500);
    font-size: 0.85rem;
  }

  .reviews-section {
    padding-top: 3.5rem;
    border-top: 1px solid var(--c-gray-200);
  }
  .reviews-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }
  .reviews-title {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--c-black);
  }
  .reviews-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
  .quote-card {
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-sm);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 1rem;
  }
  .author-avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    flex-shrink: 0;
    text-transform: uppercase;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .author-meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }
  .author-name {
    font-size: 0.925rem;
    font-weight: 700;
    color: var(--c-black);
    line-height: 1.2;
  }
  .stars-line {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .quote-stars {
    color: #f59e0b;
    font-size: 0.85rem;
    letter-spacing: 1.5px;
    line-height: 1;
  }
  .author-tag {
    font-size: 0.72rem;
    color: var(--c-gray-500);
    font-weight: 500;
  }
  .quote-text {
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--c-gray-700);
    margin: 0;
  }

  @media (max-width: 900px) {
    .about-block {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .reviews-list {
      grid-template-columns: 1fr;
    }
  }
</style>
