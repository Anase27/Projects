let ACTIVE_MODE = 'monoMode';


let btn = document.querySelectorAll('.colorMode');
let container = document.querySelector('.container');
let color = document.querySelector('#colorWheel');
let slider = document.querySelector('#divSlider');



btn.forEach(e => {
    e.addEventListener('click', activeColorMode);
});


let numOfDivs = slider.value;
addBoxes(numOfDivs);
containerStyle(numOfDivs);
addEvent()

// btn.addEventListener('click', () => {
//     let numOfDivs = prompt('Enter no. of boxes: (upto 100) ');
//     while (numOfDivs > 100) {
//         numOfDivs=prompt('No. of boxes should be >=100: ');
//     }
    
// });
let mouseDown = false;
document.body.onmousedown = () => {
    mouseDown = true;
};
document.body.onmouseup = () => {
    mouseDown = false;
};

slider.addEventListener('change', () => {
    numOfDivs = slider.value;
    addBoxes(numOfDivs);
    containerStyle(numOfDivs);
    addEvent();
});


function addEvent()
{
    let generatedDivs = document.querySelectorAll(".generatedDivs");
    
    
    generatedDivs.forEach(e => {
        e.addEventListener('mouseover',addColor);
        e.addEventListener('mousedown',addColor);
    });

}


function activeColorMode()
{
    let buttonId = this.id;
    // console.log(buttonId);
    btn.forEach(z => {
        // console.log(z.id);
        // console.log(z.classList);
        if (z.id == buttonId) {
            z.classList.add('active');
            ACTIVE_MODE = buttonId;

        }
        else{
            z.classList.remove('active');
        }
    });
    // console.log(ACTIVE_MODE);
}

function containerStyle(numOfDivs) {
    container.style.display = `grid`;
    container.style.gridTemplateColumns = `repeat(${numOfDivs},1fr)`;
}

function addBoxes(numOfDivs){
    container.textContent='';
    for (let i = 0; i < numOfDivs*numOfDivs; i++) {
        let div = document.createElement('div');
        div.setAttribute("class","generatedDivs");
        div.setAttribute("draggable","false");
        container.appendChild(div);
    }
}
function addColor(e) {
    if (e.type == 'mouseover' && !mouseDown) {
        return;
    }


    let element = this;
    if (ACTIVE_MODE == 'monoMode') {
        element.style.backgroundColor=color.value;     
    }
    else if (ACTIVE_MODE == 'rainbow') {
        element.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    }
    else{
        element.style.backgroundColor='white';
    }
    
};