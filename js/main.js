import '../main.scss';
import img1 from '../assets/top-left-elips.png';
import img2 from '../assets/bottom-right-elips.png';
import todos from "./todos";
import Todo from './Components/Todo';

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

function render(todos) {

 const tds = [...todos];

 const handleCloseClick = e => {
 
    render(tds.filter(c => e.target.dataset.outerItemId != c.id));
 };

 document.querySelector("#app").innerHTML = view;
 let htmlList = todos.map(item => Todo(item.text, item.id));
 
 document.querySelector(".list").innerHTML = htmlList.join("");
 
 document
 .querySelectorAll(".close")
 .forEach(e => e.addEventListener("click", handleCloseClick));
}


// function render() {
//     console.log('ready');
//     const div = document.querySelector('#app');
//     div.innerHTML = view

//     let htmlList = todos.map((item) => Todo(item.text, item.id)).join('');
//     document.querySelector('.list').innerHTML = htmlList;
// }

// window.addEventListener('DOMContentLoaded', render);