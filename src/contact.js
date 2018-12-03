export { createContact };

function createContact() {
    let content = document.querySelector('#content');
    let contentGrid = document.createElement('section');
    let contactForm = document.createElement('form');
    let contactInfo = document.createElement('p');

    if (content.hasChildNodes) {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
          }
    }

    content.appendChild(contentGrid);

    contentGrid.setAttribute('style', 'margin: 20px auto;' +
                                      'width: 1000px;' +
                                      'max-width: 90%;' +
                                      'display: grid;' +
                                      'grid-template-columns: 1fr 1fr;' +
                                      'align-items: center;' +
                                      'font-size: 1.1em;');

    contentGrid.appendChild(contactForm);
    contentGrid.appendChild(contactInfo);
    buildContactForm();

    contactInfo.textContent = 'Phone: (123)456-7890';
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

        contactForm.setAttribute('style', 'margin: 15px auto;' +
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
    }

    let buttonDiv = document.createElement('div');
    let contactButton = document.createElement('button');

    contactForm.appendChild(buttonDiv);
    buttonDiv.appendChild(contactButton);
    contactButton.type = 'submit';
    contactButton.innerText = 'Send Message';

    buttonDiv.setAttribute('style', 'margin-top: 10px;');
}
