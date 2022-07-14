const iframe = document.querySelector("iframe");
iframe.height = window.innerHeight / 2;
iframe.width = window.innerWidth / 2;

window.addEventListener("resize", () => {
  iframe.height = window.innerHeight / 2;
  iframe.width = window.innerWidth / 2;
});
