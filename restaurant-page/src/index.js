import './style.css';
import navBar from './pages/nav';
import addMenu from './pages/menu';
import rem from './pages/removeContent';
navBar();

const menuBtn = document.querySelector('.menu-nav');
const homeBtn = document.querySelector('.home-nav');
const contactBtn = document.querySelector('.contact-nav');

homeBtn.addEventListener('click',rem);
contactBtn.addEventListener('click',rem);
menuBtn.addEventListener('click',()=>{
    loadContent(addMenu);
});

function loadContent(pageName){
    rem();
    pageName();
}

console.log('ghjl');