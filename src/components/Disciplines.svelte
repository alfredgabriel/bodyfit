<script>
  import { t } from '../i18n/store.js';
  import photo1 from '../assets/sala-de-musculacion.jpeg';
  import photo2 from '../assets/sala-de-musculacion-2.jpeg';

  const musculacionPhotos = [
    { src: photo1, alt: "Sala de Musculación y zona de peso libre en BodyFit Zorroza" },
    { src: photo2, alt: "Zona de cardio y maquinaria guiada en BodyFit Zorroza" }
  ];

  let currentPhotoIndex = $state(0);

  function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + musculacionPhotos.length) % musculacionPhotos.length;
  }

  function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % musculacionPhotos.length;
  }
</script>

<section id="disciplinas" class="section">
  <div class="container">
    <div class="disciplines-header">
      <span class="kicker">{$t.disciplines.kicker}</span>
      <h2 class="title-lg">{$t.disciplines.title}</h2>
    </div>

    <!-- 1. Musculación -->
    <div class="discipline-showcase">
      <div class="showcase-content">
        <h3 class="area-title">{$t.disciplines.area1Title}</h3>
        <p class="area-description">{$t.disciplines.area1Desc}</p>
        <div class="trainer-callout">
          <div class="callout-icon">🏋️</div>
          <p>{$t.disciplines.trainerJohan}</p>
        </div>
      </div>
      <div class="showcase-media">
        <div class="photo-gallery">
          <div class="photo-container large-photo">
            <img
              src={musculacionPhotos[currentPhotoIndex].src}
              alt={musculacionPhotos[currentPhotoIndex].alt}
              class="showcase-img"
              loading="lazy"
            />
            <button
              type="button"
              class="gallery-nav-btn prev"
              onclick={prevPhoto}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              class="gallery-nav-btn next"
              onclick={nextPhoto}
              aria-label="Foto siguiente"
            >
              ›
            </button>
            <div class="gallery-counter">
              {currentPhotoIndex + 1} / {musculacionPhotos.length}
            </div>
          </div>
          <div class="gallery-thumbs">
            {#each musculacionPhotos as p, i}
              <button
                type="button"
                class="thumb-btn"
                class:active={currentPhotoIndex === i}
                onclick={() => currentPhotoIndex = i}
                aria-label={`Ver foto ${i + 1}`}
              >
                <img src={p.src} alt="" class="thumb-img" />
              </button>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Clases Dirigidas -->
    <div class="discipline-section">
      <div class="section-intro">
        <div class="intro-text">
          <h3 class="area-title">{$t.disciplines.area2Title}</h3>
          <p class="area-description">{$t.disciplines.area2Desc}</p>
        </div>
        <div class="instructors-badge">
          <span class="badge-dot"></span>
          <span>{$t.disciplines.directedNote}</span>
        </div>
      </div>

      <div class="discipline-rows">
        {#each $t.disciplines.classesList as item}
          <div class="disc-row">
            <div class="disc-info">
              <span class="category-pill blue">{item.category}</span>
              <h4 class="disc-title">{item.name}</h4>
              <p class="disc-desc">{item.desc}</p>
            </div>
            <div class="disc-photo">
              <div class="photo-placeholder">
                <span class="camera-icon">📷</span>
                <span class="photo-label">{item.photoText}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- 3. Artes Marciales -->
    <div class="discipline-section last">
      <div class="section-intro">
        <div class="intro-text">
          <h3 class="area-title">{$t.disciplines.area3Title}</h3>
          <p class="area-description">{$t.disciplines.area3Desc}</p>
        </div>
        <div class="instructors-badge">
          <span class="badge-dot purple"></span>
          <span>{$t.disciplines.martialNote}</span>
        </div>
      </div>

      <div class="discipline-rows">
        {#each $t.disciplines.martialList as item}
          <div class="disc-row">
            <div class="disc-info">
              <span class="category-pill purple">{item.category}</span>
              <h4 class="disc-title">{item.name}</h4>
              <p class="disc-desc">{item.desc}</p>
            </div>
            <div class="disc-photo">
              <div class="photo-placeholder">
                <span class="camera-icon">🥋</span>
                <span class="photo-label">{item.photoText}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>

<style>
  .disciplines-header {
    margin-bottom: 3.5rem;
  }

  /* ─── 1. Musculación showcase ─── */
  .discipline-showcase {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4rem;
    align-items: center;
    padding-bottom: 4.5rem;
    border-bottom: 1px solid var(--c-gray-200);
    margin-bottom: 4.5rem;
  }
  .area-title {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    color: var(--c-black);
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  .area-description {
    font-size: 1.05rem;
    line-height: 1.65;
    color: var(--c-gray-700);
    margin-bottom: 1.75rem;
  }
  .trainer-callout {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-left: 3px solid var(--c-brand-blue);
    border-radius: var(--radius-sm);
    padding: 1.15rem 1.35rem;
  }
  .callout-icon {
    font-size: 1.3rem;
    line-height: 1;
    margin-top: 0.1rem;
  }
  .trainer-callout p {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--c-gray-700);
    line-height: 1.55;
    margin: 0;
  }

  /* ─── 2 & 3. Sections shared ─── */
  .discipline-section {
    padding-bottom: 4.5rem;
    border-bottom: 1px solid var(--c-gray-200);
    margin-bottom: 4.5rem;
  }
  .discipline-section.last {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .section-intro {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }
  .section-intro .area-description {
    margin-bottom: 0;
    max-width: 620px;
  }

  .instructors-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: 999px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--c-gray-700);
    flex-shrink: 0;
  }
  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--c-brand-blue);
    flex-shrink: 0;
  }
  .badge-dot.purple {
    background: var(--c-brand-purple);
  }

  /* ─── Discipline rows layout ─── */
  .discipline-rows {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .disc-row {
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 0;
    align-items: center;
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .disc-row:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    border-color: var(--c-gray-300);
  }

  /* Photo */
  .disc-photo {
    height: 180px;
    background: var(--c-bg-subtle);
    border-left: 1px solid var(--c-gray-200);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .photo-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem;
    text-align: center;
  }
  .camera-icon {
    font-size: 1.5rem;
    opacity: 0.6;
  }
  .photo-label {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--c-gray-500);
    line-height: 1.4;
  }

  /* Info */
  .disc-info {
    padding: 1.75rem 2rem 1.75rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .category-pill {
    display: inline-block;
    align-self: flex-start;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
  }
  .category-pill.blue {
    background: var(--c-brand-blue-subtle);
    color: var(--c-brand-blue);
  }
  .category-pill.purple {
    background: var(--c-brand-purple-subtle);
    color: var(--c-brand-purple);
  }
  .disc-title {
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--c-black);
    line-height: 1.2;
  }
  .disc-desc {
    font-size: 0.95rem;
    color: var(--c-gray-700);
    line-height: 1.6;
    margin: 0;
  }

  /* Photo Gallery for Musculación */
  .photo-gallery {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }
  .photo-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-bg-subtle);
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  }
  .large-photo {
    aspect-ratio: 4 / 3;
    width: 100%;
  }
  .showcase-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
  }
  .photo-container:hover .showcase-img {
    transform: scale(1.02);
  }

  .gallery-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: var(--c-black);
    font-size: 1.4rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.15s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
  .gallery-nav-btn:hover {
    background: #ffffff;
    transform: translateY(-50%) scale(1.08);
  }
  .gallery-nav-btn.prev {
    left: 0.75rem;
  }
  .gallery-nav-btn.next {
    right: 0.75rem;
  }

  .gallery-counter {
    position: absolute;
    bottom: 0.75rem;
    right: 0.75rem;
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(4px);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    letter-spacing: 0.05em;
    z-index: 2;
  }

  .gallery-thumbs {
    display: flex;
    gap: 0.6rem;
  }
  .thumb-btn {
    width: 72px;
    height: 52px;
    padding: 0;
    border: 2px solid transparent;
    border-radius: var(--radius-sm);
    overflow: hidden;
    cursor: pointer;
    background: var(--c-bg-subtle);
    opacity: 0.6;
    transition: opacity 0.15s ease, border-color 0.15s ease, transform 0.15s ease;
  }
  .thumb-btn:hover {
    opacity: 0.9;
  }
  .thumb-btn.active {
    opacity: 1;
    border-color: var(--c-brand-blue, #6990c0);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .thumb-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .discipline-showcase {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      padding-bottom: 3.5rem;
      margin-bottom: 3.5rem;
    }
    .section-intro {
      flex-direction: column;
      align-items: flex-start;
    }
    .disc-row {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .disc-photo {
      height: 200px;
      width: 100%;
      border-left: none;
      border-bottom: 1px solid var(--c-gray-200);
      order: 0;
    }
    .disc-info {
      padding: 1.5rem;
      order: 1;
    }
  }

  @media (max-width: 640px) {
    .area-title {
      font-size: 1.65rem;
    }
    .disc-photo {
      height: 160px;
    }
  }
</style>
