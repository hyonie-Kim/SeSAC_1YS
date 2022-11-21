const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

//console.log({ inputText });

addButton.addEventListener("click", function () {
  //   like
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");
  like.classList.add("like");
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border";
  like.appendChild(likeIcon);

  //   item
  const item = document.createElement("span");
  item.innerText = inputText.value;

  const li = document.createElement("li");
  li.appendChild(like);
  li.appendChild(item);
  list.appendChild(li);
});
