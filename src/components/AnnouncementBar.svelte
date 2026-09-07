<script>
  let isVisible = $state(false);
  let avisoTexto = $state('');

  // Read from global config.js if present
  if (typeof window !== 'undefined') {
    const checkConfig = () => {
      if (window.GYMCONFIG && window.GYMCONFIG.aviso && window.GYMCONFIG.aviso.activo) {
        avisoTexto = window.GYMCONFIG.aviso.texto;
        isVisible = true;
      }
    };
    checkConfig();
    window.addEventListener('load', checkConfig);
  }

  function closeBanner() {
    isVisible = false;
  }
</script>

{#if isVisible}
  <div class="announcement-bar" role="alert">
    <div class="announcement-content">
      <span class="bell-icon">🔔</span>
      <p>{avisoTexto}</p>
      <button type="button" class="close-btn" onclick={closeBanner} aria-label="Cerrar aviso">
        &times;
      </button>
    </div>
  </div>
{/if}

<style>
  .announcement-bar {
    background: #7c2d12;
    color: #fef3c7;
    padding: 0.6rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .announcement-content {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .announcement-content p {
    margin: 0;
    line-height: 1.4;
  }
  .bell-icon {
    font-size: 1rem;
  }
  .close-btn {
    background: none;
    border: none;
    color: #fef3c7;
    font-size: 1.35rem;
    line-height: 1;
    cursor: pointer;
    padding: 0 0.35rem;
    opacity: 0.85;
    transition: opacity 0.15s ease;
  }
  .close-btn:hover {
    opacity: 1;
  }
</style>
