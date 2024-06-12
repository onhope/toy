const selectField = document.querySelector("#selectField");
const selectText = document.querySelector("#selectText");
const arrowIcon = document.querySelector("#arrowIcon");
const list = document.querySelector("#list");
const options = document.querySelectorAll(".options");

console.log(selectField);
console.log(selectText);
console.log(arrowIcon);
console.log(list);
console.log(options);

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
})

for(option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");  
  }
}