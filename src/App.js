import { h, text } from 'hyperapp';

import { bigTitle, grid, line, title } from './utils';

function App() {
    return h('div', {}, [
        h('div', { class: 'logo' }, text('KOSHKAREV')),
        h('div', { class: 'container' }, [
            line(),
            bigTitle('Собственные MLO интерьеры.'),
            title('Офис.'),
            grid([1, 2, 3, 4].map(n => `my/office/${n}.jpg`)),
            line(),
            title('Армия.'),
            grid([10, 1, 3, 8, 4, 5, 9, 7].map(n => `my/army/${n}.jpg`)),
            line(),
            title('Фиб.'),
            grid([1, 2, 3, 4, 5, 6].map(n => `my/fib/${n}.jpg`)),
            line(),
            title('Квартира для банды.'),
            grid([1, 2, 3, 4].map(n => `my/band1/${n}.jpg`)),
            line(),
            title('Особняк для банды.'),
            grid([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => `my/band2/${n}.jpg`)),
            line(),
            title('Участок шерифа.'),
            grid([1, 2, 3, 4, 5, 6, 7].map(n => `my/sheriff/${n}.jpg`)),
            line(),
            title('Квартира для банды.'),
            grid([1, 2, 3, 4].map(n => `my/band3/${n}.jpg`)),
            line(),
            title('Медицинский центр.'),
            grid([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map(n => `my/med/${n}.jpg`)),
            line(),
            title('Мастерская для банды.'),
            grid([1, 2, 3, 4].map(n => `my/band4/${n}.jpg`)),
            line(),
            title('Особняк для банды.'),
            grid([1, 2, 3, 4, 5, 6].map(n => `my/band5/${n}.jpg`)),
            line(),
            title('Автошкола.'),
            grid([1, 2, 3, 4, 5].map(n => `my/d/${n}.jpg`)),
            line(),
            title('Мастерская банды.'),
            grid([1, 2, 3, 4, 5, 6, 7].map(n => `my/band6/${n}.jpg`)),
            line(),
            title('Мотель банды.'),
            grid([1, 2, 3, 4, 5, 6, 7, 8].map(n => `my/band7/${n}.jpg`)),
            line(),
            title('Автомастерская банды.'),
            grid([1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `my/band8/${n}.jpg`)),
            line(),
            title('Гараж для банды.'),
            grid([1, 2, 3, 4].map(n => `my/band/${n}.webp`)),
            line(),
            title('Гараж для банды.'),
            grid([1, 2, 3, 4].map(n => `my/band/1-${n}.webp`)),
            line(),
            title('Особняк для мафии.'),
            grid([1, 2, 7, 8, 9, 3, 4, 10, 5, 6].map(n => `my/band/2-${n}.webp`)),
            line(),
            title('Дом для мафии.'),
            grid([2, 3, 5, 6, 7, 8, 1, 4].map(n => `my/band/3-${n}.webp`)),
            line(),
            title('Особняк для мафии.'),
            grid([1, 3, 4, 5, 6, 7, 8, 9].map(n => `my/band/4-${n}.webp`)),
            line(),
            title('Особняк для мафии.'),
            grid([1, 2, 3, 4, 5, 6].map(n => `my/band/5-${n}.webp`)),
            line(),
            title('Автошкола.'),
            grid([2, 1, 3, 8, 6, 4, 5, 7].map(n => `my/band/7-${n}.webp`)),
            line(),
            title('Небольшая раздевалка для рабочих.'),
            grid([1, 2, 3].map(n => `my/cloakroom/${n}.webp`)),
            line(),
            title('Особняк для мафии.'),
            grid([1, 2, 3, 4, 5, 6, 7, 8].map(n => `my/armenian/${n}.webp`)),
            line(),
            title('Шоурум для автомобилей люкс-класса.'),
            grid([1, 2, 3, 4].map(n => `my/carshowroom2/${n}.webp`)),
            line(),
            title('Шоурум для автомобилей среднего-класса.'),
            grid([1, 2, 3, 4].map(n => `my/carshowroom1/${n}.webp`)),
            line(),
            title('Городская больница.'),
            grid([1, 2, 3, 4, 5, 6, 7, 22, 19, 10, 11, 12, 13, 14, 15, 16].map(n => `my/hospital/${n}.webp`)),
            line(),
            title('Автошкола.'),
            grid([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(n => `my/drivingschool/${n}.webp`)),
            line(),
            title('Тюрьма-карцер.'),
            grid([18, 7, 1, 2, 16, 3, 4, 15, 5, 17, 6, 9, 12, 10, 11, 8].map(n => `my/jail/${n}.webp`)),
            line(),
            title('Дрифт-остров #1.'),
            grid([1, 2, 3, 4, 5, 6].map(n => `my/drift1/${n}.jpg`)),
            line(),
            title('Дрифт-остров #2.'),
            grid([1, 2, 3, 4].map(n => `my/drift2/${n}.jpg`)),
            line(),
            title('De_dust2.'),
            grid([1, 2, 3, 4, 5, 6].map(n => `my/dust2/${n}.jpg`)),
            line(),
            bigTitle('Обновление интерьеров.'),
            title('Фикс освещения и наполнения.'),
            grid(
                [1, 2, 3, 4, 5].map(n => [`gov/${n}-2.webp`, `gov/${n}-1.webp`]),
                true
            ),
            line(),
        ]),
        h('div', { class: 'footer' }, h('div', { class: 'copy' }, text(`${new Date().getFullYear()} Koshkarev`))),
    ]);
}

export default App;