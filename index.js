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
      diceHTML += `<br><div class="dice-heart"><span class="roll">${rollD6()}</span></div>`;
    }

    return diceHTML;
  }

  document.getElementById(elementId).innerHTML = `<div class="character-card">
              <h4 class="name"> ${name} </h4>
              <div class="img-container">
                <img class="avatar"  width="200" src="${avatar}" />
                <img class="milk" src="./img/milk.png" />
              </div>
              <div class="health">health: <b> ${health} </b></div>
              <div class="heart-container">
                  <div class="hearts"> ${renderDiceHTML(diceCount)} </div>
              </div>
          </div>`;
}

renderCharacter(helmi);
renderCharacter(enemy);
