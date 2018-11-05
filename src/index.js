import {createHeader} from './header';
import {homeTest} from './home';

console.log('Webpack is initialized');

(function bodyStyle() {
    let body = document.querySelector('body');
    body.setAttribute('style', 'margin: 0;');
})();

createHeader();

homeTest();
