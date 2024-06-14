const allLebels = document.querySelectorAll(".form-control label");

allLebels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("") // 문자열의 문자들이 한개씩 쪼개져서 배열로 반환
    .map((letter, index) => 
      `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
  .join("");
})