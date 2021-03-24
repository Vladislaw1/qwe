const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

themeSwitchToggle.addEventListener('change', onThemeSwitchToggleFunction);

const dark = localStorage.getItem('theme');
(dark === Theme.DARK) ? (
  body.classList.toggle(Theme.DARK),
  themeSwitchToggle.checked = true
) : (
  body.classList.toggle(Theme.LIGHT)
);

function onThemeSwitchToggleFunction(e) {
  let dark;
  (e.target.checked) ? (
    localStorage.setItem('theme', Theme.DARK),
    dark = localStorage.getItem('theme'),
    body.classList.add(dark),
    body.classList.remove(Theme.LIGHT)
  ) : (
    localStorage.removeItem('theme'),
    body.classList.add(Theme.LIGHT),
    body.classList.remove(Theme.DARK)
  );
}







