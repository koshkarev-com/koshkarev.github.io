import { h, text } from 'hyperapp';

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
