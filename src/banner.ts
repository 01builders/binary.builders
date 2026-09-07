import { mountField } from "./field";
import "./styles.css";
import "./banner.css";

const hero = document.querySelector("#hero");
if (hero instanceof HTMLElement) mountField(hero);
