'use strict'

const imagens = [
    {id: '1', url:'./img/angular.png'},
    {id: '2', url:'./img/react.png'},
    {id: '3', url:'./img/svelte.jpg'},
    {id: '4', url:'./img/vue.jpg'},
]

const criarAnterior= () => {
    // Cria o span anterior
    const anteriorButton = document.createElement('span')
    anteriorButton.classList.add('slider-button')
    anteriorButton.id = 'anterior'
    anteriorButton.innerHTML = '&LeftAngleBracket;'

    return anteriorButton
}

const criarSliderItems = () => {
    // Cria a div das imagens
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-item-container')

    const slides = imagens.map( item => `
            <div class="slider-item">
                <img src="${item.url}">
            </div>`)

    sliderContainer.innerHTML = slides.join("")

    return sliderContainer
}

const criarProximo = () => {
    // Cria o span proximo
    const proximoButton = document.createElement('span')
    proximoButton.classList.add('slider-button')
    proximoButton.id = 'proximo'
    proximoButton.innerHTML = '&RightAngleBracket;'

    return proximoButton
}

const criarSlider = () => {

    const slider = document.querySelector('.slider')
    
    slider.appendChild(criarAnterior())
    slider.appendChild(criarSliderItems())
    slider.appendChild(criarProximo())
}


criarSlider(imagens)

const sliderItemContainer = document.querySelector('.slider-item-container')
let sliderItems = document.querySelectorAll('.slider-item') 

const proximoItem = () => {
    const primeiroItem = sliderItems[0]
    sliderItemContainer.appendChild(primeiroItem)
    sliderItems = document.querySelectorAll('.slider-item')
}

const anterior = () => {
    const ultimoItem = sliderItems[sliderItems.length - 1]
    sliderItemContainer.prepend(ultimoItem)
    sliderItems = document.querySelectorAll('.slider-item')
}






document.getElementById('proximo').addEventListener('click', proximoItem)
document.getElementById('anterior').addEventListener('click', anterior)

// setInterval(() => {
//     proximoItem()
// }, 3000)