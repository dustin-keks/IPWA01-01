<script>
  import "../app.scss";
  import favicon from "$lib/assets/favicon.svg";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import NavLocalLinks from "$lib/components/NavLocalLinks.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>CO₂-Footprint Tracker</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<Header />

<main dir="ltr">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-auto">
        <NavLocalLinks />
      </div>
      <div class="col">
        {@render children?.()}
      </div>
    </div>
  </div>
</main>

<Footer />
