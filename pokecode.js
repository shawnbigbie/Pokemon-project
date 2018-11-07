import { pokemon } from './pokemon.js'

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke => {
    let card = document.createElement('div')

    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    let backDiv = document.createElement('div')

    backDiv.textContent = poke.jname

    cap.textContent = poke.ename
    img.src = `img/${poke.id}${poke.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    card.appendChild(fig)
    card.appendChild(backDiv)
    pokeContainer.appendChild(card)

    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
})