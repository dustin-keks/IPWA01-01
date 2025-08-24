<script>
  export let data;
</script>

<h1>CO₂-Emissionen aus {data.year}</h1>

<div class="table-responsive">
  <table class="table">
    <caption>Fiktive Daten</caption>
    <thead>
      <tr>
        <th scope="col">Rang</th>
        <th scope="col">CO₂-Emissionsdaten</th>
        <th scope="col">Land</th>
        <th scope="col">Unternehmen</th>
      </tr>
    </thead>
    <tbody>
      {#each data.rows as row, i}
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{row.emission}</td>
          <td>{row.country}</td>
          <td>{row.company}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
