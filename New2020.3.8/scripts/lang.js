function toChinese() {
  let thisPage = window.location.href;
  window.location.href = thisPage.substring(0,thisPage.length-8)+".html";
}

function toEnglish() {
  let thisPage = window.location.href;
  window.location.href = thisPage.substring(0,thisPage.length-5)+"_en.html";
}
