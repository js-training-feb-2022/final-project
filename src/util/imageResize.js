export default function imageResize(imgLink) {
  if (imgLink.includes("original")) {
    imgLink = imgLink.replace("/original", "").split("V1");
    imgLink.splice(imgLink.length - 1, 1, "_UX256_CR0,3,256,352_AL.jpg");
    return imgLink.join("V1");
  } else return imgLink;
}