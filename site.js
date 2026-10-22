document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');
const group = document.querySelector('.nav-testimonials');
const submenuButton = group.querySelector('.testimonials-submenu-toggle');
const submenu = group.querySelector('.testimonials-submenu');
const desktop = window.matchMedia('(min-width: 1241px)');
const mouseHover = window.matchMedia('(hover: hover)');
function setSubmenu(open) {
    submenu.hidden = !open;
    submenuButton.setAttribute('aria-expanded', String(open));
    submenuButton.setAttribute('aria-label', `${open ? 'Hide' : 'Show'} Recognition submenu`);
}
function closeMenu() {
    menu.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'MENU';
    setSubmenu(false);
}
button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE MENU' : 'MENU';
    if (!open) setSubmenu(false);
});
submenuButton.addEventListener('click', () => setSubmenu(submenu.hidden));
group.addEventListener('pointerenter', () => {
    if (desktop.matches && mouseHover.matches) setSubmenu(true);
});
group.addEventListener('pointerleave', () => {
    if (desktop.matches && !group.contains(document.activeElement)) setSubmenu(false);
});
group.addEventListener('focusin', event => {
    if (desktop.matches && event.target !== submenuButton) setSubmenu(true);
});
group.addEventListener('focusout', event => {
    if (!group.contains(event.relatedTarget)) setSubmenu(false);
});
group.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' && event.target !== submenu.querySelector('a')) {
        event.preventDefault();
        setSubmenu(true);
        submenu.querySelector('a').focus();
    }
});
menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (!submenu.hidden) {
        setSubmenu(false);
        submenuButton.focus();
    } else if (button.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        button.focus();
    }
});
document.addEventListener('click', event => {
    if (!event.target.closest('.site-navigation')) closeMenu();
});
desktop.addEventListener('change', closeMenu);
