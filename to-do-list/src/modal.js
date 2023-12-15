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
    container.style.width = '100%';
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
        
        form.projectname.value = "";
        if (vlaue==null) {
            return;
        }
    };
    form.onsubmit = function() {
        let projectName = form.projectname.value;
        if(projectName == "") return false;
        console.log(projectName);
        tasks[form.projectname.value.toLowerCase()]=[];
        proj.projects.push(form.projectname.value.toLowerCase());
        localStorage.setItem("tasks",JSON.stringify(tasks));
        localStorage.setItem("projects",JSON.stringify(proj));
        addProjects(form.projectname.value.toLowerCase());
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
    container.style.width = '100%';
    form.elements.projectname.focus();
}

export function showNotesPrompt(){
    let container = document.querySelector(".add-note-form-container");
    let form = document.querySelector('#add-note-form');
    // let note = document.querySelector('#note-name-input');
    let task = JSON.parse(localStorage.getItem("tasks"));
    let type = toDoManager.currentWorkingSpaceGetter();
    
    showCover();
    
    function complete(vlaue)
    {
        hideCover();
        container.style.display = "none";
        document.onkeydown = null;
        task[type].push({
            "note": `${form.notename.value}`,
            "type": type
        });
        console.log(task);
        localStorage.setItem("tasks",JSON.stringify(task));
        form.notename.value = "";
        toDoManager.loadNotes();
        if (vlaue==null) {
            return;
        }
    }
    
    form.onsubmit = function() {
        let note = form.notename.value;
        if(note == "") return false;
        console.log(note);
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
    container.style.width = '100%';
    form.elements.notename.focus();
}
export function showEditNotesPrompt(e){
    let container = document.querySelector(".add-note-form-container");
    let form = document.querySelector('#add-note-form');
    // let note = document.querySelector('#note-name-input');
    let task = JSON.parse(localStorage.getItem("tasks"));
    let type = toDoManager.currentWorkingSpaceGetter();
    let parent = e.parentElement.parentElement;
    showCover();

    
    function complete(vlaue)
    {
        hideCover();
        container.style.display = "none";
        document.onkeydown = null;
        
        //     "note": `${form.notename.value}`,
        //     "type": type
        // });
        // console.log(task);
        form.notename.value = "";
        toDoManager.loadNotes();
        if (vlaue==null) {
            return;
        }
    }
    
    form.onsubmit = function() {
        let note = form.notename.value;
        if(note == "") return false;
        // console.log(note);
        task[type][parent.getAttribute("data-index")].note = form.notename.value;
        localStorage.setItem("tasks",JSON.stringify(task));
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
    form.notename.value = task[type][parent.getAttribute("data-index")].note;
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = '100%';
    form.elements.notename.focus();
}