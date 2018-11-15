export { createHome };

function createHome() {
    let content = document.querySelector('#content');
    let contentGrid = document.createElement('section');
    let contentImage = document.createElement('img');
    let contentText = document.createElement('article');

    content.appendChild(contentGrid);
    contentGrid.appendChild(contentImage);
    contentGrid.appendChild(contentText);


    content.setAttribute('style', 'background-color: #b71a1a;' +
                                  'overflow: hidden;');
    
    contentGrid.setAttribute('style', 'margin: 0 auto;' +
                                      'margin-bottom: 20px;' +
                                      'background-color: #b71a1a;' +
                                      'width: 1000px;' +
                                      'max-width: 100%;' +
                                      'display: grid;' +
                                      'grid-gap: 2%;' +
                                      'grid-template-columns: minmax(50px, 300px) 1fr;' +
                                      'align-items: center;' +
                                      'font-size: 1.1em;');

    contentImage.setAttribute('src', 'images/interior2.jpg');
    contentImage.setAttribute('style', 'width: 100%;');

    contentText.setAttribute('style', 'white-space: pre-wrap;' +
                                      'font-family: Arial, sans-serif;' +
                                      'padding: 0 10px;' +
                                      'text-align: justify;');

    contentText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a mi pellentesque, dapibus velit a, lacinia massa. Vestibulum vehicula leo risus, condimentum blandit nisl suscipit id. Nunc rutrum bibendum urna eu tempor. Cras a dui risus. Phasellus vel consectetur mi, vitae pharetra magna. Duis finibus vehicula justo, sed suscipit libero accumsan eget. Proin in ex ante. Quisque at facilisis eros, sed dictum elit. Praesent commodo nisi et felis ultricies, sed imperdiet lorem suscipit. Morbi justo ex, imperdiet ut purus eget, sollicitudin interdum eros. Maecenas blandit lectus non nibh euismod feugiat. Cras id laoreet ex. Donec lobortis vestibulum augue a eleifend. Pellentesque tempor ac tortor sed viverra.\n\n' +

    'Mauris sit amet volutpat libero, at interdum massa. Nullam sed ipsum ut enim tristique mattis quis ut massa. Sed suscipit orci eu ante faucibus, eu volutpat nulla feugiat. Etiam a risus eu nulla varius pulvinar. Ut in nisi velit. Pellentesque a rhoncus magna. Phasellus tempus, arcu ut aliquam posuere, eros nunc porta sapien, vel luctus erat tortor aliquet risus. Nam auctor fermentum sollicitudin.';

    function mainMediaQuery(size) {
        if (size.matches) {
            contentGrid.style.gridTemplateColumns = '1fr';
            contentImage.src = 'images/interior3.jpg';
            contentGrid.style.width = '500px';
        } else {
            contentGrid.style.gridTemplateColumns = 'minmax(50px, 300px) 1fr';
            contentImage.src = 'images/interior2.jpg';
            contentGrid.style.width = '1000px';
        }
    }

    let homeSize = window.matchMedia('(max-width: 700px)');
    mainMediaQuery(homeSize);
    homeSize.addListener(mainMediaQuery);
    console.log('Home Page Working');
}
