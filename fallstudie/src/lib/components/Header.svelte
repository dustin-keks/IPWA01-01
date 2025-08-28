<script>
  import logo from "$lib/assets/logo.png";
  import flagDE from "$lib/assets/Flag_of_Germany.svg";
  import flagAR from "$lib/assets/Flag_of_Saudi_Arabia.svg";

  import { onMount } from "svelte";

  onMount(() => {
    import("bootstrap/js/dist/collapse.js");
    import("bootstrap/js/dist/offcanvas.js");
    import("bootstrap/js/dist/util/backdrop.js");
  });

  function setLangDir(lang, dir) {
    document.documentElement.lang = lang;
    document.querySelector("main").dir = dir;
  }
</script>

<header class="bg-body-tertiary">
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg">
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

          <!-- offcanvas toggler -->
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

          <!-- offcanvas -->
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <!-- flags -->
              <div
                class="d-flex justify-content-end align-items-center flex-grow-0 order-lg-last"
              >
                <div class="row">
                  <div class="col-auto">
                    <button
                      onclick={() => setLangDir("de", "ltr")}
                      type="button"
                      class="btn"
                    >
                      <img
                        src={flagDE}
                        alt="Flagge von Deutschland"
                        width="30"
                        height="auto"
                      />
                    </button>
                  </div>
                  <div class="col-auto">
                    <button
                      onclick={() => setLangDir("ar", "rtl")}
                      type="button"
                      class="btn"
                    >
                      <img
                        src={flagAR}
                        alt="Flagge von Saudi Arabien"
                        width="30"
                        height="auto"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <!-- main menu -->
              <ul class="navbar-nav justify-content-center flex-grow-1">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
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
  </div>
</header>
