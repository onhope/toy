// close, open, modal 변수 선언
const close = document.getElementById('close');
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// 이벤트 리스터
// open 을 클릭하면 modal에 show-modal 클래스 추가 
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
})
// close 을 클릭을 하면 modal에 show-modal 클래스 제거
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
})
// window click 이벤트 
// 이거 왜 하는지 모르겠음 -> 알겠음. 윈도우 창을 클릭을 하면 팝업 창이 닫히도록 설정 하는 것임
window.addEventListener("click", (e) => {
  e.target === modal ? 
    modal.classList.remove("show-modal") 
    : false;
})