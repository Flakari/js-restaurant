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
                                      'background-color: white;' +
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
        contactForm.appendChild(contactDiv);
        contactDiv.appendChild(label);
        contactDiv.appendChild(input);

        label.setAttribute('for', labelFor[i]);
        label.textContent = labelName[i];

        input.setAttribute('type', inputType[i]);
        input.setAttribute('id', inputId[i]);
        input.setAttribute('name', inputName[i]);
    }

    let buttonDiv = document.createElement('div');
    let contactButton = document.createElement('button');

    contactForm.appendChild(buttonDiv);
    buttonDiv.appendChild(contactButton);
    contactButton.type = 'submit';
    contactButton.innerText = 'Send Message';
}
