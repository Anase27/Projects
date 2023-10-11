import map from '../Images/map.png';
const content = document.querySelector('#content');

function loadContact(){
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-outer-div';

    const contactDetails = document.createElement('div');
    contactDetails.className = 'contact-details-div';

    // 1
    const phone = document.createElement('div');
    phone.className = 'phone-div';

    const phoneIcon = document.createElement('span');
    phoneIcon.className = 'iconify';
    phoneIcon.setAttribute('data-icon','ph:phone-thin');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '1234567890';
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNumber);

    // 2
    const email = document.createElement('div');
    email.className = 'email-div';

    const emailIcon = document.createElement('span');
    emailIcon.className = 'iconify';
    emailIcon.setAttribute('data-icon','circum:mail');

    const emailAddress = document.createElement('p');
    emailAddress.textContent = 'pompom@gmail.com';
    email.appendChild(emailIcon);
    email.appendChild(emailAddress);

    // 3

    contactDetails.appendChild(phone);
    contactDetails.appendChild(email);
    contactDiv.appendChild(contactDetails);
    
    const addressImage = document.createElement('div');
    addressImage.className = 'address-image-div';
    const imageDiv = document.createElement('div');
    imageDiv.className = 'address-img';
    
    const img = document.createElement('img');
    img.src = map;
    img.alt = 'map_img';
    imageDiv.appendChild(img);
    addressImage.appendChild(imageDiv);
    contactDiv.appendChild(addressImage);
    
    content.appendChild(contactDiv);

}

export default loadContact;