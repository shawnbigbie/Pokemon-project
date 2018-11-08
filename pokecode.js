import { pokemon } from './pokemon.js'

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
    card.onclick = "flip()"
    let fig = document.createElement('div')
    fig.className = "front"
    let img = document.createElement('img')
    img.className = "pokeimg"
    let backimg = document.createElement('img')
    backimg.className = "backimg"
    let backcard = document.createElement('div')
    backcard.className = "back"
    let cap = document.createElement('h2')
    cap.className = "pokename"
    
    cap.textContent = poke.ename
    img.src = `img/${poke.id}${poke.ename}.png`
    backimg.src = `img/back.png`
    
    fig.appendChild(img)
    fig.appendChild(cap)
    backcard.appendChild(backimg)
    card.appendChild(fig)
    card.appendChild(backcard)
    pokeContainer.appendChild(card)

    function flip() {
        $('.card').toggleClass('flipped');
    }
})