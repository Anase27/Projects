import tasks from "./localStorage";
import {currentSpaceTodos,fetchStorage} from './localStorage';
const taskN = document.querySelector('.add-task-input-container input');
const taskD = document.querySelector('.add-task-desc input');
const taskDDate = document.querySelector('.add-task-date-edit input');
let taskPrio = document.querySelector('.add-task-priority input:checked');
// let deletebuttons = document.querySelectorAll('.')
let currentWorkingSpace = "home";


const taskContainer = document.querySelector('.todo-tasks-container');
export const toDoManager =(function () {
    function loadToDos()
    {
        taskContainer.textContent = "";
        let space = currentWorkingSpaceGetter();
        console.log(currentSpaceTodos(space));
        if(space=="home"){
            for(const name in tasks)
            {
                console.log(name);
                currentSpaceTodos(name).forEach((el,i)=>{
                    let todoToAdd = createToDo(el.name,el.desc,el.priority,el.dueDate,name,i);
                    taskContainer.appendChild(todoToAdd);
                });
            }
        }
        
        else{
            currentSpaceTodos(space).forEach((el,i)=>{
                let todoToAdd = createToDo(el.name,el.desc,el.priority,el.dueDate,space,i);
                taskContainer.appendChild(todoToAdd);
            });
        }
    }

    function currentWorkingSpaceSetter(newspace) {
        currentWorkingSpace = newspace;
    }
    function currentWorkingSpaceGetter() {
        return currentWorkingSpace;
    }
    function createToDo(name="name",desc="demo",priority="high",date="20/10/2003",type,index)
    {
        // task tile for each task
        let taskBox = document.createElement('div');
        taskBox.className = "task-tile";
        taskBox.setAttribute("data-index",index);
        taskBox.setAttribute("data-projectType",type);

        // task tile checkbox container
        let taskCheckBoxContainer = document.createElement('div');
        taskCheckBoxContainer.className = "task-status-container";
        // task checkbox
        let taskCheckBox = document.createElement('div');
        taskCheckBox.className = "task-status";
        // appending taskstatus into its container
        taskCheckBoxContainer.appendChild(taskCheckBox); 


        // task name and description
        let taskNameDesc = document.createElement('div');
        taskNameDesc.className = "task-info-container";
        // task name or heading
        let taskName = document.createElement('p');
        taskName.className = "task-name";
        // taskName.textContent = taskN.value;
        // taskName.textContent = el.name;
        taskName.textContent = name;
        // task description
        let taskDesc = document.createElement('p');
        taskDesc.className = "task-desc";
        // taskDesc.textContent= taskD.value;
        // taskDesc.textContent= el.desc;
        taskDesc.textContent= desc;
        // appending name and desc into its container
        taskNameDesc.appendChild(taskName);
        taskNameDesc.appendChild(taskDesc);
        


        // task tile buttons container
        let taskButtonContainer = document.createElement('div');
        taskButtonContainer.className = "task-button-container";
        // task delete button
        let taskDelete = document.createElement('div');
        taskDelete.className = "task-delete-button";
        let span = document.createElement('span');
        span.className = "iconify";
        span.setAttribute("data-icon","ph:x");
        // appending delete button into its container
        taskDelete.appendChild(span);
        taskDelete.addEventListener('click',removeTask.bind(taskDelete));
        taskButtonContainer.appendChild(taskDelete);
        
        // task due date container
        let dueDateContainer = document.createElement('div');
        dueDateContainer.className = "task-due-container";
        // task due date
        let taskDate = document.createElement('p');
        taskDate.className = "task-due-date";
        // taskDate.textContent = taskDDate.value;
        // taskDate.textContent = el.dueDate;
        taskDate.textContent = date;
        // appending task delete into its container
        dueDateContainer.appendChild(taskDate);


        // task priority
        let taskPriority = document.createElement('div');
        taskPriority.className = "task-priority";

        // setting classname by priority
        // taskPrio = document.querySelector('.add-task-priority input:checked');
        switch (priority) {
            case "high":
                taskPriority.classList.add('highPriority');
                break;

            case "med":
                taskPriority.classList.add('midPriority');
                break;
                
            default:
                taskPriority.classList.add('lowPriority');
                break;
        }

        
        // appening all children to the parent(task-tile) container
        [taskCheckBoxContainer,
        taskNameDesc,
        taskButtonContainer,
        dueDateContainer,
        taskPriority].forEach(e=>{
                taskBox.appendChild(e);
            });

            return taskBox;
    }

    function Addtodo()
    {
        taskPrio = document.querySelector('.add-task-priority input:checked');
        let space = currentWorkingSpaceGetter();
        // adding to the storage
        populateStorage(taskN.value,taskD.value,taskPrio.value,taskDDate.value,currentWorkingSpaceGetter());
        fetchStorage();
        // create a todo
        let todoToAdd = createToDo(taskN.value,taskD.value,taskPrio.value,taskDDate.value,currentWorkingSpaceGetter());
        // adding to the page
        taskContainer.appendChild(todoToAdd);


    }

    function removeTask() {
        console.log(typeof +this.parentElement.parentElement.getAttribute("data-index"));
        let index = +this.parentElement.parentElement.getAttribute("data-index");
        // typeof this.parentElement.parentElement.getAttribute("data-index");
        taskContainer.removeChild(this.parentElement.parentElement);
        tasks[this.parentElement.parentElement.getAttribute("data-projectType")].splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }



    function populateStorage(name,desc,priority,date,type,status="pending")
    {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(tasks);
        tasks[type].push({
            "name":name,
            "desc":desc,
            "priority":priority,
            "dueDate":date,
            "type":type,
            "status": status
        });
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }

    return {
        loadToDos,
        createToDo,
        Addtodo,
        currentWorkingSpaceGetter,
        currentWorkingSpaceSetter,
        removeTask
    }
}());