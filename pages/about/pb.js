document.addEventListener("DOMContentLoaded",handleDocumentLoad);
let buttonLeft;
let buttonRight;
let imageNamePrefix = "./photobook/pb";
let pageCount;
let sliderImage;

function handleDocumentLoad() {
    bindControl();
    setButtonHeight();
    pageCount = 1;
};

function bindControl() {
    buttonLeft = document.querySelector(".pb-left");
    buttonRight = document.querySelector(".pb-right");
    sliderImage = document.querySelector(".pb-image");

    buttonLeft.addEventListener("click",turnPageLeft);
    buttonRight.addEventListener("click",turnPageRight);
}

function turnPageLeft() {
    if (pageCount == 1) pageCount = 13;
    pageCount--;
    let imageUrl = imageNamePrefix + pageCount + ".jpeg";
    sliderImage.src = imageUrl;
    setButtonHeight();
}

function turnPageRight() {
    if (pageCount == 12) pageCount = 0;
    pageCount++;
    let imageUrl = imageNamePrefix + pageCount + ".jpeg";
    sliderImage.src = imageUrl;
    setButtonHeight();
}

function setButtonHeight() {
    let theHeight = sliderImage.clientHeight;
    buttonLeft.style.height = theHeight - 300 + "px";
    buttonRight.style.height = theHeight - 300 + "px";
}
