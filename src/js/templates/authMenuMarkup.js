export const loginButtonMarkup = () => {
  return `<button class="signup__btn signup__btn--desktop js-signUpBtn" type="button">
            <svg width="32px" height="32px">
              <use href="/svgs.0b5c1630.svg#icon-authorization"></use>
            </svg>
          </button>`;
};

export const userMenuMarkup = label => {
  return `<div class="user-label">${label}</div>
          <button class="signOut__btn js-signOutBtn" type="button">
            Log Out
          </button>`;
};
