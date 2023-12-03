import './styles.css';
import tasks from './localStorage';
import currentSpaceTodos from './localStorage';
import { toDoManager } from './toDoFunctions';

// console.log('ritik gandu');
let a = document.querySelector('.add-task-container');
let d = document.querySelector('.add-task-input-container input');
let navButtons = document.querySelectorAll(".todo-navigation-link-container");
toDoManager.loadToDos();
// console.log(navButtons);
navButtons.forEach((e)=>{
    e.addEventListener('click',function(){
        // console.log(this.children[0].id);
        toDoManager.currentWorkingSpaceSetter(this.children[0].id);
        toDoManager.loadToDos();
        console.log(toDoManager.currentWorkingSpaceGetter());
        
    });
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