const loadingText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;
// 0.3초 간격으로 blurring 함수 실행
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if(load > 99) {
    clearInterval(int);
  }

  loadingText.innerHTML = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_max, in_min, out_max, out_min) => {
  return ((num - in_max) * (out_max - out_min)) / (in_max - in_min) + out_max;
}