let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  let position = window.scrollY;
  // console.log(position);
  // 스크롤 제일 위 -> 0, 내리면서 -> 커짐
  if (position <= 5) {
    arrow.classList.toggle("fade-in");
    arrow.classList.toggle("fade-out");
  }
})