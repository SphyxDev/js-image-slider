const sliderImgContainer = document.querySelector(".sliderImgContainer");
let currentSliderImgID = 0;
let lastImg = document.querySelector(".activeSliderImg");

function incrementSliderImg(increment) {
    const imgCount = sliderImgContainer.childElementCount;
    //MDN Docs: To obtain a modulo in JavaScript, in place of n % d, use ((n % d) + d) % d.
    const i = currentSliderImgID + increment;
    currentSliderImgID = ((i % imgCount) + imgCount) % imgCount;

    const newImg = sliderImgContainer.children.item(currentSliderImgID);
    lastImg.classList.remove("activeSliderImg");
    newImg.classList.add("activeSliderImg");
    lastImg = newImg;
}