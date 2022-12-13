function rollD6() {
  return Math.floor(Math.random() * 6 + 1);
}

function renderDiceRolls(diceCount) {
  return new Array(diceCount).fill().map((roll) => rollD6());
}

function renderDicePlaceholderHTML(diceCount) {
    return new Array(diceCount).fill(`<div class="dice-heart"></div>`)
}

function renderDiceHTML(diceCount) {
  return renderDiceRolls(diceCount)
    .map(
      (roll) =>
        `<div class="dice-heart"><span class="roll">${roll}</span></div>`
    )
    .join(" ");
}

export { renderDiceRolls, renderDiceHTML, renderDicePlaceholderHTML };
