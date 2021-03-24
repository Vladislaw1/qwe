import './styles.css';
import menu from "./menu.json";
import cardCreateFunction from "./templaes/cards.hbs";
import onThemeSwitchToggleFunction from "./scripts/replaceTheme.js";

const menuList = document.querySelector(".js-menu")

const cardHTMLTemplates = cardCreateFunction(menu);
menuList.insertAdjacentHTML("beforeend", cardHTMLTemplates);

