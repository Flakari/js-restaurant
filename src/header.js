export {createHeader};

function createHeader() {
    let contentDiv = document.querySelector('#content');
    let body = document.querySelector('body');
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    
    body.removeChild(contentDiv);
    body.appendChild(header);
    body.appendChild(nav);
    body.appendChild(contentDiv);
    styleHeader();
    styleNav();
}

function styleHeader() {
    let header = document.querySelector('header');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');

    header.appendChild(h1);
    header.appendChild(h2);

    header.setAttribute('id', 'main-header');
    header.setAttribute('style', 'width: 100%;' +
                                 'height: 80vh;' +
                                 'min-height: 140px;' +
                                 'display: flex;' +
                                 'flex-direction: column;' +
                                 'justify-content: center;' +
                                 'align-items: center;' +
                                 'background-image: url(images/pizza_header.jpg);' +
                                 'background-position: center;' +
                                 'background-repeat: no-repeat;' +
                                 'background-size: cover;' +
                                 'background-color: rgba(255, 255, 255, 0.4);' +
                                 'background-blend-mode: lighten;');

    h1.textContent = 'Pizza Shack';
    h1.setAttribute('style', 'margin: 0;' +
                             'padding: 0;' +
                             'font-size: 6em;' +
                             'color: black;' +
                             'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                             'font-variant: small-caps;');

    h2.textContent = 'The premiere pizza experience in a shack!';
    h2.setAttribute('style', 'margin: 0;' +
                             'padding: 0;' +
                             'font-size: 2em;' +
                             'color: black;' +
                             'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                             'font-variant: small-caps;');

    function headerMediaQuery(size) {
        if (size.matches) {
            h1.style.fontSize = '4.5em';
            h2.style.fontSize = '1.5em';
        } else {
            h1.style.fontSize = '6em';
            h2.style.fontSize = '2em';
        }
    }

    let headerSize = window.matchMedia('(max-width: 570px)');
    headerMediaQuery(headerSize);
    headerSize.addListener(headerMediaQuery);
    
    
}

function styleNav() {
    let nav = document.querySelector('nav');
    let navUl = document.createElement('ul');
    let homeLi = document.createElement('li');
    let menuLi = document.createElement('li');
    let contactLi = document.createElement('li');

    nav.appendChild(navUl);
    navUl.appendChild(homeLi);
    navUl.appendChild(menuLi);
    navUl.appendChild(contactLi);

    let navLi = document.getElementsByClassName('nav-item');

    nav.setAttribute('id', 'main-navigation');
    nav.setAttribute('style', 'height: 50px;' +
                              'width: 100%;' +
                              'background-color: #292929;');

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

    homeLi.textContent = 'Home';
    homeLi.setAttribute('class', 'nav-item');
    menuLi.textContent = 'Menu';
    menuLi.setAttribute('class', 'nav-item');
    contactLi.textContent = 'Contact';
    contactLi.setAttribute('class', 'nav-item');
   
    for (let i = 0; i < navLi.length; i++) {
        navLi[i].setAttribute('style', 'color: white;' +
                                       'font-size: 2em;' +
                                       'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                                       'font-variant: small-caps;');
    }
    console.log(navLi.length);
}
