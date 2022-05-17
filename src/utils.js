import { h, text } from 'hyperapp';
import ImageCompare from 'image-compare-viewer';
import { LuminousGallery } from 'luminous-lightbox';
import Macy from 'macy';

export const line = () => h('hr', {});

export const bigTitle = name => h('h2', {}, text(name));

export const title = name => h('p', {}, text(name));

export const grid = (images = [], isTwoColumn = false) =>
    h(
        'div',
        { class: `masonry${isTwoColumn ? '-2' : '-4'}` },
        images.map(img =>
            h(
                'div',
                { class: 'item' },
                typeof img === 'string'
                    ? h('a', { class: 'gallery hvr-grow', href: img }, h('img', { src: img, alt: '', loading: 'lazy' }))
                    : h('div', { class: 'compare' }, [
                          h('img', { src: img[0], alt: 'Before', loading: 'lazy' }),
                          h('img', { src: img[1], alt: 'After', loading: 'lazy' }),
                      ])
            )
        )
    );

const setup = (dispatch, props) => {
    console.log('setup viewers');

    setTimeout(() => {
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

        const compare = document.querySelectorAll('.compare');

        compare.forEach(element => {
            let view = new ImageCompare(element, {
                showLabels: true,
                labelOptions: {
                    before: 'Было',
                    after: 'Стало',
                },
            }).mount();
        });

        new LuminousGallery(document.querySelectorAll('.gallery'), null, { showCloseButton: false });
    }, 100);

    return () => {};
};

export const setupViewers = () => [setup, {}];
