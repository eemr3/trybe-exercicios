function colorFont() {
  const colorFont = document.querySelector("#color-font");

  colorFont.addEventListener("input", function (event) {
    webStorageValues.setColorStorage("color", event.target.value);
    setColorStorage();
  });
  colorFont.value = setColorStorage();
}
colorFont();

function setColorStorage() {
  const paragraph = document.querySelectorAll("p");
  let colorFontValeu = localStorage.getItem("color");
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.color = colorFontValeu;
  }
  return colorFontValeu;
}
setColorStorage();
