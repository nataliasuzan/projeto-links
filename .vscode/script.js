function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag image
    const img = document.querySelector('#profile img')
    
    // substituir a imagem
    if(html.classList.contains('light')) {
    //se tiver lighmode adc a imagem light     
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        // se tiver sem lighmode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
    }

      if(html.classList.contains('light')) {   
            img.setAttribute('alt', 'Foto de Natalia Suzan usando roupa preta, com fundo preto e branco.')
        } else {
            img.setAttribute('alt', 'Foto de Natalia Suzan usando roupa preta e vermelha, com fundo amarelo.')
        }

}

