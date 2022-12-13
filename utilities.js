function rollD6() {
  return Math.floor(Math.random() * 6 + 1);
}

function renderDiceRolls(diceCount) {
  return new Array(diceCount).fill().map((roll) => rollD6());
}

export { renderDiceRolls };
