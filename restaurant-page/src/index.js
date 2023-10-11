import './style.css';
import navBar from './pages/nav';
import addMenu from './pages/menu';
import loadHome from './pages/home';
import loadContact from './pages/contact';
import rem from './pages/removeContent';
navBar();
loadHome();

const menuBtn = document.querySelector('.menu-nav');
const homeBtn = document.querySelector('.home-nav');
const contactBtn = document.querySelector('.contact-nav');

homeBtn.addEventListener('click',()=>{
    loadContent(loadHome);
});
menuBtn.addEventListener('click',()=>{
    loadContent(addMenu);
});
contactBtn.addEventListener('click',()=>{
    loadContent(loadContact);
});

function loadContent(pageName){
    rem();
    pageName();
}

// console.log('ghjl');