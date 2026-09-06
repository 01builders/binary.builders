import { mountField } from "./field";
import "./styles.css";

const KEY = "theme";

function isDark(): boolean {
  return document.documentElement.classList.contains("dark");
}

function apply(dark: boolean): void {
  document.documentElement.classList.toggle("dark", dark);
  const btn = document.querySelector("#theme");
  if (btn instanceof HTMLButtonElement) {
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.textContent = dark ? "Light" : "Dark";
  }
  const meta = document.querySelector("#theme-color");
  if (meta instanceof HTMLMetaElement) {
    meta.content = dark ? "#0b0d11" : "#d5dde6";
  }
  try {
    localStorage.setItem(KEY, dark ? "dark" : "light");
  } catch {
    /* ignore */
  }
}

apply(isDark());

const themeBtn = document.querySelector("#theme");
if (themeBtn instanceof HTMLButtonElement) {
  themeBtn.addEventListener("click", () => apply(!isDark()));
}

const hero = document.querySelector("#hero");
if (hero instanceof HTMLElement) mountField(hero);
