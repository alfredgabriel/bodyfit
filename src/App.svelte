<script>
  import AnnouncementBar from './components/AnnouncementBar.svelte';
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Disciplines from './components/Disciplines.svelte';
  import Schedule from './components/Schedule.svelte';
  import Pricing from './components/Pricing.svelte';
  import TrialForm from './components/TrialForm.svelte';
  import AboutAndReviews from './components/AboutAndReviews.svelte';
  import ContactAndFooter from './components/ContactAndFooter.svelte';
</script>

<div class="app-root">
  <AnnouncementBar />
  <Navbar />
  <main>
    <Hero />
    <Disciplines />
    <Schedule />
    <AboutAndReviews />
    <Pricing />
    <TrialForm />
    <ContactAndFooter />
  </main>
</div>

<style>
  .app-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
  }
</style>
