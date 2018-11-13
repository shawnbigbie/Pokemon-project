import { pokemon } from './pokemon.js'

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
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
    let base = document.createElement('ul')
    base.className = "pokebase"
    let baseAtk = document.createElement('li')
    let baseDef = document.createElement('li')
    let baseHel = document.createElement('li')
    let basespeedAtk = document.createElement('li')
    let basespeedDef = document.createElement('li')
    let baseSpeed = document.createElement('li')

    
    baseAtk.textContent = `Base Attack is (${poke.base["Attack"]})`
    baseDef.textContent = `Base Defense is (${poke.base["Defense"]})`
    baseHel.textContent = `Base Health is (${poke.base["HP"]})`
    basespeedAtk.textContent = `Base Attack Speed is (${poke.base["Sp.Atk"]})`
    basespeedDef.textContent = `Base Defense Speed is (${poke.base["Sp.Def"]})`
    baseSpeed.textContent = `Base Speed is (${poke.base["Speed"]})`
    cap.textContent = poke.ename
    img.src = `img/${poke.id}${poke.ename}.png`
    backimg.src = `img/back.png`
    
    fig.appendChild(img)
    fig.appendChild(cap)
    backcard.appendChild(backimg)
    backcard.appendChild(base)
    base.appendChild(baseAtk)
    base.appendChild(baseDef)
    base.appendChild(baseHel)
    base.appendChild(basespeedAtk)
    base.appendChild(basespeedDef)
    base.appendChild(baseSpeed)
    card.appendChild(fig)
    card.appendChild(backcard)
    pokeContainer.appendChild(card)


    card.addEventListener( 'click', function() {
        card.classList.toggle('flipped');
      });
    
})