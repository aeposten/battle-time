import characterData from "./data.js";
import { Character } from "./Character.js";


document.getElementById('battle-btn').addEventListener("click", battle)

function battle() {
    render();
}

function render() {
  document.getElementById('magical-toddler').innerHTML =
    helmi.renderCharacterHtml();

  document.getElementById('enemy').innerHTML =
    pizzaBoxer.renderCharacterHtml();
}

const helmi = new Character(characterData.hero);
const pizzaBoxer = new Character(characterData.enemy);

render();
