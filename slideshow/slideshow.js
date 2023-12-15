let sliderLeftButton = document.querySelector(".slider-left-button");
let sliderRightButton = document.querySelector(".slider-right-button");
let totalSliderImages = document.querySelectorAll(".image-slide-container");
let slides = 0;
sliderRightButton.addEventListener("click", () => {
	console.log(sliderRightButton);
	slides++;
	if (slides >= totalSliderImages.length) {
		slides = 0;
	}
	totalSliderImages[0].computedStyleMap.left = `${slides * 100}%`;
});
