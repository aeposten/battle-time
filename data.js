const helmi = {
    elementId: "magical-toddler",
    name: "Helmi",
    avatar: "img/helmi.png",
    health: 60,
    diceRoll: 3,
}

const enemy = {
    elementId: "enemy",
    name: "Pizza Boxer",
    avatar: "img/pizza-boxer.png",
    health: 10,
    diceRoll: 4,
}


function renderCharacter(data) {
    document.getElementById(data.elementId).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${data.name} </h4>
            <img class="avatar" src="${data.avatar}" />
            <div class="health">health: <b> ${data.health} </b></div>
            <div class="dice-container">
                <div class="dice"> ${data.diceRoll} </div>
            </div>
        </div>`
}

renderCharacter(hero)
renderCharacter(monster)
