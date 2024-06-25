const images = document.querySelectorAll("img");
const imageWrapper = document.querySelector("#fullImg");
const close = document.querySelector("span");
const wrapper = document.querySelector("#wrapper");

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
  imageWrapper.src = pic;
}
