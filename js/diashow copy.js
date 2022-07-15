let pictureURLs = [
  "../images/Maya_1.jpeg",
  "../images/Maya_2.jpeg",
  "../images/Maya_3.jpeg",
  "../images/Mika_Marco_1.jpeg",
  "../images/Mika_Marco_2.jpeg",
  "../images/Mika_Marco_3.jpeg",
  "../images/Mika_Marco_4.jpeg",
  "../images/Mika_Marco_5.jpeg",
  "../images/Mika_Marco_6.jpeg",
  "../images/Andi_1.jpeg",
  "../images/Andi_2.jpeg",
  "../images/Andi_3.jpeg",
  "../images/Andi_4.jpeg",
  "../images/Darsteller_1.jpeg",
  "../images/Darsteller_2.jpeg",
  "../images/Darsteller_3.jpeg",
  "../images/Gruppe_1.jpeg",
  "../images/Gruppe_2.jpeg",
  "../images/Gruppe_3.jpeg",
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

