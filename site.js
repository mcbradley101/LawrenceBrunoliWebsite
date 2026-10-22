document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');
function closeMenu() {
    menu.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'MENU';
}
button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('menu-open', open);
    button.textContent = open ? 'CLOSE MENU' : 'MENU';
});
menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        button.focus();
    }
});
document.addEventListener('click', event => {
    if (!event.target.closest('.site-navigation')) closeMenu();
});
window.matchMedia('(min-width: 1601px)').addEventListener('change', closeMenu);
