export { styleNav };
import { createHome } from './home';

function styleNav() {
    let nav = document.querySelector('nav');
    let navUl = document.createElement('ul');
    let homeLi = document.createElement('li');
    let menuLi = document.createElement('li');
    let contactLi = document.createElement('li');
    let homeLink = document.createElement('a');
    let menuLink = document.createElement('a');
    let contactLink = document.createElement('a');

    nav.appendChild(navUl);
    navUl.appendChild(homeLi);
    navUl.appendChild(menuLi);
    navUl.appendChild(contactLi);
    homeLi.appendChild(homeLink);
    menuLi.appendChild(menuLink);
    contactLi.appendChild(contactLink);

    let navLi = document.getElementsByClassName('nav-item');

    nav.setAttribute('id', 'main-navigation');
    nav.setAttribute('style', 'height: 50px;' +
                              'width: 100%;' +
                              'background-color: #1d1d1d;');

    navUl.setAttribute('id', 'navigation-list');
    navUl.setAttribute('style', 'margin: 0 auto;' +
                                'padding: 0;' +
                                'height: 100%;' +
                                'display: grid;' +
                                'grid-template-columns: repeat(3, 1fr);' +
                                'align-items: center;' +
                                'width: 800px;' +
                                'max-width: 100%;' +
                                'text-align: center;' +
                                'list-style: none;');

    
    homeLi.setAttribute('class', 'nav-item');
    menuLi.setAttribute('class', 'nav-item');
    contactLi.setAttribute('class', 'nav-item');

    homeLink.textContent = 'Home';
    homeLink.setAttribute('href', '#');
    menuLink.textContent = 'Menu';
    menuLink.setAttribute('href', '#');
    contactLink.textContent = 'Contact';
    contactLink.setAttribute('href', '#');

    // Replace Console Logs with imported function calls when ready
    homeLink.addEventListener('click', e => {
        createHome();
        console.log('Home');
    });

    menuLink.addEventListener('click', e => {
        console.log('Menu');
    });
    
    contactLink.addEventListener('click', e => {
        console.log('Contact');
    });

    for (let i = 0; i < navLi.length; i++) {
        navLi[i].setAttribute('style', 'font-size: 2em;' +
                                       'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                                       'font-variant: small-caps;');

        navLi[i].firstChild.setAttribute('style', 'text-decoration: none;' +
                                                  'color: white;');
    }
}
