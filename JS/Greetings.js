const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const loginGuideMsg = document.querySelector("#loginGuideMsg")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);
const toDoForm = document.querySelector("#toDo-form");
const toDoList = document.querySelector("#toDo-list");

if (savedUserName === null ) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,loginInput.value);
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Welcome ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}