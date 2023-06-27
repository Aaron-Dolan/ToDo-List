var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  var div = document.createElement("div");
  div.classList.add("wrapper");
  div.append(li, delButton);
  li.classList.add("task");
  li.textContent = input.value;
  input.value = "";
  delButton.classList.add("delete");
  delButton.textContent = "Del";
  ul.appendChild(div);
}

function inputLength() {
  return input.value.trim().length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function toggleTaskDone(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function deleteListElement(event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
}

function handleUlClick(event) {
  toggleTaskDone(event);
  deleteListElement(event);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
