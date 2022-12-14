import {
  getHealthPercent,
  renderDicePlaceholderHTML,
  renderDiceRolls,
} from "./utilities.js";

class Character {
constructor(data){
  Object.assign(this, data);

  this.maxHealth = this.health;
  this.diceHTML = renderDicePlaceholderHTML(this.diceCount);}

  renderHealthBarHTML = () => {
    const percent = getHealthPercent(this.maxHealth, this.health);

    return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                style="width: ${percent}%;">
            </div>
        </div>`;  
  };

 

  renderDiceHTML = () => {
    this.currentDiceScore = renderDiceRolls(this.diceCount);

    this.diceHTML = this.currentDiceScore
      .map(
        (roll) =>
          `<div class="dice-heart"><span class="roll">${roll}</span></div>`
      )
      .join(" ");
  };

  calculateDamageTaken = (attackScoreArray) => {
    const damage = attackScoreArray.reduce((total, current) => total + current);

    this.health -= damage;

    if (this.health <= 0) {
      this.knockedOut = true;
      this.health = 0;
    }
  };

  renderCharacterHtml = () => {
    const { name, avatar, health, diceHTML } = this;

    const healthBar = this.renderHealthBarHTML();

    return `<div class="character-card">
                  <h2 class="name"> ${name} </h2>
                  <div class="img-container">
                      <div class="avatar"  style="background-image: url(${avatar})"></div>
                      <img class="milk" src="./img/milk.png" />
                  </div>
                  ${healthBar}
                  <div class="health">health: <b> ${health} </b></div>
                  <div class="heart-container">
                    <h3>Damage Dice:</h3>
                    <div class="hearts"> ${diceHTML} </div>
                  </div>
              </div>`;
  };
}

export default Character;
