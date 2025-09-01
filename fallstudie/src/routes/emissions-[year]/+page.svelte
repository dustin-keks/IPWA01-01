<script>
  // load json files through +page.js
  const { data } = $props();

  // <thead>
  const tableHead = [
    { key: "emission", label: "Emission in Millionen Tonnen CO₂" },
    { key: "country", label: "Land" },
    { key: "company", label: "Unternehmen" },
  ];

  // runes
  let sortKey = $state("emission");
  let sortAsc = $state(true);
  let filter = $state("");
  const f = $derived(filter.toLowerCase());

  // UI
  function sortBy(key) {
    if (sortKey === key) {
      sortAsc = !sortAsc;
    } else {
      sortKey = key;
      sortAsc = true;
    }
  }

  // sort table
  function sortTable(a, b) {
    let result = 0;

    switch (sortKey) {
      case "emission":
        result = a.emission - b.emission;
        break;
      case "country":
        result = a.country.toLowerCase().localeCompare(b.country.toLowerCase());
        break;
      case "company":
        result = a.company.toLowerCase().localeCompare(b.company.toLowerCase());
        break;
    }

    return sortAsc ? result : -result;
  }

  // filter table
  function filterTable(row) {
    return (
      row.emission.toString().includes(f) ||
      row.country.toLowerCase().includes(f) ||
      row.company.toLowerCase().includes(f)
    );
  }

  // create filtered and sorted table
  const tableRows = $derived(
    [...data.rows].filter(filterTable).sort(sortTable)
  );

  // aria
  function ariaSort(key) {
    if (sortKey === key) {
      if (sortAsc) {
        return "ascending";
      } else {
        return "descending";
      }
    } else {
      return "none";
    }
  }
</script>

<svelte:head>
  <title>CO₂-Footprint {data.year}</title>
</svelte:head>

<h1 class="mb-3">Daten für {data.year}</h1>

<div class="input-group mb-3">
  <span class="input-group-text" id="lupe">⌕</span>
  <input
    class="form-control"
    type="text"
    placeholder="Tabelle filtern"
    aria-label="Tabelle filtern"
    aria-describedby="lupe"
    bind:value={filter}
  />
</div>

<div class="table-responsive">
  <table class="table table-striped">
    <caption>Fiktive Daten</caption>
    <thead>
      <tr>
        {#each tableHead as col (col.key)}
          <th
            scope="col"
            onclick={() => sortBy(col.key)}
            aria-sort={ariaSort(col.key)}
          >
            {col.label}
            <span class="caret" aria-hidden="true">
              {sortKey === col.key ? (sortAsc ? "↑" : "↓") : ""}
            </span>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class="table-group-divider">
      {#each tableRows as row}
        <tr>
          <td>{row.emission}</td>
          <td>{row.country}</td>
          <td>{row.company}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .caret {
    display: inline-block;
    width: 1rem;
    text-align: center;
  }

  th {
    cursor: pointer;
  }
</style>
