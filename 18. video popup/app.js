const btn = document.querySelector(".img-container");
const trailerContainer = document.querySelector(".trailer-container");
const video = document.querySelector("video");
const closeIcon = document.querySelector(".close-icon")

btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
})

closeIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
})