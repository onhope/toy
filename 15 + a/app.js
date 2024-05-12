const btn = document.querySelector("#btn");
const boxes = document.querySelectorAll(".box")
const hexCodes = document.querySelectorAll(".hex-code");
const bgs = document.querySelectorAll(".bg")

function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (i=0; i<6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

btn.addEventListener("click", () => {
  bgs.forEach(bg => {
    // let hex = randomColor();    
    bg.style.backgroundColor = randomColor();
    // hexCodes.forEach(hexCode => {
    //   bg.style.backgroundColor = randomColor();
    //   hexCode.innerHTML = randomColor();
    // })  
  });
})
