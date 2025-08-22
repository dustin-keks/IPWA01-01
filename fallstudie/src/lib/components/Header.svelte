<script>
  import logo from "$lib/assets/logo.png";

  import { onMount } from "svelte";

  onMount(() => {
    import("bootstrap/js/dist/collapse.js");
    import("bootstrap/js/dist/offcanvas.js");
    import("bootstrap/js/dist/util/backdrop.js");
  });
</script>

<header>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <!-- logo -->
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo CO₂-Footprint Tracker"
            width="100"
            height="100"
          />
        </a>

        <!-- toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- menu -->
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>
