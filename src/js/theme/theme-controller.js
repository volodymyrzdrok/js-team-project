import { nth } from 'lodash';
import { refs } from '../refs/refs';
import { THEME_DARK, THEME_SWITCHER } from '../utils/constans';

const onDarkTheme = localStorage.getItem(THEME_SWITCHER);

export function themeOn() {
  if (onDarkTheme) {
    refs.bodyRef.classList.add(THEME_DARK);
    refs.checkboxInput[0].checked = true;
    refs.checkboxInput[1].checked = true;
  }
}

export function themeController(e) {
  const checkedSwitcher = e.target.checked;

  if (checkedSwitcher) {
    localStorage.setItem(THEME_SWITCHER, JSON.stringify(THEME_DARK));
    refs.bodyRef.classList.add(THEME_DARK);
  } else {
    localStorage.removeItem(THEME_SWITCHER);
    refs.bodyRef.classList.remove(THEME_DARK);
  }
}
