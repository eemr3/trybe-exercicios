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

function sizeFont() {
  const sizeFont = document.querySelector("#size-font");

  sizeFont.addEventListener("input", function () {
    webStorageValues.setSizeFontStorage("fontSize", sizeFont.value);
    setSizeFontStorage();
  });
  let valueSize = setSizeFontStorage();
  sizeFont.value = valueSize;
}
sizeFont();

function setSizeFontStorage() {
  const sizeFont = localStorage.getItem("fontSize");
  const paragraph = document.querySelectorAll("p");

  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.fontSize = `${sizeFont}px`;
  }
  return sizeFont;
}
setSizeFontStorage();

function bgColorPage() {
  const bgColor = document.querySelector("#color-back");
  bgColor.addEventListener("input", function (event) {
    webStorageValues.setBgColorStorage("bgColor", event.target.value);
    bgColorStorage();
  });
  let valueBgColor = bgColorStorage();
  bgColor.value = valueBgColor;
}
bgColorPage();

function bgColorStorage() {
  const getBgStorage = localStorage.getItem("bgColor");
  const mainElement = document.querySelector("main");
  mainElement.style.backgroundColor = getBgStorage;
  return getBgStorage;
}
bgColorStorage();

function familyFont() {
  const familyFont = document.querySelector("#font-type");
  familyFont.addEventListener("input", function (event) {
    webStorageValues.setFontFamilyStorage("family", familyFont.value);
    familyFontStorage();
  });
  familyFont.value = familyFontStorage();
}
familyFont();

function familyFontStorage() {
  const getFamiluFont = localStorage.getItem("family");
  const paragraph = document.querySelectorAll("p");
  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.fontFamily = getFamiluFont;
  }
  return getFamiluFont;
}
familyFontStorage();

function spaceLine() {
  const spaceLine = document.querySelector("#space-line");
  spaceLine.addEventListener("input", function () {
    webStorageValues.setSpaceLineStorage("space", spaceLine.value);
    spaceLineStorage();
  });
  spaceLine.value = spaceLineStorage();
}
spaceLine();

function spaceLineStorage() {
  const getValeuSpace = localStorage.getItem("space");
  const paragraph = document.querySelectorAll("p");

  for (let index = 0; index < paragraph.length; index += 1) {
    paragraph[index].style.lineHeight = `${getValeuSpace}px`;
  }
  return getValeuSpace;
}
spaceLineStorage();

const webStorageValues = {
  setColorStorage: function (color, colorValue) {
    localStorage.setItem(color, colorValue);
  },
  setSizeFontStorage: function (size, value) {
    localStorage.setItem(size, value);
  },
  setBgColorStorage: function (color, bg) {
    localStorage.setItem(color, bg);
  },
  setFontFamilyStorage: function (type, family) {
    localStorage.setItem(type, family);
  },
  setSpaceLineStorage: function (space, size) {
    localStorage.setItem(space, size);
  },
};
