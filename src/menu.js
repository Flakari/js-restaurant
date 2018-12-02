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

    

    contentGrid.setAttribute('style', 'margin: 20px auto;' +
                                      'background-color: white;' +
                                      'width: 1000px;' +
                                      'max-width: 100%;' +
                                      'display: grid;' +
                                      'grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));' +
                                      'align-items: center;' +
                                      'font-size: 1.1em;');


    for (let i = 0; i < 6; i++) {
        let menuItem = document.createElement('div');
        menuItem.textContent = 'Hi';
        contentGrid.appendChild(menuItem);
    }
}
