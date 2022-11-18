// DOM Document Object Model
// id, class 선택해서 불러오기
// const title = document.getElementById("title");
// const list = document.getElementsByClassName("list");

// querySelector
const title = document.querySelector("#title");
const list = document.querySelector(".list");
const items = document.querySelectorAll(".item");
const btn = document.querySelector("#btn");
const sesac = document.querySelector(".sesac");

// 스타일 효과
title.style.color = "red";
title.style.backgroundColor = "grey";
// DOM 제어 - 버튼 이름변경
btn.innerText = "Button";
// innerText와 innerHTML 차이 알기: 텍스트와 태그
title.innerHTML = "<input type='text' />";
// item remove
list.firstElementChild.remove();
list.lastElementChild.innerHTML = "<a>lastElementChild a태그</a>";

// 이벤트
btn.addEventListener("click", function () {
  alert("탕수육");
});

// 페이지 이동 중지 - 이벤트 객체를 받아오기
sesac.addEventListener("click", (e) => {
  //  이벤트가 작동하지않게 정지
  e.preventDefault();
  alert("새싹");
});

console.log("타이틀", title, list, items);
