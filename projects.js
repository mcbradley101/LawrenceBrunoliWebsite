/* Progressive enhancement: project records and original-photo links work without JS. */
(() => {
    'use strict';
    const projects = [...document.querySelectorAll('.portfolio-project')];
    const filters = document.querySelector('.portfolio-filters');
    const count = document.querySelector('.portfolio-count');
    const more = document.querySelector('.portfolio-more');
    filters?.addEventListener('click', event => {
        const button = event.target.closest('[data-filter]');
        if (!button) return;
        filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        let visible = 0;
        projects.forEach(project => {
            project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
            if (!project.hidden) visible++;
        });
        if (count) count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
        if (more) more.hidden = !more.querySelector('.portfolio-project:not([hidden])');
    });
    document.querySelectorAll('.portfolio-details').forEach(details => {
        details.addEventListener('toggle', () => {
            details.querySelector('.details-label').textContent = details.open ? 'Show Less' : 'View Full Project Details';
            details.querySelector('.details-symbol').textContent = details.open ? '−' : '+';
        });
    });

    const dialog = document.querySelector('.project-lightbox');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    const enlargedImage = dialog.querySelector('.project-lightbox-stage img');
    const title = dialog.querySelector('h2');
    const status = dialog.querySelector('.project-lightbox-status');
    const previous = dialog.querySelector('.project-lightbox-prev');
    const next = dialog.querySelector('.project-lightbox-next');
    const galleries = new Map();
    let activeGallery, activeIndex = 0, opener;
    // Loading metadata never controls whether project images display.
    const ready = fetch('project-images/galleries.json')
        .then(response => { if (!response.ok) throw new Error('Gallery metadata unavailable'); return response.json(); })
        .then(data => { Object.entries(data).forEach(([id, gallery]) => galleries.set(id, gallery)); })
        .catch(() => {});
    function renderViewer() {
        const image = activeGallery.images[activeIndex];
        enlargedImage.src = image.path;
        enlargedImage.alt = image.alt;
        title.textContent = activeGallery.title;
        status.textContent = `${activeIndex + 1} / ${activeGallery.images.length}`;
        previous.disabled = activeGallery.images.length < 2;
        next.disabled = activeGallery.images.length < 2;
    }
    function move(direction) {
        if (!activeGallery) return;
        activeIndex = (activeIndex + direction + activeGallery.images.length) % activeGallery.images.length;
        renderViewer();
    }
    document.querySelectorAll('.project-photo-link').forEach(link => {
        link.addEventListener('click', async event => {
            event.preventDefault();
            await ready;
            activeGallery = galleries.get(link.dataset.gallery) || {
                title: link.closest('article').querySelector('h3').textContent,
                images: [{ path: link.getAttribute('href'), alt: link.querySelector('img').alt }]
            };
            activeIndex = Number(link.dataset.activeIndex || 0);
            opener = link;
            renderViewer();
            dialog.showModal();
            dialog.querySelector('.project-lightbox-close').focus();
        });
    });
    document.querySelectorAll('.project-thumbnails').forEach(thumbnails => {
        thumbnails.addEventListener('click', async event => {
            const button = event.target.closest('[data-photo-index]');
            if (!button) return;
            await ready;
            const link = thumbnails.parentElement.querySelector('.project-photo-link');
            const gallery = galleries.get(link.dataset.gallery);
            if (!gallery) return;
            const index = Number(button.dataset.photoIndex), image = gallery.images[index];
            link.href = image.path;
            link.dataset.activeIndex = String(index);
            link.querySelector('.project-photo').src = image.display_path;
            link.querySelector('.project-photo').alt = image.alt;
            link.querySelector('.project-photo-hint').textContent = `${index + 1} / ${gallery.images.length} · Enlarge photograph ↗`;
            thumbnails.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        });
    });
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    dialog.querySelector('.project-lightbox-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) {
            const bounds = dialog.getBoundingClientRect();
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
        }
    });
    dialog.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
            const controls = [...dialog.querySelectorAll('button:not(:disabled)')];
            const first = controls[0], last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault(); last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault(); first.focus();
            }
        }
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
        }
    });
    dialog.addEventListener('close', () => { enlargedImage.removeAttribute('src'); opener?.focus({ preventScroll: true }); });
})();
