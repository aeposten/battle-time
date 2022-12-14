import { renderDicePlaceholderHTML, renderDiceRolls } from "./utilities.js";

export function Character(data) {
  Object.assign(this, data);

  this.diceHTML = renderDicePlaceholderHTML(this.diceCount);

  this.renderDiceHTML = () => {
    this.currentDiceScore = renderDiceRolls(this.diceCount);
    console.log(this.currentDiceScore);
    this.diceHTML = this.currentDiceScore
      .map(
        (roll) =>
          `<div class="dice-heart"><span class="roll">${roll}</span></div>`
      )
      .join(" ");
  };

  this.calculateDamageTaken = (attackScoreArray) => {
    const damage = attackScoreArray.reduce((total, current) => total + current);
    
    this.health -= damage;

    if (this.health <= 0) {
        this.knockedOut = true;
        this.health = 0;
    }
  };

  this.renderCharacterHtml = () => {
    const { name, avatar, health, diceHTML } = this;
    return `<div class="character-card">
                  <h2 class="name"> ${name} </h2>
                  <div class="img-container">
                      <div class="avatar"  style="background-image: url(${avatar})"></div>
                      <img class="milk" src="./img/milk.png" />
                  </div>
                  <div class="health">health: <b> ${health} </b></div>
                  <div class="heart-container">
                    <h3>Damage Dice:</h3>
                    <div class="hearts"> ${diceHTML} </div>
                  </div>
              </div>`;
  };
}
