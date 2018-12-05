export { createContact };

function createContact() {
    let content = document.querySelector('#content');
    let contentGrid = document.createElement('section');
    let contactForm = document.createElement('form');
    let contactHeader = document.createElement('h2');
    let contactInfo = document.createElement('p');

    if (content.hasChildNodes) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
          }
    }

    content.appendChild(contactHeader);
    contactHeader.textContent = 'Contact Us!';

    contactHeader.setAttribute('style', 'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                                     'font-variant: small-caps;' +
                                     'font-size: 3em;');

    content.appendChild(contentGrid);

    contentGrid.setAttribute('style', 'margin: 20px auto;' +
                                      'width: 1000px;' +
                                      'max-width: 90%;' +
                                      'display: grid;' +
                                      'grid-template-columns: repeat(2, minmax(250px, 1fr));' +
                                      'align-items: center;' +
                                      'font-size: 1.1em;');

    contentGrid.appendChild(contactForm);
    contentGrid.appendChild(contactInfo);
    buildContactForm();

    function gridMediaQuery(size) {
        if (size.matches) {
            contentGrid.style.gridTemplateColumns = '1fr';
        } else {
            contentGrid.style.gridTemplateColumns = 'repeat(2, minmax(250px, 1fr))';
        }
    }

    let size = window.matchMedia('(max-width: 700px)');
    gridMediaQuery(size);
    size.addListener(gridMediaQuery);

    contactInfo.setAttribute('style', 'white-space: pre-wrap;' +
                                      'font-family: Arial, sans-serif;');

    contactInfo.textContent = 'Phone: 0118 999 881 999 119 725 3\n' +
                              'Email: contact@pizzashack.com\n\n' +
                              
                              'Address:\n' +
                              '1234 N Water St.\n' +
                              'Milwaukee, WI 53205-3120\n\n' +

                              'Hours:\n' + 
                              '10:00 AM - 11:00 PM\n' +
                              'Sunday through Saturday';
}

function buildContactForm() {
    let contactForm = document.querySelector('form');

    let labelName = ['Name:', 'E-mail:', 'Message:'];
    let labelFor = ['name', 'mail', 'msg'];
    let inputType = ['text', 'email', ''];
    let inputId = labelFor;
    let inputName = ['user_name', 'user_mail', 'user_message'];
    contactForm.action = '';
    contactForm.method = 'post';

    for (let i = 0; i < labelName.length; i++) {
        let contactDiv = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');
        let textArea = document.createElement('textarea');
        contactForm.appendChild(contactDiv);
        contactDiv.appendChild(label);

        contactForm.setAttribute('style', 'box-sizing: border-box;' +
                                          'margin: 15px auto;' +
                                          'width: 450px;' +
                                          'max-width: 100%;' +
                                          'font-family: "Aharoni", "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;' +
                                          'font-variant: small-caps;' +
                                          'background-color: white;' +
                                          'padding: 20px 10px;' +
                                          'border-radius: 2px;');
        
        contactDiv.setAttribute('style', 'display: grid;' +
                                         'grid-template-columns: 150px 1fr;' +
                                         'align-items: center;' +
                                         'justify-items: stretch;' +
                                         'margin-bottom: 5px;');

        label.setAttribute('for', labelFor[i]);
        label.textContent = labelName[i];

        if (i < labelName.length - 1) {
            contactDiv.appendChild(input);
            input.setAttribute('type', inputType[i]);
            input.setAttribute('id', inputId[i]);
            input.setAttribute('name', inputName[i]);
        } else {
            contactDiv.appendChild(textArea);
            textArea.setAttribute('id', inputId[i]);
            textArea.setAttribute('name', inputName[i]);
            textArea.setAttribute('style', 'resize: none;' +
                                           'height: 75px;');
        }

        function formMediaQuery(size) {
            if (size.matches) {
                contactForm.style.width = '365px';
                contactForm.style.padding = '25px 15px'
                contactDiv.style.gridTemplateColumns = '1fr';
                contactDiv.style.textAlign = 'left';
                contactDiv.style.gridRowGap = '5px';
                contactDiv.style.marginBottom = '10px';
            } else {
                contactForm.style.width = '450px';
                contactForm.style.padding = '20px 10px'
                contactDiv.style.gridTemplateColumns = '150px 1fr';
                contactDiv.style.textAlign = 'center';
                contactDiv.style.marginBottom = '5px';
            }
        }
    
        let size = window.matchMedia('(max-width: 950px)');
        formMediaQuery(size);
        size.addListener(formMediaQuery);
    }

    let buttonDiv = document.createElement('div');
    let contactButton = document.createElement('button');

    contactForm.appendChild(buttonDiv);
    buttonDiv.appendChild(contactButton);
    contactButton.type = 'submit';
    contactButton.innerText = 'Send Message';

    buttonDiv.setAttribute('style', 'margin-top: 10px;');
}
