const hero = {
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
  return Math.floor(Math.random() * 6 + 1);
}

function renderDiceRolls(diceCount) {
  return new Array(diceCount).fill().map((roll) => rollD6());
}
function renderDiceHTML(diceCount) {
  return renderDiceRolls(diceCount)
    .map(
      (roll) =>
        `<div class="dice-heart"><span class="roll">${roll}</span></div>`
    )
    .join(" ");
}

function Character(data) {
  Object.assign(this, data);

  this.renderCharacterHtml = () => {
    const { elementId, name, avatar, health, diceCount } = data;

    document.getElementById(elementId).innerHTML = `<div class="character-card">
                    <h2 class="name"> ${name} </h2>
                    <div class="img-container">
                      <img class="avatar"  src="${avatar}" />
                      <img class="milk" src="./img/milk.png" />
                    </div>
                    <div class="health">health: <b> ${health} </b></div>
                    <div class="heart-container">
                        <div class="hearts"> ${renderDiceHTML(diceCount)} </div>
                    </div>
                </div>`;
  };
}

const helmi = new Character(hero);
helmi.renderCharacterHtml();

const pizzaBoxer = new Character(enemy);
pizzaBoxer.renderCharacterHtml();
