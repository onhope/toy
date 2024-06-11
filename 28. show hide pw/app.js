const input = document.querySelector("input");
const eyeIcon = document.querySelector("#eye-icon");

eyeIcon.addEventListener("click", () => {
  //  방법 1. if
  // if(input.type === 'password') {
  //   input.type = 'Text';
  // } else {
  //   input.type = 'password';
  // }

  // 방법 2. 리팩토링
  input.type === 'password' ?
    (input.type = 'text')
    : (input.type = 'password');


})