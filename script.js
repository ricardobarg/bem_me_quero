function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a img light
    img.setAttribute("src", "./assets/BMQ-escuro.png")
  } else {
    //se tiver sem light mode, image padrão
    img.setAttribute("src", "./assets/BMQ-claro.png")
  }
}
