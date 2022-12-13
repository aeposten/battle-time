import { renderDiceHTML } from "./utilities.js";

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
                      <div class="hearts"> ${renderDiceHTML(diceCount)} </div>
                  </div>
              </div>`;
    };
  }
  