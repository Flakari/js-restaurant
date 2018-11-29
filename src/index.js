import { createHeader } from './header';
import { createHome } from './home';

(function bodyStyle() {
    let body = document.querySelector('body');
    body.setAttribute('style', 'margin: 0;');
})();

function createFooter() {
    let body = document.querySelector('body');
    let footer = document.createElement('footer');
    let footerText = document.createElement('p');

    footerText.textContent = "Created entirely in Javascript!";

    footer.setAttribute('style', 'background-color: #b99074;' +
                                 'text-align: center;' +
                                 'padding: 8px;');

    footerText.setAttribute('style', 'margin: 0;' +
                                     'font-style: italic;' +
                                     'font-weight: bold;' +
                                     'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;');

    body.appendChild(footer);
    footer.appendChild(footerText);
}

createHeader();
createHome();
createFooter();
