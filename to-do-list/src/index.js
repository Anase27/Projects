import './styles.css';
import tasks from './localStorage';
import currentSpaceTodos from './localStorage';
import { toDoManager } from './toDoFunctions';
import { showProjectPrompt } from './modal';

let a = document.querySelector('.add-task-container');
let d = document.querySelector('.add-task-input-container input');
let fixedNavButtons = document.querySelectorAll(".fixed-navigation-link-container");
let datePicker = document.querySelector('#due-date');
let projectList = document.querySelector(".projects-list-container");
let projectAddButton = document.querySelector(".add-project-icon");
let newD = new Date();

let proj = JSON.parse(localStorage.getItem("projects"));
// console.log(proj);
proj["projects"].forEach((e)=>{
    addProjects(e);
    // let projectLi = document.createElement('li');
    // projectLi.className = "todo-navigation-link-container";
    // let projectSpan = document.createElement("span");
    // projectSpan.id = e;
    // projectSpan.textContent = e;
    // projectLi.appendChild(projectSpan);
    // projectList.appendChild(projectLi);
});
projectAddButton.addEventListener("click",()=>{
    // console.log("hjkalf");
    showProjectPrompt();
})
export function addProjects(e){
    let projectLi = document.createElement('li');
    projectLi.className = "todo-navigation-link-container";
    let projectSpan = document.createElement("span");
    projectSpan.id = e;
    projectSpan.textContent = e;
    projectLi.addEventListener('click',function(){
        toDoManager.currentWorkingSpaceSetter(this.children[0].id);
        toDoManager.loadToDos();
        console.log(toDoManager.currentWorkingSpaceGetter());
    });
    projectLi.appendChild(projectSpan);
    projectList.appendChild(projectLi);


}
// navButtons = document.querySelectorAll(".todo-navigation-link-container");
// let day = ("0" + newD.getDate()).slice(-2);
// let month = ("0" + (newD.getMonth())).slice(-2);
let currDate =  `${newD.getFullYear()}-${+(("0"+newD.getMonth()).slice(-2))+1}-${("0"+newD.getDate()).slice(-2)}`;
datePicker.value = currDate;
datePicker.min = currDate;
console.log(currDate);

toDoManager.loadToDos();
// console.log(navButtons);
fixedNavButtons.forEach((e)=>{
    e.addEventListener('click',function(){
        // console.log(this.children[0].id);
        toDoManager.currentWorkingSpaceSetter(this.children[0].id);
        toDoManager.loadToDos();
        console.log(toDoManager.currentWorkingSpaceGetter());
    }
    );
})

d.addEventListener('keydown', (e) => {
    // console.log(d.value);
    if(e.keyCode === 13)
    {
        let task = document.createElement('p');
        let s = d.value.trim();
        // s=s.trim();
        
        if(s.length>0)
        {
            // task.textContent = s;
            // b.appendChild(task);
            toDoManager.Addtodo();
        }
        d.value = "";
        
    }
});
// localStorage.clear();