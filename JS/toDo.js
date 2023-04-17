const toDoform = document.getElementById("toDo-form");
const toDoInput = toDoform.querySelector("input");
const TODOS_KEY = "toDos";
let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null ) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

toDoform.addEventListener("submit",handleToDoSubmit);

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value="";
  const newToDoObj = {
    text:newToDo,
    id:Date.now()
  }
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  span.addEventListener("click",checkingToDo);

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo);
  
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li); // greetings.js -- line 11
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function checkingToDo(event) {
  // const span = event.path[0]; //아래와 같음
  const span = event.target;
  span.classList.toggle("strikethrough");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDoObj) => toDoObj.id !== parseInt(li.id));
  //DOM에서는 삭제되었지만 변수로서의 li에서는 li.id 접근 가능
  //Element의 id는 문자열이기 때문에 숫자로 변환 필요
  saveToDos();
}