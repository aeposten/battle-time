const helmi = {
  elementId: "magical-toddler",
  name: "Helmi",
  avatar: "img/magical-helmi.png",
  health: 60,
  diceCount: 3,
};

const enemy = {
  elementId: "enemy",
  name: "Pizza Boxer",
  avatar: "img/pizza-boxer.png",
  health: 10,
  diceCount: 1,
};


function rollD6() {
  const d6 = Math.floor(Math.random() * 6 + 1);

  return d6;
}


function renderCharacter(data) {
const { elementId, name, avatar, health, diceCount } = data;

  function renderDiceHTML(diceCount) {
    let diceHTML = "";

    for (let i = 0; i < diceCount; i++) {
      diceHTML += `<br><div class="dice-heart"><span class="roll">${rollD6()}</span></div><br>`;
    }

    return diceHTML
  }

  document.getElementById(elementId).innerHTML = `<div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar"  width="200" src="${avatar}" />
              <div class="health">health: <b> ${health} </b></div>
              <div class="dice-container">
                  <div class="dice"> ${renderDiceHTML(diceCount)} </div>
              </div>
          </div>`;
}

renderCharacter(helmi);
renderCharacter(enemy);
