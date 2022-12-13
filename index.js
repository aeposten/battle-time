import characterData from "./data.js";
import { renderDiceRolls } from "./utilities.js";

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
    const { name, avatar, health, diceCount } = data;

    return `<div class="character-card">
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

function render() {
  document.getElementById(helmi.elementId).innerHTML =
    helmi.renderCharacterHtml();

  document.getElementById(pizzaBoxer.elementId).innerHTML =
    pizzaBoxer.renderCharacterHtml();
}

const helmi = new Character(characterData.hero);
const pizzaBoxer = new Character(characterData.enemy);

render();
