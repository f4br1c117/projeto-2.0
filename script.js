function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

// pegar a tag img
  const img = document.querySelector("img")
 
// substituir a imagem

if(html.classList.contains('light')) {
// se tiver no light mode, adicionar a imagem light 
img.setAttribute('src', './avatar-light.png')
} else {
// se tiver sem light mode, manter a imagem normal 
  img.setAttribute('src', './avatar.png')

  }
  
}