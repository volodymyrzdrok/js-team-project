export function authMenuMarkup(isLoggedIn) {
  return !isLoggedIn
    ? `<svg width="32px" height="32px">
  <use href="/src/images/svgs.svg#icon-authorization"></use>
</svg>`
    : `<span>LOG OUT</span><div class="userLabel">P</div>`;
}
