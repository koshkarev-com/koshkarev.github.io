import { app } from 'hyperapp';

import App from './App';
import { setupViewers } from './utils';

app({
    init: {},
    view: App,
    node: document.getElementById('app'),
    subscriptions: () => [setupViewers()],
});
