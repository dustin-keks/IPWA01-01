<script>
  // load json files through +page.js
  const { data } = $props();

  // create $state rune
  let sortedRows = $state([...data.rows]);

  // filter table
  let asc = true;

  function sortByEmission() {
    sortedRows = [...sortedRows].sort((a, b) => {
      const result = a.emission - b.emission;
      return asc ? result : -result;
    });
    asc = !asc;
  }

  function sortByCountry() {
    sortedRows = [...sortedRows].sort((a, b) => {
      const result = a.country
        .toLowerCase()
        .localeCompare(b.country.toLowerCase());
      return asc ? result : -result;
    });
    asc = !asc;
  }

  function sortByCompany() {
    sortedRows = [...sortedRows].sort((a, b) => {
      const result = a.company
        .toLowerCase()
        .localeCompare(b.company.toLowerCase());
      return asc ? result : -result;
    });
    asc = !asc;
  }
</script>

<h2>Daten für {data.year}</h2>

<div class="table-responsive">
  <table class="table">
    <caption>Fiktive Daten</caption>
    <thead>
      <tr>
        <th scope="col" onclick={sortByEmission}>CO₂-Emissionsdaten</th>
        <th scope="col" onclick={sortByCountry}>Land</th>
        <th scope="col" onclick={sortByCompany}>Unternehmen</th>
      </tr>
    </thead>
    <tbody>
      {#each sortedRows as row}
        <tr>
          <td>{row.emission}</td>
          <td>{row.country}</td>
          <td>{row.company}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
