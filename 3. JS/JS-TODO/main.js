const inputText = document.querySelector(".input-text");
const addBtn = document.querySelector(".add-button");
const list = document.querySelector(".list");
const likeButtons = document.querySelectorAll(".like"); // 여러개 선택시 All!

function addItem() {
  //trim은 스페이스 공백도 제거함
  if (inputText.value.trim() === "") {
    return;
  }

  // 좋아요 버튼
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");
  like.classList.add("like"); // 4. 클래스이름 주기
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border"; // 5.likeIcon에 텍스트 요소 추가
  like.appendChild(likeIcon); // 6. like 안에 자식요소로 likeIcon 넣기

  // 텍스트 item
  const item = document.createElement("span");
  item.classList.add("item");
  item.innerText = inputText.value;

  // check와 manage
  const manage = document.createElement("span");
  const checkIcon = document.createElement("i");
  const clearIcon = document.createElement("i");

  manage.classList.add("manage");
  checkIcon.classList.add("material-icons", "check");
  clearIcon.classList.add("material-icons", "clear");

  checkIcon.innerText = "check";
  clearIcon.innerText = "clear";

  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  const li = document.createElement("li"); // 1. HTML li 요소 만들기
  //li.innerText = inputText.value; // 2. li에 inputText Value 넣기

  // event - like
  like.addEventListener("click", function (e) {
    console.log(e);
    const target = e.target;
    // if ((target.innerText = "favorite")) {
    //   target.innerText = "favorite_border";
    // } else {
    //   target.innerText = "favorite";
    // }

    // 삼항연산자 -> 조건 ? 참 : 거짓
    const text =
      target.inputText === "favorite" ? "favorite_border" : "favorite";
    target.innerText = text;
  });
  // checked 이벤트
  checkIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    target.classList.add("done");
    console.log(e);
  });

  // clear 이벤트
  clearIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    list.removeChild(target);
  });

  li.appendChild(like); // 7. li의 자식 요소로 like 넣기
  li.appendChild(item);
  li.appendChild(manage);
  list.appendChild(li); // 3. list에 자식요소로 li 태그 넣기

  inputText.value = ""; // inputText 초기화
  inputText.focus();
}

// 클릭 이벤트
inputText.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    addItem();
  }
});

// 엔터 이벤트
addBtn.addEventListener("click", function () {
  console.log(inputText.value);
  addItem();
});
