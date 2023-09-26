const content = document.querySelector('#content');
const nav = document.createElement('div');
nav.className = 'nav-outer-container';

const siteNameDiv = document.createElement('div')
siteNameDiv.className = 'site-name-container';

const siteName = document.createElement('h3');
const siteNameText = document.createTextNode('PomPom Cafe');
siteName.className = 'site-name';
siteName.appendChild(siteNameText);

siteNameDiv.appendChild(siteName);


const navigations = document.createElement('div');
navigations.className = 'nav-container-navigations';

const homeNav = document.createElement('div');
homeNav.className = 'home-nav';
const homeP = document.createElement('p');
homeP.textContent = "home";
homeNav.appendChild(homeP);


// const navhomeText = document.createTextNode('home');
// homeNav.appendChild(navhomeText);


const menuNav = document.createElement('div');
menuNav.className = 'menu-nav';
const menuP = document.createElement('p');
menuNav.appendChild(menuP);
menuP.textContent = "menu";
// menuNav.textContent = 'menu';

const contactNav = document.createElement('div');
contactNav.className = 'contact-nav';
const contactP = document.createElement('p');
contactP.textContent = "contact";
contactNav.appendChild(contactP);
// contactNav.textContent = 'contact';


function navBar(){
    [homeNav,menuNav,contactNav].forEach(e => {
        navigations.appendChild(e);
    });

    [siteNameDiv,navigations].forEach(k => {
        nav.appendChild(k);
    });

    content.appendChild(nav);
}


export default navBar;