<script>
  import { page } from "$app/state";
  const years = [2025, 2024, 2023, 2022, 2021];
</script>

<nav class="list-group list-group-flush">
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
