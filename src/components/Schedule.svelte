<script>
  import { t, currentLang } from '../i18n/store.js';
  import { scheduleData } from '../data/scheduleData.js';

  let activeTab = $state('fitness'); // 'fitness' | 'martial'
  let activeShift = $state('all');   // 'all' | 'morning' | 'afternoon'
  let mobileMode = $state('day');    // 'day' | 'table'
  let selectedDay = $state('lunes');

  const daysList = [
    { id: 'lunes', short: 'LUN', es: 'Lunes', eu: 'Astelehena', en: 'Monday' },
    { id: 'martes', short: 'MAR', es: 'Martes', eu: 'Asteartea', en: 'Tuesday' },
    { id: 'miercoles', short: 'MIÉ', es: 'Miércoles', eu: 'Asteazkena', en: 'Wednesday' },
    { id: 'jueves', short: 'JUE', es: 'Jueves', eu: 'Osteguna', en: 'Thursday' },
    { id: 'viernes', short: 'VIE', es: 'Viernes', eu: 'Ostirala', en: 'Friday' },
    { id: 'sabado', short: 'SÁB', es: 'Sábado', eu: 'Larunbata', en: 'Saturday' }
  ];

  let currentCategory = $derived(
    activeTab === 'fitness' ? scheduleData.actividadesFisicas : scheduleData.artesMarciales
  );

  // Compute daily schedule for mobile single-day view
  let currentDaySchedule = $derived(() => {
    const list = [];
    const collect = (rows, shiftName) => {
      rows.forEach(r => {
        const item = r[selectedDay];
        if (item) {
          list.push({
            hour: r.hora,
            shift: shiftName,
            ...item
          });
        }
      });
    };
    if (activeShift === 'all' || activeShift === 'morning') {
      collect(currentCategory.manana, 'Mañana');
    }
    if (activeShift === 'all' || activeShift === 'afternoon') {
      collect(currentCategory.tarde, 'Tarde');
    }
    return list;
  });
</script>

