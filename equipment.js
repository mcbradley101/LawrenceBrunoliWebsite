// Only local uploads explicitly enabled in equipment.html are requested.
// Display authorization does not establish copyright or reuse clearance.
// Loading happens off-page so a missing or corrupt file never renders a broken image.
(() => {
    const slots = document.querySelectorAll('.equipment-photo[data-image-src]');

    async function loadPhoto(slot) {
        if (slot.dataset.photoState) return;
        const displayEnabled = slot.dataset.imageRights === 'verified' || slot.dataset.imageDisplay === 'requested';
        if (!displayEnabled || slot.dataset.photoHold === 'true') {
            slot.dataset.photoState = 'held';
            return;
        }
        slot.dataset.photoState = 'loading';

        const name = slot.closest('.equipment-card').querySelector('h3').textContent.trim();
        const image = new Image();
        image.className = 'equipment-photo-image';
        image.alt = slot.dataset.imageAlt || `${name} — equipment photograph`;
        image.width = 1200;
        image.height = 900;
        image.decoding = 'async';

        try {
            await new Promise((resolve, reject) => {
                image.onload = resolve;
                image.onerror = reject;
                image.src = slot.dataset.imageSrc;
            });
            if (typeof image.decode === 'function') await image.decode();
            if (!image.naturalWidth || !image.naturalHeight) throw new Error('Empty image');

            const link = document.createElement('a');
            link.className = 'equipment-photo-link';
            link.href = slot.dataset.imageSrc;
            link.target = '_blank';
            link.rel = 'noopener';
            link.setAttribute('aria-label', `View larger photograph of ${name} (opens in a new tab)`);
            link.append(image);
            slot.replaceChildren(link);
            slot.dataset.photoState = 'loaded';
            const data = slot.dataset;
            if (data.imageCaption || data.imageCreditAuthor) {
                const credit = document.createElement('div');
                credit.className = 'equipment-photo-credit';
                if (data.imageCaption) {
                    const caption = document.createElement('p');
                    caption.textContent = data.imageCaption;
                    credit.append(caption);
                }
                if (data.imageCreditAuthor) {
                                        const attribution = document.createElement('p');
                    attribution.append(`Photo: ${data.imageCreditAuthor}`);
                    if (data.imageSourceUrl || data.imageLicense) attribution.append(' · ');
                    function addCreditLink(label, url) {
                        const anchor = document.createElement('a');
                        anchor.textContent = label;
                        anchor.href = url;
                        anchor.target = '_blank';
                        anchor.rel = 'noopener';
                        attribution.append(anchor);
                    }
                    if (data.imageSourceUrl) {
                        addCreditLink('Source', data.imageSourceUrl);
                        attribution.append(' · ');
                    }
                    if (data.imageLicenseUrl) addCreditLink(data.imageLicense, data.imageLicenseUrl);
                    else if (data.imageLicense) attribution.append(data.imageLicense);
                    if (data.imageModifications) attribution.append(` · Changes: ${data.imageModifications}`);
                    credit.append(attribution);
                }
                slot.after(credit);
            }
        } catch {
            slot.dataset.photoState = 'unavailable';
        }
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                observer.unobserve(entry.target);
                loadPhoto(entry.target);
            }
        }, { rootMargin: '350px' });
        slots.forEach(slot => observer.observe(slot));
    } else {
        slots.forEach(loadPhoto);
    }
})();
