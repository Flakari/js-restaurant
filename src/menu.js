export { createMenu };

function createMenu() {
    let content = document.querySelector('#content');
    let contentGrid = document.createElement('section');

    if (content.hasChildNodes) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
          }
    }

    content.appendChild(contentGrid);
}
