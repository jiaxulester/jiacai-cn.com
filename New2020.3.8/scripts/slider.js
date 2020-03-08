document.addEventListener("DOMContentLoaded",handleDocumentLoad);
let buttonLeft;
let buttonRight;
let imageNamePrefix = "./resources/image/Slider-Image";
let pageCount;
let pageDisplay;
let sliderImage;

function handleDocumentLoad() {
    bindControl();
    pageCount = 1;
    progression = setInterval(turnPageRight,10000);
};

function bindControl() {
    buttonLeft = document.querySelector(".left-arrow");
    buttonRight = document.querySelector(".right-arrow");
    pageDisplay = document.querySelector(".page-current");
    sliderImage = document.querySelector(".slider-image");

    buttonLeft.addEventListener("click",turnPageLeft);
    buttonRight.addEventListener("click",turnPageRight);
}

function turnPageLeft() {
    if (pageCount == 1) return;
    changeDots(true);
    pageCount--;
    let imageUrl = imageNamePrefix + pageCount + ".png";
    sliderImage.style.backgroundImage = "url(" + imageUrl + ")";
    pageDisplay.innerHTML = pageCount;
}

function turnPageRight() {
    if (pageCount == 4) return;
    changeDots(false);
    pageCount++;
    let imageUrl = imageNamePrefix + pageCount + ".png";
    sliderImage.style.backgroundImage = "url(" + imageUrl + ")";
    pageDisplay.innerHTML = pageCount;
}

function changeDots(isLeft) {
    let currentDot = document.querySelector(".dot-current");
    let targetDot;
    if (isLeft) targetDot = document.querySelector(".dot-"+(pageCount-1));
        else    targetDot = document.querySelector(".dot-"+(pageCount+1));
    currentDot.className = currentDot.className.substring(12);
    targetDot.className = "dot-current " + targetDot.className;
}
