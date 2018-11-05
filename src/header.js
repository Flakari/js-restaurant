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

    header.setAttribute('id', 'main-header');
    header.setAttribute('style', 'width: 100%;' +
                                 'height: 80vh;' +
                                 'min-height: 120px;' +
                                 'display: flex;' +
                                 'justify-content: center;' +
                                 'align-items: center;' +
                                 'background-image: url(images/pizza_header.jpg);' +
                                 'background-position: center;' +
                                 'background-color: rgba(255, 255, 255, 0.4);' +
                                 'background-blend-mode: lighten;');

    h1.textContent = 'Pizza Shack';
    h1.setAttribute('style', 'margin: 0;' +
                             'padding: 0;' +
                             'font-size: 3em;' +
                             'font-variant: small-caps;');

    function h1MediaQuery(size) {
        if (size.matches) {
            h1.style.fontSize = '3em';
        } else {
            h1.style.fontSize = '5em';
        }
    }

    let size = window.matchMedia('(max-width: 500px)');
    h1MediaQuery(size);
    size.addListener(h1MediaQuery);

    header.appendChild(h1);
}

function styleNav() {
    let nav = document.querySelector('nav');

    nav.setAttribute('id', 'main-navigation');
    nav.setAttribute('style', 'height: 50px;' +
                              'width: 100%;' +
                              'background-color: #484848;');
}
