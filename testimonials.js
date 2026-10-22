(() => {
    const dialog = document.querySelector('#testimonial-document-viewer');
    const image = dialog.querySelector('.document-viewer-image');
    const viewport = dialog.querySelector('.document-viewer-scroll');
    const title = dialog.querySelector('#document-viewer-title');
    const close = dialog.querySelector('.document-viewer-close');
    const status = dialog.querySelector('#document-zoom-status');
    let opener;
    let zoom = 100;
    let oldBodyOverflow;
    let oldRootOverflow;
    function setZoom(value) {
        zoom = Math.max(100, Math.min(300, value));
        image.style.width = `${zoom}%`;
        status.value = `${zoom}%`;
        dialog.querySelector('[data-zoom="out"]').disabled = zoom === 100;
        dialog.querySelector('[data-zoom="in"]').disabled = zoom === 300;
    }
    document.querySelectorAll('.testimonial-document-open').forEach(button => {
        button.addEventListener('click', () => {
            opener = button;
            title.textContent = button.dataset.documentTitle;
            image.src = button.dataset.document;
            image.alt = `Full original document: ${button.dataset.documentTitle}`;
            setZoom(100);
            oldBodyOverflow = document.body.style.overflow;
            oldRootOverflow = document.documentElement.style.overflow;
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            dialog.showModal();
            viewport.scrollTo(0, 0);
            close.focus();
        });
    });
    dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const controls = [...dialog.querySelectorAll('button:not(:disabled), [tabindex="0"]')];
        const current = controls.indexOf(document.activeElement);
        const next = event.shiftKey
            ? (current <= 0 ? controls.length - 1 : current - 1)
            : (current + 1) % controls.length;
        event.preventDefault();
        controls[next].focus();
    });
    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        const box = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => {
        document.body.style.overflow = oldBodyOverflow;
        document.documentElement.style.overflow = oldRootOverflow;
        image.removeAttribute('src');
        opener?.focus();
    });
    dialog.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
        setZoom(button.dataset.zoom === 'reset' ? 100 : zoom + (button.dataset.zoom === 'in' ? 25 : -25));
    }));
})();
