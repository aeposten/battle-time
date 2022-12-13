import characterData from "./data.js";
import { Character } from "./Character.js";

function render() {
  document.getElementById(helmi.elementId).innerHTML =
    helmi.renderCharacterHtml();

  document.getElementById(pizzaBoxer.elementId).innerHTML =
    pizzaBoxer.renderCharacterHtml();
}

const helmi = new Character(characterData.hero);
const pizzaBoxer = new Character(characterData.enemy);

render();
