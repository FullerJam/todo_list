import '../main.scss';
import img1 from '../assets/top-left-elips.png';
import img2 from '../assets/bottom-right-elips.png';
import todos from "./todos";
import Todo from './Components/Todo';
const uuidv1 = require('uuid/v1');


console.log(todos);

const view = ` <img
src="${img1}"
id="background-left"
alt="background"
/>
<img
src="${img2}"
id="background-right"
alt="background"
/>

<div class="wrapper">
<div class="todolist">
  <h1>WEB DESIGN STUDENT TO DO LIST</h1>
  <input type="text" id="todoInput" placeholder="What do you need to do today...." />
  <div class="list">
  </div>
  <!-- /.list -->
</div>
<!-- /.todolist -->
</div>
<!-- /.wrapper -->`


window.addEventListener("DOMContentLoaded", render(todos));
document.addEventListener('keydown', addTask);
 
function addTask(e){
  const newTask = document.querySelector("#todoInput").value;
  console.log(newTask)
  if (newTask != "" && e.key == "Enter"){
    const newTodos = [...todos, {text: newTask, created:"Wed Jan 22 2020 07:03:0", completed: false}];
    render(newTodos);
  }
};



function render(todos) {
  
  const tds = [...todos];

  let objectArrayWithId = tds.map(item => ({...item, id:uuidv1()}))

  console.log(objectArrayWithId);

  const handleCloseClick = e => {
    //console.log(e.target.dataset);
    render(objectArrayWithId.filter(c => e.target.dataset.outerItem != c.id));
  };
  
  document.querySelector("#app").innerHTML = view;
  let htmlList = objectArrayWithId.map(item => Todo(item.text, item.id));
  
  document.querySelector(".list").innerHTML = htmlList.join("");
  
  document
  .querySelectorAll(".close")
  .forEach(e => e.addEventListener("click", handleCloseClick));
}

