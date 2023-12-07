import { addProjects } from ".";
import { toDoManager } from "./toDoFunctions";
let tasks = JSON.parse(localStorage.getItem("tasks"));
let proj = JSON.parse(localStorage.getItem("projects"));
function showCover(){
    let coverDiv = document.createElement("div");
    coverDiv.id = "cover-div";
    document.body.style.overflowY = 'hidden';
    document.body.append(coverDiv);
}
function hideCover() {
    document.getElementById('cover-div').remove();
    document.body.style.overflowY = '';
}
export function showPrompt(e)
{
    let container = document.querySelector(".edit-form-container");
    let form = document.querySelector("#edit-form");
    let task = JSON.parse(localStorage.getItem("tasks"));
    let index = +e.parentElement.parentElement.getAttribute("data-index");
    let type = e.parentElement.parentElement.getAttribute("data-projectType");
    showCover();
    function complete(vlaue)
    {
        hideCover();
        container.style.display = "none";
        document.onkeydown = null;

        if (vlaue==null) {
            return;
        }
        // console.log(tasks);
        // console.log(proj);
    };
    form.onsubmit = function() {
        let title = form.elements['task-title'].value;
        if(title == "") return false;
        console.log(title);

        task[type][index].name = form.elements['task-title'].value;
        task[type][index].desc = form.elements['task-desc'].value;
        task[type][index].dueDate = form.elements['due-date'].value;;
        task[type][index].priority = document.querySelector(".edit-task-priority-container input:checked").value;
        localStorage.setItem("tasks",JSON.stringify(task));
        complete(null);
        toDoManager.loadToDos()
        return false;
    };
    form.cancel.onclick = function(){
        complete(null);
    };
    document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
    };
    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];
    // console.log(form.elements);
    lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
    };

    firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };

    form.elements['task-title'].value = task[type][index].name;
    form.elements['task-desc'].value = task[type][index].desc;
    form.elements['due-date'].value = task[type][index].dueDate;
    document.querySelector(`#edit-task-${task[type][index].priority}_prio`).checked = true; 
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = '100%'
    // container.style.width = '100%'

    form.elements['task-title'].focus();
}

export function showProjectPrompt()
{
    let container = document.querySelector(".add-project-form-container");
    let form = document.querySelector("#add-project-form");
    showCover();
    function complete(vlaue)
    {
        hideCover();
        container.style.display = "none";
        document.onkeydown = null;
        tasks[form.projectname.value.toLowerCase()]=[];
        proj.projects.push(form.projectname.value.toLowerCase());
        localStorage.setItem("tasks",JSON.stringify(tasks));
        localStorage.setItem("projects",JSON.stringify(proj));
        addProjects(form.projectname.value.toLowerCase());
        
        form.projectname.value = "";
        if (vlaue==null) {
            return;
        }
        // console.log(tasks);
        // console.log(proj);
    };
    form.onsubmit = function() {
        let projectName = form.projectname.value;
        if(projectName == "") return false;
        console.log(projectName);
        complete(null);
        return false;
    };
    form.cancel.onclick = function(){
        complete(null);
    };
    document.onkeydown = function(e) {
        if (e.key == 'Escape') {
          complete(null);
        }
    };
    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];
    lastElem.onkeydown = function(e) {
        if (e.key == 'Tab' && !e.shiftKey) {
          firstElem.focus();
          return false;
        }
    };

    firstElem.onkeydown = function(e) {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    };
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = '100%'
    // container.style.width = '100%'
    form.elements.projectname.focus();
}