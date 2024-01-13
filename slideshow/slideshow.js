// import {navDots} from "./navigationDots";

let sliderContainer = document.querySelector(".slide-show-grid-container");
let sliderLeftButton = document.querySelector(".slider-left-button");
let sliderRightButton = document.querySelector(".slider-right-button");
let totalSliderImages = document.querySelectorAll(".image-slide-container");

let dots = navDots();
// console.log(dots);
document.querySelector("#slide-show-outer-container").appendChild(dots);


let timeOutId = setTimeout(rightClick,2000);

let len = totalSliderImages.length - 1;
sliderContainer.style.left = "0%";
let slides = 0;
sliderRightButton.addEventListener("click", function(){
	rightClick();
});

sliderLeftButton.addEventListener("click",function(){
	leftClick();
	timeOutId = setTimeout(rightClick, 2000);
});

function leftClick(){
	clearTimeout(timeOutId)
	slides--;
	if (slides < 0) {
		slides = len;
	}
	sliderContainer.style.left = `-${slides * 100}%`;
}
function rightClick() {
	clearTimeout(timeOutId);
	timeOutId = setTimeout(rightClick,2000);
	slides++;
	slides = slides % (len+1);

	sliderContainer.style.left = `-${slides * 100}%`;
}
// sliderRightButton.addEventListener("click", function() {
// 	slides++;

// 	if (slides > len) {
// 		slides = 0;
// 		// rightClickLastSlideReset();
// 	}
// 	totalSliderImages[slides].setAttribute("style", `transform: translateX(-${slides * 100}%);`);
// 	totalSliderImages[slides].setAttribute("style", `left: -${slides * 100}%;`);
// 	if (slides > 1) {
// 		rightClickResetPreviousSlides();
// 	}

// 	// rightClickPushCurrentSlide();
// });
// function rightClickLastSlideReset(){
// 	totalSliderImages.forEach((e) => {
// 		e.removeAttribute("style");
// 	});
// }
// function rightClickPushCurrentSlide() {

// 	totalSliderImages[slides - 1].setAttribute(
// 		"style",
// 		`left: -${slides * 100}%;`
// 		// `transform: translateX(-${slides * 100}%);`
// 		);

// }
// function rightClickResetPreviousSlides() {
// 	totalSliderImages[slides - 1].removeAttribute("style");

// }
function navDots(){
    let mainContainer = document.querySelector("#slide-show-outer-container");
    let totalSliderImages = document.querySelectorAll(".image-slide-container");

    let navDotsContainer = document.createElement("div");
    navDotsContainer.className = "nav-dots-container";
    let len = totalSliderImages.length;

    for(let i=0;i<len;i++)
    {
        let dot = document.createElement("div");
        dot.className = "nav-dot";
        navDotsContainer.appendChild(dot);
    }
    return navDotsContainer;
}