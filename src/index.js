import { app } from 'hyperapp';
import ImageCompare from 'image-compare-viewer';
import { LuminousGallery } from 'luminous-lightbox';
import Macy from 'macy';

import App from './App';

app({
    init: {},
    view: App,
    node: document.getElementById('app'),
});

function waitForElm(selector) {
    return new Promise(resolve => {
        const $el = document.querySelector(selector);
        if ($el) {
            return resolve($el);
        }

        const observer = new MutationObserver(mutations => {
            const $el = document.querySelector(selector);
            if ($el) {
                resolve($el);
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

waitForElm('.gallery').then(() => {
    new LuminousGallery(document.querySelectorAll('.gallery'), null, { showCloseButton: false });
})

waitForElm('.compare').then(() => {
    const compare = document.querySelectorAll('.compare');

    compare.forEach(element => {
        new ImageCompare(element, {
            showLabels: true,
            labelOptions: {
                before: 'Было',
                after: 'Стало',
            },
        }).mount();
    });
});

waitForElm('.masonry-4').then(() => {
    const grids4 = document.querySelectorAll('.masonry-4');
    grids4.forEach(container =>
        Macy({
            container,
            margin: {
                x: 30,
                y: 30,
            },
            breakAt: {
                1200: 4,
                800: 3,
                520: 2,
                400: 1,
            },
        })
    );
})

waitForElm('.masonry-2').then(() => {
    const grids2 = document.querySelectorAll('.masonry-2');
    grids2.forEach(container =>
        Macy({
            container,
            columns: 2,
            margin: {
                x: 50,
                y: 30,
            },
            breakAt: {
                1200: 2,
                940: 2,
                520: 2,
                400: 1,
            },
        })
    );
})