let pictureURLs = [
  "../images/w(1).png",
  "../images/w(2).png",
  "../images/w(3).png",
  "../images/w(1).jpg",
];

const pic = [
  document.getElementById("diashow1"),
  document.getElementById("diashow2"),
  document.getElementById("diashow3"),
];

pictureURLs.forEach((e, i) => {
  pic[0].src = e;
  pictureURLs[i] = pic[0].src;
});

pic.forEach((e, i) => {
  e.src = pictureURLs[i];
});

pic[0].addEventListener("click", () => {
  const i = pictureURLs.indexOf(pic[0].src);
  pic[2].src = pic[1].src;
  pic[1].src = pic[0].src;
  pic[0].src =
    i === 0 ? pictureURLs[pictureURLs.length - 1] : pictureURLs[i - 1];
});

pic[2].addEventListener("click", () => {
  const i = pictureURLs.indexOf(pic[2].src);
  pic[0].src = pic[1].src;
  pic[1].src = pic[2].src;
  pic[2].src =
    i === pictureURLs.length - 1 ? pictureURLs[0] : pictureURLs[i + 1];
});
