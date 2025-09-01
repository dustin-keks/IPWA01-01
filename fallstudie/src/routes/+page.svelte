<script>
  import imgCard1 from "$lib/assets/card_1.png";
  import imgCard2 from "$lib/assets/card_2.png";
  import imgCard3 from "$lib/assets/card_3.png";
  import imgCard4 from "$lib/assets/card_4.png";

  const cards = [
    {
      img: imgCard1,
      title: "100 Firmen produzieren 80% aller CO₂ Emissionen",
      text: "Ein Großteil der weltweiten Emissionen stammt von nur wenigen Konzernen. Doch Transparenz und Druck der Gesellschaft können Veränderungen bewirken.",
      link: "/emissions-2025",
      button: "Zu den Daten aus 2025",
    },
    {
      img: imgCard2,
      title: "Nimm Kontakt mit uns auf",
      text: "Du hast Fragen, Ideen oder willst dich einbringen? Wir freuen uns auf deine Nachricht.",
      link: "/contact",
      button: "Schreib uns jetzt",
    },
    {
      img: imgCard3,
      title: "Das haben wir uns zur Aufgabe gemacht",
      text: "Wir wollen Bewusstsein schaffen und Lösungen fördern, damit Nachhaltigkeit für alle zugänglich wird.",
      link: "/about-us",
      button: "Erfahre mehr über uns",
    },
    {
      img: imgCard4,
      title: "So kannst du dabei helfen",
      text: "Jeder Beitrag zählt: weniger verschwenden, bewusst konsumieren und Projekte unterstützen, die echten Wandel vorantreiben. Gemeinsam schaffen wir mehr.",
      link: "/donate",
      button: "Jetzt spenden",
    },
  ];
</script>

<svelte:head>
  <title>CO₂-Footprint Tracker</title>
</svelte:head>

<h1>Was ist der CO₂-Fußabdruck?</h1>
<p>
  Der CO₂-Fußabdruck zeigt, wie stark unser tägliches Handeln das Klima
  beeinflusst. Von Energieverbrauch bis Konsum, jede Entscheidung hinterlässt
  Spuren.
</p>

<div class="row">
  {#each cards as card}
    <div class="col-12 col-sm-6 col-xl-3 mb-3">
      <div class="card">
        <img src={card.img} class="card-img-top" alt={card.title} />
        <div class="card-body">
          <h2 class="card-title h5">{card.title}</h2>
          <p class="card-text">{card.text}</p>
          <a href={card.link} class="btn btn-primary">{card.button}</a>
        </div>
      </div>
    </div>
  {/each}
</div>

<h3>Wir haben fast unser gesamtes CO₂-Budget verbraucht!</h3>
<p>
  Um die Erderwärmung auf 1,5°C zu begrenzen, darf die Menschheit nur noch ein
  begrenztes CO₂-Budget ausstoßen. Schon jetzt sind <strong>90%</strong> davon aufgebraucht.
</p>

<div
  class="progress mb-3"
  role="progressbar"
  aria-label="Verbrauchtes CO₂-Budget"
  aria-valuenow="90"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div class="progress-bar text-bg-danger">90%</div>
</div>

<h3>Die Zeit wird knapp, fang an zu handeln!</h3>
<p>
  Der Klimawandel wartet nicht. Je früher wir handeln, desto größer ist unsere
  Chance, eine lebenswerte Zukunft zu sichern.
</p>

<style>
  .progress-bar {
    width: 90%;
  }
</style>
