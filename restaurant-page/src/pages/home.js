import homeImage from '../Images/img_home.png';

const body = document.querySelector('body');
const content = document.querySelector('#content');

function loadHome(){
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';

    const homeContent = document.createElement('div');
    homeContent.className = 'home-content-container';

    const homeImgBox = document.createElement('div');
    homeImgBox.className = 'home-img-container';

    const homeImg = document.createElement('img');
    homeImg.src = homeImage;
    homeImg.alt = 'pompom';
    homeImgBox.appendChild(homeImg);

    const homeDescBox = document.createElement('div');
    homeDescBox.className = 'home-desc';

    const desc = document.createElement('p');
    desc.textContent = "PomPom cafe is a cafe themed on pompom where you can sit and enjoy delicious things with pompom and his cat along with soothing music. We also have special menu items changing every season.";
    homeDescBox.appendChild(desc);

    homeContent.appendChild(homeImgBox);
    homeContent.appendChild(homeDescBox);

    homeContainer.appendChild(homeContent);
    content.appendChild(homeContainer);







    



}
export default loadHome;