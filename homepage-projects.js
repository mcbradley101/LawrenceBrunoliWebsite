/* Static HTML is the fallback; the same gallery register drives future updates. */
(() => {
    'use strict';
    const cards = [...document.querySelectorAll('#projects .project[data-project-id]')];
    if (!cards.length) return;
    fetch('project-images/galleries.json')
        .then(response => { if (!response.ok) throw new Error('Gallery register unavailable'); return response.json(); })
        .then(galleries => Promise.all(cards.map(async card => {
            const photo = galleries[card.dataset.projectId]?.images?.[0];
            if (!photo) return;
            const url = new URL(photo.display_path, document.baseURI);
            if (url.origin !== location.origin) return;
            const image = new Image();
            image.src = url.href;
            await image.decode();
            const panel = card.querySelector('.project-image');
            panel.style.backgroundImage = `url(${JSON.stringify(url.href)})`;
            panel.setAttribute('aria-label', photo.alt);
        })))
        .catch(() => { /* Keep working static images if metadata or an image fails. */ });
})();
