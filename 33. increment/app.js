let conutEl = document.getElementById('count');
let saveEl = document.getElementById("save");
let incremeBtn = document.querySelector(".increment-btn");
let saveBtn  =document.querySelector(".save-btn");

let count = 0;

incremeBtn.addEventListener("click", () => {
  count+=1;
  conutEl.textContent  = count;
})

saveBtn.addEventListener("click", () => {
  let counterStr = count + " , ";
  saveEl.textContent += counterStr;
  conutEl.textContent = 0;
  count = 0;
})