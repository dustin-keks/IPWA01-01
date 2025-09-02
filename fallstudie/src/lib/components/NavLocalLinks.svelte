<script>
  import { page } from "$app/state";
  const years = [2025, 2024, 2023, 2022, 2021];
</script>

<nav id="local-links" class="list-group list-group-flush sticky-top">
  {#each years as year}
    <a
      href="/emissions-{year}"
      class="list-group-item list-group-item-action {page.url.pathname ===
      `/emissions-${year}`
        ? 'active'
        : ''}"
      aria-current={page.url.pathname === `/emissions-${year}`}
    >
      CO₂-Footprint {year}
    </a>
  {/each}
</nav>

<style>
  #local-links {
    top: 1rem;
  }
</style>
