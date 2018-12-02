export { createHome };

function createHome() {
    let content = document.querySelector('#content');
    let contentGrid = document.createElement('section');
    let contentImage = document.createElement('img');
    let contentText = document.createElement('article');

    if (content.hasChildNodes) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
          }
    }

    content.appendChild(contentGrid);
    contentGrid.appendChild(contentImage);
    contentGrid.appendChild(contentText);

    content.setAttribute('style', 'background-color: #d0a385;' +
                                  'overflow: hidden;' +
                                  'text-align: center;');

    styleContentGrid();
    styleContentImage();
    styleContentText();

    function mainMediaQuery(size) {
        if (size.matches) {
            contentGrid.style.gridTemplateColumns = '1fr';
            contentImage.src = 'images/interior3.jpg';
            contentGrid.style.width = '500px';
            contentText.style.padding = '10px 10px';
        } else {
            contentGrid.style.gridTemplateColumns = 'minmax(50px, 300px) 1fr';
            contentImage.src = 'images/interior2.jpg';
            contentGrid.style.width = '1000px';
            contentText.style.padding = '0 20px';
        }
    }

    let homeSize = window.matchMedia('(max-width: 920px)');
    mainMediaQuery(homeSize);
    homeSize.addListener(mainMediaQuery);
}

function styleContentGrid() {
    let contentGrid = document.querySelector('section');

    contentGrid.setAttribute('style', 'margin: 20px auto;' +
                                      'background-color: white;' +
                                      'width: 1000px;' +
                                      'max-width: 90%;' +
                                      'display: grid;' +
                                      'grid-template-columns: minmax(50px, 300px) 1fr;' +
                                      'align-items: center;' +
                                      'font-size: 1.1em;');
}

function styleContentImage() {
    let contentImage = document.querySelector('img'); 

    contentImage.setAttribute('src', 'images/interior2.jpg');
    contentImage.setAttribute('style', 'width: 100%;');
}

function styleContentText() {
    let contentText = document.querySelector('article');

    contentText.setAttribute('style', 'white-space: pre-wrap;' +
                                      'font-family: Arial, sans-serif;' +
                                      'padding: 0 20px;' +
                                      'text-align: justify;');

    contentText.textContent = 'Est. 1989. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a mi pellentesque, dapibus velit a, lacinia massa. Vestibulum vehicula leo risus, condimentum blandit nisl suscipit id. Nunc rutrum bibendum urna eu tempor. Cras a dui risus. Phasellus vel consectetur mi, vitae pharetra magna. Duis finibus vehicula justo, sed suscipit libero accumsan eget. Proin in ex ante. Quisque at facilisis eros, sed dictum elit. Praesent commodo nisi et felis ultricies, sed imperdiet lorem suscipit. Morbi justo ex, imperdiet ut purus eget, sollicitudin interdum eros. Maecenas blandit lectus non nibh euismod feugiat. Cras id laoreet ex. Donec lobortis vestibulum augue a eleifend. Pellentesque tempor ac tortor sed viverra.\n\n' +

    'Mauris sit amet volutpat libero, at interdum massa. Nullam sed ipsum ut enim tristique mattis quis ut massa. Sed suscipit orci eu ante faucibus, eu volutpat nulla feugiat. Etiam a risus eu nulla varius pulvinar. Ut in nisi velit. Pellentesque a rhoncus magna. Phasellus tempus, arcu ut aliquam posuere, eros nunc porta sapien, vel luctus erat tortor aliquet risus. Nam auctor fermentum sollicitudin.';
}
