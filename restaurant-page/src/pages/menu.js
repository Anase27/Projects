import menuHeadpc from '../Images/tit_menu.png';
import menuHeadsp from '../Images/tit_menu_sp.png';
import EggsBenedict from '../Images/menu/EggsBenedict.png';
import puddingla from '../Images/menu/23team_B.png';
import latte from '../Images/menu/23team_C.png';
import lunchPlate from '../Images/menu/img_food02_20230601.png';
import keemaCurry from '../Images/menu/img_food03_20230601.png';
import chocoDonut from '../Images/menu/img_dessert01_20230601.png'
import strawberryDonut from '../Images/menu/img_dessert02_20230601.png'
import mangoParafit from '../Images/menu/img_dessert03_20230601.png'
function createMenu()
{
    
    const menu = document.createElement('div');
    menu.className='menu-container';

    menu.appendChild(addMenuCards(EggsBenedict,'Eggs benedict','A meal plate filled with autumn ingredients such as pumpkin salad and sweet potato sauce','eggs_benedict'));

    menu.appendChild(addMenuCards(puddingla,'Pudding a la','A cute and fun dessert with lots of jiggly pudding, ice cream, and fruits','pudding_a_la'));

    menu.appendChild(addMenuCards(latte,'Tottemooisiitte Ruwasano Latte','A very satisfying chocolate drink! Cookies will be randomly selected from among the three Hachimupuri.','latte'));

    menu.appendChild(addMenuCards(lunchPlate,'Lunch plate',"Children's favorite menu on one plate. A dish that adults will also be very satisfied with!",'lunch_plate'));

    menu.appendChild(addMenuCards(keemaCurry,'Flower garden keema curry','A mildly spicy keema curry inspired by a walk in a flower garden','keema_curry'));

    menu.appendChild(addMenuCards(chocoDonut,'Melty chocolate donut',"Perfect when you're a little hungry! A cute dessert with small pudding",'chocolate_donut'));

    menu.appendChild(addMenuCards(strawberryDonut,'Melty strawberry donut','Miracle harmony of donuts and pudding Covered with caramel sauce ','strawberry_donut'));

    menu.appendChild(addMenuCards(mangoParafit,'Sparkling mango parfait','A parfait filled with plenty of mango. Ice cream is vanilla and strawberry!','strawberry_donut'));

    return menu;
}

function addMenuCards(img,name,desc,alt)
{
    const card = document.createElement('div');
    card.className = 'menu-container-card';

    const imageBox = document.createElement('div');
    imageBox.className =  'menu-image';
    
    const image = document.createElement('img');
    image.src = img;
    image.alt = alt;
    
    imageBox.appendChild(image);

    const cardDesc = document.createElement('div');
    cardDesc.className = 'menu-card-desc';

    const cardName = document.createElement('p');
    cardName.textContent = name;
    cardDesc.appendChild(cardName);

    const p = document.createElement('p');
    p.textContent = desc;
    cardDesc.appendChild(p);

    card.appendChild(imageBox);
    card.appendChild(cardDesc);
    
    return card;
}

function addMenu()
{
    const content = document.querySelector('#content');

    const pageContainer = document.createElement('div');
    pageContainer.className = 'page-content-container';


    const imgBoxpc = document.createElement('h1');
    imgBoxpc.className = 'menu-top-image-pc';

    const menuHeadImagepc = document.createElement('img');
    menuHeadImagepc.src = menuHeadpc;
    menuHeadImagepc.alt = 'menu';

    const imgBoxsp = document.createElement('h1');
    imgBoxsp.className = 'menu-top-image-sp';

    const menuHeadImagesp = document.createElement('img');
    menuHeadImagesp.src = menuHeadsp;
    menuHeadImagesp.alt = 'menu';

    imgBoxpc.appendChild(menuHeadImagepc);
    imgBoxsp.appendChild(menuHeadImagesp);
    pageContainer.appendChild(imgBoxpc);
    pageContainer.appendChild(imgBoxsp);

    pageContainer.appendChild(createMenu());
    content.appendChild(pageContainer);

}

export default addMenu;