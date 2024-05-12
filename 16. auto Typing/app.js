// 변수선언
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = [
  "호기심이 많아요", 
  "덕질하는 걸 좋아해",
  "책읽는걸 좋아해", 
  "기록하는 걸 좋아해",
  "늘 새로워 지고 싶어해",
  "그래서 좋아하는 숫자는 0과 1"
];
let typingdelay = 200;
let erasingdelay = 200;
let newTypingDelay = 2000;
let index = 0;
let charIndex = 0;

// 함수 생성 
function type() {
  if(charIndex < words[index].length) {
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    
    setTimeout(type, typingdelay);
  } else {
    setTimeout(erase, newTypingDelay);
  }
}

type();

function erase() {
  if(charIndex > 0) {
    typedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingdelay);
  } else {
    index++;
    if(index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingdelay + 1100);
  }
}
