function changeFrame(pageNo) {
  let frameUrl = "./frames/p" + pageNo + ".html";
  let targetFrame = document.querySelector(".product-frame-it");
  targetFrame.src = frameUrl;


  let currentButton = document.querySelector(".current");
  let targetButton = document.querySelector("#p"+pageNo);

  currentButton.className = "notCurrent";
  targetButton.className = "current";
}
