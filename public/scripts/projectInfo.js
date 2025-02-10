const generateOverlayHTML = ({ btnColor, iconColor, linkCode }) =>
  document.body.insertAdjacentHTML(
    "beforeend",
    `<style>
    .cip-wrapper {
      -webkit-text-size-adjust: 100%;
      position: fixed;
      inset: 0;
      background-color: transparent;
      z-index: 9999;
      transition: background-color 0.2s ease-in-out;
      pointer-events: none;
      isolation: isolate;
    }
    .cip-wrapper[data-active="true"] {
      pointer-events: all;
      background-color: rgba(0, 0, 0, 0.15);
    }

    aside.cip-project-info {
    font-size: 17px;
    --cip-btn-color: ${btnColor};
    --cip-icon-color: ${iconColor};
    --cip-gap: clamp(.8em, 1.65vmax, 1.25em);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    position: fixed;
    bottom: 1.3em;
    right: 1.3em;
    display: flex;
    align-items: center;
    gap: var(--cip-gap);
    z-index: 9999;
  }
  aside.cip-project-info .cip-btn-container {
    display: flex;
    gap: var(--cip-gap);
    align-items: center;
  }

  aside.cip-project-info .cip-btn-container.cip-donate-container {
    flex-direction: column;
    position: absolute;
    right: 0;
    bottom: calc(var(--cip-gap) + clamp(2.4em, 8vw, 3.2em));
    z-index: -1;
  }
  aside.cip-project-info .cip-btn-container[aria-hidden="true"] {
    display: none;
  }
  aside.cip-project-info .cip-btn {
    display: grid;
    place-items: center;
    aspect-ratio: 1/1;
    font: inherit;
    cursor: pointer;
    position: relative;
    border: none;
    text-decoration: none;
    margin: 0;
    width: clamp(2.4em, 8vw, 3.2em);
    height: clamp(2.4em, 8vw, 3.2em);
    border-radius: 100vmax;
    border: .15em solid transparent;
    background-color: hsl(var(--cip-btn-color));
    box-shadow:
      .1em .2em .65em hsl(var(--cip-btn-color) / .3),
      0 0 0 -.1em hsl(var(--cip-icon-color)),
      0 0 0 -.2em hsl(var(--cip-btn-color));
    transition:
      box-shadow 300ms cubic-bezier(.5,-.5,.1,1.5),
      border-color 300ms ease-in-out,
      color 300ms ease-in-out;
  }
  aside.cip-project-info .cip-btn:hover{
    border-color: hsl(var(--cip-icon-color));
  }
  aside.cip-project-info .cip-btn:is(:hover,:focus-visible)::after {
    content: attr(aria-label);
    top: -2.5em;
    white-space: nowrap;
    font-size: .6em;
    position: absolute;
    background-color: #fff;
    color: #000;
    padding: .2em .5em;
    border-radius: .5em;
  }

  aside.cip-project-info .cip-btn:focus {
    outline: none;
  }
  aside.cip-project-info .cip-btn:focus-visible {
    opacity: 1;
    box-shadow:
      0 0 0 hsl(var(--cip-btn-color)),
      0 0 0 .1em hsl(var(--cip-icon-color)),
      0 0 0 .35em hsl(var(--cip-btn-color));
  }
  aside.cip-project-info .cip-btn[aria-expanded] {
    order: 1;
  }
  aside.cip-project-info .cip-btn .icon {
    width: clamp(1.4em, 5vw, 1.75em);
    height: clamp(1.4em, 5vw, 1.75em);
    aspect-ratio: 1/1;
    pointer-events: none;
    color: hsl(var(--cip-icon-color));
    stroke: hsl(var(--cip-icon-color));
    fill: none;
  }
</style>
<div class="cip-wrapper" data-active="false"></div>
<aside class="cip-project-info">
  <button id="cip-overlay-btn" class="cip-btn" aria-label="Project Info" aria-controls="cip-btn-container" aria-expanded="false">
    <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </button>
  <div id="cip-donate-container" aria-labelledby="cip-overlay-btn" class="cip-donate-container cip-btn-container" role="group" aria-hidden="true">
    <a href="https://www.buymeacoffee.com/chrispennington" tabindex="-1" class="cip-btn" aria-label="Buy Me a Coffee">
      <svg viewBox="0 0 24 24" width="24" class="icon" aria-hidden="true"><path fill="currentColor" d="m20.216 6.415-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 0 1 3.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 0 1-4.743.295 37.059 37.059 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0 0 11.343.376.483.483 0 0 1 .535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613z"></path></svg>
    </a>
    <a href="https://www.patreon.com/coding_in_public" tabindex="-1" class="cip-btn" aria-label="Patreon">
      <svg viewBox="0 0 24 24" width="24" class="icon" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="icon-tabler"><path d="M3 3h3v18H3z"></path><circle cx="15" cy="9.5" r="6.5"></circle></g></svg>
    </a>
  </div>
  <div id="cip-btn-container" aria-labelledby="cip-overlay-btn" class="cip-btn-container" role="group" aria-hidden="true">
    <a href="/" tabindex="-1" class="cip-btn" aria-label="Go Home">
      <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
    <a href="/projects/" tabindex="-1" class="cip-btn" aria-label="Other Projects">
      <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    </a>
    <a href=${linkCode} tabindex="-1" class="cip-btn" id="cip-btn--code" aria-label="GitHub Code">
      <svg width="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </a>
  </div>
</aside>
`
  );

let cipWrapper;
let cipOverlayBtn;
let cipOverlayContainers;

async function fetchProjectInfo() {
  const l = window.location.pathname.split("/")[2];
  const res = await fetch("/projects.json");
  const data = await res.json();
  const p = Object.values(data).find((project) => project.url === l);
  return {
    btnColor: p.btnColor || "#fff",
    iconColor: p.iconColor || "#000",
    linkCode: p.code,
  };
}

const cipCloseOverlay = () => {
  cipWrapper.setAttribute("data-active", "false");
  cipOverlayBtn.setAttribute("aria-expanded", "false");
  cipOverlayBtn.setAttribute("aria-hidden", "true");
  cipOverlayContainers.forEach((c) => c.setAttribute("aria-hidden", "true"));
};

function toggleOverlay(e) {
  if ((e.target.id = "cip-overlay-btn")) {
    const active = JSON.parse(cipOverlayBtn.getAttribute("aria-expanded"));
    cipWrapper.setAttribute("data-active", !active);
    cipOverlayBtn.setAttribute("aria-expanded", !active);
    cipOverlayContainers.forEach((c) => c.setAttribute("aria-hidden", active));
    cipOverlayContainers.forEach((c) => {
      c.querySelectorAll(".cip-btn").forEach((btn) =>
        btn.setAttribute("tabindex", active ? "-1" : "0")
      );
    });
  }
}

(async function initProjectInfoOverlay() {
  const projectInfo = await fetchProjectInfo();
  generateOverlayHTML(projectInfo);
  cipWrapper = document.querySelector(".cip-wrapper");
  cipOverlayBtn = document.querySelector("#cip-overlay-btn");
  cipOverlayContainers = document.querySelectorAll(".cip-btn-container");
  cipWrapper.addEventListener("click", () => cipCloseOverlay());
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (cipWrapper.getAttribute("data-active") === "true") {
      cipCloseOverlay();
    }
  });
  cipOverlayBtn.addEventListener("click", toggleOverlay);
  document.head.insertAdjacentHTML(
    "beforeend",
    `<!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TW8WDRTN9N"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-TW8WDRTN9N');
  </script>`
  );
})();
