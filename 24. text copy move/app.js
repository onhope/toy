const copyBtn = document.querySelector(".copytBtn");
const moverBtn = document.querySelector(".moverBtn");
const copyText = document.querySelector(".copyTxt");
const finalText = document.querySelector(".finalTxt");
const output = document.querySelector(".output");

moverBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
})

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToMover(temp);
})

copyText.addEventListener('click', () => {
  this.select();
})

finalText.addEventListener("click", () => {
  this.select();
})

function copyToMover(str) {
  const outputContainer = document.querySelector('.output-container');
  const textarea = document.createElement('textarea');
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select();
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>복사 완료!</h3>`
  output.classList.add('added');
  setTimeout(() => {
    output.classList.toggle('added');
    output.textContent = '';
  }, 2000);
}