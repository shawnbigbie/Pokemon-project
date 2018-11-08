import { pokemon } from './pokemon.js'

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
    card.onclick = "flip()"
    let fig = document.createElement('figure')
    fig.className = "front"
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    let backDiv = document.createElement('div')
    let backfig = document.createElement('figure')
    backfig.className = "back"

    backDiv.textContent = poke.jname

    cap.textContent = poke.ename
    img.src = `img/${poke.id}${poke.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    card.appendChild(fig)
    card.appendChild(backfig)
    backfig.appendChild(backDiv)
    pokeContainer.appendChild(card)

    function flip() {
        $('.card').toggleClass('flipped');
    }
})