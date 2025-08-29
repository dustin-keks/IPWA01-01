<script>
  import { page } from "$app/state";

  const year = new Date().getFullYear();

  const navItems = [
    { label: "Impressum", href: "/imprint" },
    { label: "Datenschutz", href: "/data-protection" },
    { label: "AGB", href: "/terms-and-conditions" },
  ];

  function isActive(href) {
    return page.url.pathname === href;
  }
</script>

<footer class="bg-body-secondary">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-auto">
        <div class="py-2 pe-3 text-center">
          &copy; {year} CO₂-Footprint Tracker
        </div>
      </div>
      <div class="col">
        <ul class="nav justify-content-center justify-content-sm-end">
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
</footer>
