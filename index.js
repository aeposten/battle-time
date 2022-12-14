import characterData from "./data.js";
import { Character } from "./Character.js";
// import { endGame } from "./utilities.js";

document.getElementById("battle-btn").addEventListener("click", battle);

function endGame() {
  const endGameMessage =
    helmi.health === 0 && pizzaBoxer.health === 0
      ? "All characters knocked out!"
      : helmi.health > 0
      ? "Helmi Wins!"
      : "Pizza Boxer Wins!";

  const endEmoji = helmi.health > 0 ? helmi.emoji : pizzaBoxer.emoji;

  document.body.innerHTML = `
                <div class="end-game">
                    <h1>Game Over</h2>
                    <h2>${endGameMessage}</h3>
                    <p class="emoji">${endEmoji}</p>
                </div>`;
}

function battle() {
  helmi.renderDiceHTML();
  pizzaBoxer.renderDiceHTML();
  helmi.calculateDamageTaken(pizzaBoxer.currentDiceScore);
  pizzaBoxer.calculateDamageTaken(helmi.currentDiceScore);
  render();

  if (helmi.knockedOut || pizzaBoxer.knockedOut) {
    endGame();
  }
}

function render() {
  document.getElementById("magical-toddler").innerHTML =
    helmi.renderCharacterHtml();

  document.getElementById("enemy").innerHTML = pizzaBoxer.renderCharacterHtml();
}

const helmi = new Character(characterData.hero);
const pizzaBoxer = new Character(characterData.enemy);

render();

// ⭐  🍕
