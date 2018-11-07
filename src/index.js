import { createHeader } from './header';
import { createHome } from './home';

(function bodyStyle() {
    let body = document.querySelector('body');
    body.setAttribute('style', 'margin: 0;');
})();

createHeader();
createHome();
