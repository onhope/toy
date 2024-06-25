const images = document.querySelectorAll("img");
const close = document.querySelector("span");
const wrapper = document.querySelector("#wrapper");
const fullImg = document.querySelector("#fullImg");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`./image/img (${index}).jpg`);
  })
})

close.addEventListener("click", () => {
  wrapper.style.display = "none";
})

function openModal(pic) {
  wrapper.style.display = "flex";
  fullImg.src = pic;
}
