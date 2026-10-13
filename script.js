function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/dona-ana-light.png");
    img.setAttribute("alt", "Foto de perfil da Dona Ana - Modo Claro");
  } else {
    img.setAttribute("src", "./assets/dona-ana.png");
    img.setAttribute("alt", "Foto de perfil da Dona Ana");
  }
}