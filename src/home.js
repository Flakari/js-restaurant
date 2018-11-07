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
                                  'height: 600px;');
    
    contentGrid.setAttribute('style', 'margin: 0 auto;' +
                                      'background-color: #b71a1a;' +
                                      'width: 1000px;' +
                                      'max-width: 100%;' +
                                      'display: grid;' +
                                      'grid-gap: 2%;' +
                                      'grid-template-columns: 1fr 1fr');

    contentImage.setAttribute('src', 'images/interior2.jpg');
    contentImage.setAttribute('style', 'height: auto;' +
                                       'width: 100%;');

    contentText.setAttribute('style', 'white-space: pre-wrap;' +
                                      'font-family: Arial, sans-serif');

    contentText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a mi pellentesque, dapibus velit a, lacinia massa. Vestibulum vehicula leo risus, condimentum blandit nisl suscipit id. Nunc rutrum bibendum urna eu tempor. Cras a dui risus. Phasellus vel consectetur mi, vitae pharetra magna. Duis finibus vehicula justo, sed suscipit libero accumsan eget. Proin in ex ante. Quisque at facilisis eros, sed dictum elit. Praesent commodo nisi et felis ultricies, sed imperdiet lorem suscipit. Morbi justo ex, imperdiet ut purus eget, sollicitudin interdum eros. Maecenas blandit lectus non nibh euismod feugiat. Cras id laoreet ex. Donec lobortis vestibulum augue a eleifend. Pellentesque tempor ac tortor sed viverra.\n\n' +

    'Mauris sit amet volutpat libero, at interdum massa. Nullam sed ipsum ut enim tristique mattis quis ut massa. Sed suscipit orci eu ante faucibus, eu volutpat nulla feugiat. Etiam a risus eu nulla varius pulvinar. Ut in nisi velit. Pellentesque a rhoncus magna. Phasellus tempus, arcu ut aliquam posuere, eros nunc porta sapien, vel luctus erat tortor aliquet risus. Nam auctor fermentum sollicitudin.\n\n' +
    
    'Nunc molestie faucibus condimentum. Ut sodales congue eros vitae elementum. In ac arcu varius orci ullamcorper dapibus eu sed tellus. Proin ullamcorper eros at sem sollicitudin consequat. Vivamus condimentum magna at leo fringilla mollis. Aliquam rutrum egestas elit, nec tincidunt libero congue id. Sed tristique enim erat, a mollis felis imperdiet sit amet. Etiam egestas sodales sem, in auctor sem aliquet a.';

    console.log('Home Page Working');
}
