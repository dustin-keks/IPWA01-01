<script>
  import logo from "$lib/assets/logo.png";
  import flagDE from "$lib/assets/Flag_of_Germany.svg";
  import flagAR from "$lib/assets/Flag_of_Saudi_Arabia.svg";

  import { onMount } from "svelte";
  import { page } from "$app/state";
  import { afterNavigate } from "$app/navigation";

  onMount(() => {
    import("bootstrap/js/dist/collapse.js");
    import("bootstrap/js/dist/offcanvas.js");
    import("bootstrap/js/dist/util/backdrop.js");
  });

  // close offcanvas
  afterNavigate(() => {
    const offcanvas = document.querySelector("#offcanvasNavbar");

    if (offcanvas.classList.contains("show")) {
      offcanvas.querySelector(".btn-close").click();
    }
  });

  // change language and direction in <main>
  function setLangDir(lang, dir) {
    document.documentElement.lang = lang;
    document.querySelector("main").dir = dir;
  }

  // languages
  const languages = [
    { code: "de", dir: "ltr", img: flagDE, alt: "Flagge von Deutschland" },
    { code: "ar", dir: "rtl", img: flagAR, alt: "Flagge von Saudi-Arabien" },
  ];

  // navigation items
  const navItems = [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/about-us" },
    { label: "Kontakt", href: "/contact" },
    { label: "Spenden", href: "/donate" },
  ];

  // active navigation items
  function isActive(href) {
    return page.url.pathname === href;
  }
</script>

<header class="bg-body-tertiary mb-3">
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <!-- logo -->
          <a class="navbar-brand" href="/">
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
                  {#each languages as lang (lang.code)}
                    <div class="col-auto">
                      <button
                        type="button"
                        class="btn"
                        onclick={() => setLangDir(lang.code, lang.dir)}
                        aria-label={"Sprache " +
                          lang.code.toUpperCase() +
                          " wählen"}
                      >
                        <img src={lang.img} alt={lang.alt} width="30" />
                      </button>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- main menu -->
              <ul class="navbar-nav justify-content-center flex-grow-1">
                {#each navItems as item (item.href)}
                  <li class="nav-item">
                    <a
                      class="nav-link {isActive(item.href) ? 'active' : ''}"
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : "false"}
                    >
                      {item.label}
                    </a>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>