<section id="horarios" class="section section-subtle">
  <div class="container">
    <div class="schedule-head">
      <div>
        <span class="kicker">{$t.schedule.kicker}</span>
        <h2 class="title-lg">{$t.schedule.title}</h2>
        <p class="lead">{$t.schedule.subtitle}</p>
      </div>

      <!-- General Opening Hours Quick Info -->
      <div class="opening-summary">
        <span class="open-label">{$t.schedule.gymHoursTitle}:</span>
        <div class="open-pills">
          {#each scheduleData.gymOpenHours as item}
            <div class="open-item">
              <span class="d">{item[$currentLang === 'eu' ? 'daysEu' : ($currentLang === 'en' ? 'daysEn' : 'daysEs')]}</span>
              <span class="h">{item[$currentLang === 'eu' ? 'hoursEu' : ($currentLang === 'en' ? 'hoursEn' : 'hoursEs')]}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Category Tabs & Shift Switchers -->
    <div class="controls-bar">
      <div class="tab-group" role="tablist">
        <button
          type="button"
          class="tab-btn"
          class:active={activeTab === 'fitness'}
          onclick={() => activeTab = 'fitness'}
        >
          {$t.schedule.tabFitness}
        </button>
        <button
          type="button"
          class="tab-btn"
          class:active={activeTab === 'martial'}
          onclick={() => activeTab = 'martial'}
        >
          {$t.schedule.tabMartial}
        </button>
      </div>

      <div class="shift-group">
        <button
          type="button"
          class="shift-pill"
          class:active={activeShift === 'all'}
          onclick={() => activeShift = 'all'}
        >
          {$t.schedule.filterAll}
        </button>
        <button
          type="button"
          class="shift-pill"
          class:active={activeShift === 'morning'}
          onclick={() => activeShift = 'morning'}
        >
          {$t.schedule.filterMorning}
        </button>
        <button
          type="button"
          class="shift-pill"
          class:active={activeShift === 'afternoon'}
          onclick={() => activeShift = 'afternoon'}
        >
          {$t.schedule.filterAfternoon}
        </button>
      </div>
    </div>

    <!-- Mobile View Switcher (Visible only on mobile) -->
    <div class="mobile-view-toggle">
      <div class="toggle-pills">
        <button
          type="button"
          class="view-pill"
          class:active={mobileMode === 'day'}
          onclick={() => mobileMode = 'day'}
        >
          Vista por día (entera)
        </button>
        <button
          type="button"
          class="view-pill"
          class:active={mobileMode === 'table'}
          onclick={() => mobileMode = 'table'}
        >
          Cuadrante semanal
        </button>
      </div>

      {#if mobileMode === 'day'}
        <!-- Mobile Days Selector -->
        <div class="days-carousel" role="tablist">
          {#each daysList as d}
            <button
              type="button"
              class="day-btn"
              class:active={selectedDay === d.id}
              onclick={() => selectedDay = d.id}
            >
              <span class="day-short">{d.short}</span>
              <span class="day-full">{d[$currentLang === 'eu' ? 'eu' : ($currentLang === 'en' ? 'en' : 'es')]}</span>
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <!-- 1. Mobile Day Cards List (100% width, zero cut-off on mobile) -->
    {#if mobileMode === 'day'}
      <div class="mobile-day-schedule">
        <div class="day-header-badge">
          <h3>
            {daysList.find(d => d.id === selectedDay)?.[$currentLang === 'eu' ? 'eu' : ($currentLang === 'en' ? 'en' : 'es')]}
          </h3>
          <span class="category-name">{activeTab === 'fitness' ? $t.schedule.tabFitness : $t.schedule.tabMartial}</span>
        </div>

        {#if currentDaySchedule().length === 0}
          <div class="no-classes-card">
            <p>No hay clases programadas para este turno en {selectedDay}.</p>
            <span class="sub-hint">La sala de musculación sí permanece abierta en horario normal.</span>
          </div>
        {:else}
          <div class="day-cards-list">
            {#each currentDaySchedule() as item}
              <div class="mobile-class-card class-{item.type}">
                <div class="m-card-time">
                  <span class="clock-badge">🕒 {item.hour}</span>
                  <span class="shift-label">{item.shift}</span>
                </div>
                <div class="m-card-body">
                  <h4 class="m-class-name">{item.name}</h4>
                  <span class="m-class-sub">{item.sub}</span>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    {/if}

    <!-- 2. Full Week Grid Table (Desktop + Mobile Option) -->
    <div class="tables-stack" class:hidden-on-mobile={mobileMode === 'day'}>
      <div class="mobile-swipe-hint">
        <span>⇄ Desliza horizontalmente para ver la tabla completa</span>
      </div>

      <!-- Turno de Mañana -->
      {#if activeShift === 'all' || activeShift === 'morning'}
        <div class="timetable-block">
          <div class="shift-banner">
            <span>TURNO DE MAÑANA</span>
          </div>
          <div class="table-scroll">
            <table class="grid-table">
              <thead>
                <tr>
                  <th class="th-hour">{$t.schedule.colHour}</th>
                  <th>{$t.schedule.colMon}</th>
                  <th>{$t.schedule.colTue}</th>
                  <th>{$t.schedule.colWed}</th>
                  <th>{$t.schedule.colThu}</th>
                  <th>{$t.schedule.colFri}</th>
                  <th>{$t.schedule.colSat}</th>
                </tr>
              </thead>
              <tbody>
                {#each currentCategory.manana as row}
                  <tr>
                    <td class="td-hour">{row.hora}</td>
                    <td>
                      {#if row.lunes}
                        <div class="cell-class class-{row.lunes.type}">
                          <strong>{row.lunes.name}</strong>
                          <span>{row.lunes.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.martes}
                        <div class="cell-class class-{row.martes.type}">
                          <strong>{row.martes.name}</strong>
                          <span>{row.martes.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.miercoles}
                        <div class="cell-class class-{row.miercoles.type}">
                          <strong>{row.miercoles.name}</strong>
                          <span>{row.miercoles.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.jueves}
                        <div class="cell-class class-{row.jueves.type}">
                          <strong>{row.jueves.name}</strong>
                          <span>{row.jueves.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.viernes}
                        <div class="cell-class class-{row.viernes.type}">
                          <strong>{row.viernes.name}</strong>
                          <span>{row.viernes.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.sabado}
                        <div class="cell-class class-{row.sabado.type}">
                          <strong>{row.sabado.name}</strong>
                          <span>{row.sabado.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      {/if}

      <!-- Turno de Tarde -->
      {#if activeShift === 'all' || activeShift === 'afternoon'}
        <div class="timetable-block">
          <div class="shift-banner">
            <span>TURNO DE TARDE</span>
          </div>
          <div class="table-scroll">
            <table class="grid-table">
              <thead>
                <tr>
                  <th class="th-hour">{$t.schedule.colHour}</th>
                  <th>{$t.schedule.colMon}</th>
                  <th>{$t.schedule.colTue}</th>
                  <th>{$t.schedule.colWed}</th>
                  <th>{$t.schedule.colThu}</th>
                  <th>{$t.schedule.colFri}</th>
                  <th>{$t.schedule.colSat}</th>
                </tr>
              </thead>
              <tbody>
                {#each currentCategory.tarde as row}
                  <tr>
                    <td class="td-hour">{row.hora}</td>
                    <td>
                      {#if row.lunes}
                        <div class="cell-class class-{row.lunes.type}">
                          <strong>{row.lunes.name}</strong>
                          <span>{row.lunes.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.martes}
                        <div class="cell-class class-{row.martes.type}">
                          <strong>{row.martes.name}</strong>
                          <span>{row.martes.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.miercoles}
                        <div class="cell-class class-{row.miercoles.type}">
                          <strong>{row.miercoles.name}</strong>
                          <span>{row.miercoles.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.jueves}
                        <div class="cell-class class-{row.jueves.type}">
                          <strong>{row.jueves.name}</strong>
                          <span>{row.jueves.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.viernes}
                        <div class="cell-class class-{row.viernes.type}">
                          <strong>{row.viernes.name}</strong>
                          <span>{row.viernes.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                    <td>
                      {#if row.sabado}
                        <div class="cell-class class-{row.sabado.type}">
                          <strong>{row.sabado.name}</strong>
                          <span>{row.sabado.sub}</span>
                        </div>
                      {:else}
                        <span class="cell-dash">—</span>
                      {/if}
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      {/if}
    </div>

    <!-- Clean Hygiene Notice -->
    <div class="schedule-notice">
      <p>{$t.schedule.importantNote}</p>
    </div>
  </div>
</section>

<style>
  .schedule-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  .opening-summary {
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-sm);
    padding: 1rem 1.25rem;
  }
  .open-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--c-gray-500);
    letter-spacing: 0.06em;
    margin-bottom: 0.5rem;
  }
  .open-pills {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .open-item {
    display: flex;
    flex-direction: column;
  }
  .open-item .d {
    font-size: 0.75rem;
    color: var(--c-gray-500);
  }
  .open-item .h {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--c-black);
  }

  .controls-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .tab-group {
    display: flex;
    border-bottom: 2px solid var(--c-gray-200);
  }
  .tab-btn {
    background: none;
    border: none;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-gray-500);
    padding: 0.6rem 1.5rem 0.75rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: all 0.15s ease;
  }
  .tab-btn.active {
    color: var(--c-brand-blue, #6990c0);
    font-weight: 800;
    border-bottom-color: var(--c-brand-blue, #6990c0);
  }
  .shift-group {
    display: flex;
    gap: 0.35rem;
  }
  .shift-pill {
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--c-gray-700);
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .shift-pill:hover {
    border-color: var(--c-brand-blue, #6990c0);
  }
  .shift-pill.active {
    background: var(--c-brand-blue, #6990c0);
    color: var(--c-white);
    border-color: var(--c-brand-blue, #6990c0);
  }

  /* Mobile View Switcher */
  .mobile-view-toggle {
    display: none;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.75rem;
  }
  .toggle-pills {
    display: flex;
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: 8px;
    padding: 3px;
  }
  .view-pill {
    flex: 1;
    border: none;
    background: none;
    font-family: inherit;
    font-size: 0.825rem;
    font-weight: 600;
    color: var(--c-gray-500);
    padding: 0.55rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .view-pill.active {
    background: var(--c-black);
    color: #ffffff;
  }

  /* Days Selector Carousel for Mobile */
  .days-carousel {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.35rem;
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-sm);
    padding: 0.4rem;
  }
  .day-btn {
    border: 1px solid transparent;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.45rem 0.2rem;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
  }
  .day-btn.active {
    background: var(--c-brand-blue, #6990c0);
    color: #ffffff;
  }
  .day-short {
    font-size: 0.75rem;
    font-weight: 800;
  }
  .day-full {
    display: none;
  }

  /* Mobile Day Schedule Cards List */
  .mobile-day-schedule {
    display: none;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .day-header-badge {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-left: 3px solid var(--c-brand-blue, #6990c0);
    border-radius: var(--radius-sm);
    padding: 0.75rem 1rem;
  }
  .day-header-badge h3 {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--c-black);
    margin: 0;
  }
  .category-name {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--c-brand-purple, #9d5e95);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .day-cards-list {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .mobile-class-card {
    border-radius: var(--radius-sm);
    padding: 0.9rem 1.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left-width: 4px;
    border-left-style: solid;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  }
  .m-card-time {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .clock-badge {
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: -0.01em;
  }
  .shift-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.8;
  }
  .m-card-body {
    text-align: right;
  }
  .m-class-name {
    font-size: 0.95rem;
    font-weight: 800;
    margin: 0;
    line-height: 1.2;
  }
  .m-class-sub {
    font-size: 0.75rem;
    opacity: 0.85;
  }
  .no-classes-card {
    background: #ffffff;
    border: 1px dashed var(--c-gray-300);
    border-radius: var(--radius-sm);
    padding: 2rem 1.5rem;
    text-align: center;
    color: var(--c-gray-600);
  }
  .sub-hint {
    display: block;
    font-size: 0.8rem;
    color: var(--c-gray-400);
    margin-top: 0.5rem;
  }

  /* Full Week Grid Table */
  .tables-stack {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .mobile-swipe-hint {
    display: none;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--c-gray-500);
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .timetable-block {
    background: #ffffff;
    border: 1px solid var(--c-gray-200);
    border-radius: var(--radius-md);
    overflow: hidden;
  }
  .shift-banner {
    background: var(--c-gray-100);
    padding: 0.65rem 1.25rem;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: var(--c-gray-700);
    border-bottom: 1px solid var(--c-gray-200);
  }
  .table-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .grid-table {
    width: 100%;
    min-width: 650px;
    border-collapse: collapse;
    font-size: 0.875rem;
  }
  .grid-table th {
    background: var(--c-white);
    color: var(--c-black);
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.85rem 0.75rem;
    text-align: center;
    border-bottom: 1px solid var(--c-gray-200);
    border-right: 1px solid var(--c-gray-100);
  }
  .grid-table th.th-hour {
    width: 130px;
    text-align: left;
    padding-left: 1rem;
    position: sticky;
    left: 0;
    z-index: 2;
    background: var(--c-white);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.03);
  }
  .grid-table td {
    padding: 0.65rem 0.55rem;
    text-align: center;
    border-bottom: 1px solid var(--c-gray-100);
    border-right: 1px solid var(--c-gray-100);
    vertical-align: middle;
  }
  .grid-table td.td-hour {
    font-weight: 700;
    color: var(--c-black);
    text-align: left;
    padding-left: 1rem;
    white-space: nowrap;
    background: var(--c-bg-subtle);
    position: sticky;
    left: 0;
    z-index: 1;
    border-right: 2px solid var(--c-gray-200);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.03);
  }
  .cell-dash {
    color: var(--c-gray-300);
    font-weight: 300;
  }
  .cell-class {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    padding: 0.45rem 0.5rem;
    border-radius: var(--radius-sm);
    border: 1px solid transparent;
    text-align: center;
  }
  .cell-class strong {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.15;
  }
  .cell-class span {
    font-size: 0.68rem;
    opacity: 0.9;
  }

  /* ===================================================
     DISTINCT CLASS COLORS (ACCORDING TO OFFICIAL POSTERS)
     =================================================== */

  /* 1. Funcional (Cyan / Sky Blue) */
  .cell-class.class-funcional,
  .mobile-class-card.class-funcional {
    background: #e0f4fc;
    border-color: #98daf4;
    color: #0369a1;
  }

  /* 2. HIIT (Soft Red / Coral) */
  .cell-class.class-hiit,
  .mobile-class-card.class-hiit {
    background: #ffebee;
    border-color: #fca5a5;
    color: #b91c1c;
  }

  /* 3. Pilates (Vanilla / Warm Amber) */
  .cell-class.class-pilates,
  .mobile-class-card.class-pilates {
    background: #fef9c3;
    border-color: #fde047;
    color: #854d0e;
  }

  /* 4. Zumba (Lilac / Soft Purple) */
  .cell-class.class-zumba,
  .mobile-class-card.class-zumba {
    background: #f3e8ff;
    border-color: #d8b4fe;
    color: #7e22ce;
  }

  /* 5. Grappling No-Gi (Ice Cyan / Aqua) */
  .cell-class.class-grappling,
  .mobile-class-card.class-grappling {
    background: #e0f7fa;
    border-color: #80deea;
    color: #0e7490;
  }

  /* 6. Judo Infantil (Warm Gold) */
  .cell-class.class-judo,
  .mobile-class-card.class-judo {
    background: #fef3c7;
    border-color: #fcd34d;
    color: #b45309;
  }

  /* 7. Jiu Jitsu Con Gi (Rose / Crimson Pink) */
  .cell-class.class-bjj,
  .mobile-class-card.class-bjj {
    background: #fce7f3;
    border-color: #f9a8d4;
    color: #be185d;
  }

  /* 8. Muay Thai (Mint / Emerald Green) */
  .cell-class.class-muaythai,
  .mobile-class-card.class-muaythai {
    background: #dcfce7;
    border-color: #86efac;
    color: #15803d;
  }

  /* 9. Open Mat (Lavender Violet) */
  .cell-class.class-openmat,
  .mobile-class-card.class-openmat {
    background: #ede9fe;
    border-color: #c4b5fd;
    color: #6d28d9;
  }

  .schedule-notice {
    background: #ffffff;
    border-left: 3px solid var(--c-brand-purple, #9d5e95);
    padding: 0.85rem 1.25rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--c-gray-700);
  }

  /* Responsive Rules */
  @media (max-width: 850px) {
    .mobile-view-toggle {
      display: flex;
    }
    .mobile-day-schedule {
      display: flex;
    }
    .tables-stack.hidden-on-mobile {
      display: none;
    }
    .mobile-swipe-hint {
      display: block;
    }
    .controls-bar {
      gap: 1rem;
    }
    .shift-group {
      flex-wrap: wrap;
    }
  }
</style>
