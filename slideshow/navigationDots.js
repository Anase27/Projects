export function navDots(){
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