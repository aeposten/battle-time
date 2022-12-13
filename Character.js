import { renderDiceHTML, renderDicePlaceholderHTML } from "./utilities.js";

export function Character(data) {
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
                    <h3>Damage Dice:</h3>
                    <div class="hearts"> ${renderDicePlaceholderHTML()} </div>
                  </div>
              </div>`;
  };
}
