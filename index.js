import characterData from "./data.js";
import Character from "./Character.js";
import { renderDicePlaceholderHTML, usePotion } from "./utilities.js";

let enemyArray = getEnemyArray();
let paused = false;

function getEnemyArray() {
  const enemies = Object.keys(characterData).slice(1);

  return enemies;
}

function getNewEnemy() {
  const nextEnemyData = characterData[enemyArray.shift()];

  if (nextEnemyData) {
    return new Character(nextEnemyData);
  } else {
    return {};
  }
}

document.getElementById("battle-btn").addEventListener("click", battle);

function endGame() {
  const endGameMessage =
    helmi.health === 0 && enemy.health === 0
      ? "All characters knocked out!"
      : helmi.health > 0
      ? "Helmi Wins!"
      : `${enemy.name} wins!`;

  const endEmoji = helmi.health > 0 ? helmi.emoji : enemy.emoji;

  setTimeout(() => {
    document.body.innerHTML = `
                <div class="end-game">
                    <h1>Game Over</h2>
                    <h2>${endGameMessage}</h3>
                    <p class="emoji">${endEmoji}</p>
                    <button class="new-game-btn" id="new-game-btn">New Game</button>
                </div>`;
    document.getElementById("new-game-btn").addEventListener("click", () => {
      location.reload();
      return false;
    });
  }, 1500);
}

function battle() {
  if (!paused) {
    helmi.renderDiceHTML();
    enemy.renderDiceHTML();

    helmi.calculateDamageTaken(enemy.currentDiceScore);
    enemy.calculateDamageTaken(helmi.currentDiceScore);

    render();

    if (helmi.knockedOut) {
      endGame();
      paused = true;
    } else if (enemy.knockedOut) {
      paused = true;
      if (enemyArray.length > 0) {
        render();
        setTimeout(() => {
          enemy = getNewEnemy();
          render();

          paused = false;
        }, 1500);
      } else {
        endGame();
      }
    }
  }
}

function render() {
  if (enemy.knockedOut) {
    setTimeout(() => {
      helmi.diceHTML = renderDicePlaceholderHTML(helmi.diceCount);
    }, 1500);
  }

  document.getElementById("magical-helmi").innerHTML =
    helmi.renderCharacterHtml();

  document.getElementById("enemy").innerHTML = enemy.renderCharacterHtml();
}

const helmi = new Character(characterData.hero);
let enemy = getNewEnemy();
render();

document.getElementById("milk").addEventListener("click", usePotion);
// ⭐  🍕
