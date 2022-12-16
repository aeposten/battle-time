function getHealthPercent(maxHealth, currentHealth) {
  return (currentHealth * 100) / maxHealth;
}

function rollD6() {
  return Math.floor(Math.random() * 6 + 1);
}

function renderDiceRolls(diceCount) {
  return new Array(diceCount).fill(0).map((roll) => rollD6());
}

function renderDicePlaceholderHTML(diceCount) {
  return new Array(diceCount).fill(`<div class="dice-heart"></div>`).join("");
}

function usePotion() {
  console.log("click")
}

export { getHealthPercent, renderDiceRolls, renderDicePlaceholderHTML, usePotion };
