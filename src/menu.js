export { createMenu };

function createMenu() {
    let content = document.querySelector('#content');
    let contentGrid = document.createElement('section');
    let menuHeader = document.createElement('h2');

    if (content.hasChildNodes) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
          }
    }

    content.appendChild(menuHeader);
    content.appendChild(contentGrid);
    
    menuHeader.textContent = 'Menu';

    menuHeader.setAttribute('style', 'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial,                                      sans-serif;' +
                                     'font-variant: small-caps;' +
                                     'font-size: 3em;');

    contentGrid.setAttribute('style', 'margin: 20px auto;' +
                                      'width: 1000px;' +
                                      'max-width: 90%;' +
                                      'display: grid;' +
                                      'grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));' +
                                      'align-items: center;' +
                                      'font-size: 1.1em;' +
                                      'grid-gap: 10px;');


    let menuImages = ['images/pizza_menu.jpg',
                      'images/flatbreadpizza_menu.jpg',
                      'images/calzone_menu.jpg',
                      'images/pasta_menu.jpg',
                      'images/breadsticks_menu.jpg',
                      'images/salad_menu.jpg'];

    let menuTitles = ['Pizza', 'Flatbread', 'Calzone', 'Pasta', 'Breadsticks', 'Salad'];

    for (let i = 0; i < 6; i++) {
        let menuItem = document.createElement('div');
        let image = document.createElement('img');
        let title = document.createElement('h3');
        let description = document.createElement('p');

        image.setAttribute('src', menuImages[i]);
        title.textContent = menuTitles[i];
        description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a mi pellentesque, dapibus velit a, lacinia massa.';

        menuItem.setAttribute('style', 'background-color: white;' +
                                       'padding: 5px;' +
                                       'text-align: center;');

        title.setAttribute('style', 'margin: 0;' +
                                    'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                                    'font-variant: small-caps;' +
                                    'font-size: 1.3em;');
        image.setAttribute('style', 'max-width: 100%;');
        description.setAttribute('style', 'font-family: Arial, sans-serif;' +
                                          'margin: 10px 5px;');
        contentGrid.appendChild(menuItem);
        menuItem.appendChild(image);
        menuItem.appendChild(title);
        menuItem.appendChild(description);
    }
}
