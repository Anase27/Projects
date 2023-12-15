import "./styles.css";
import { toDoManager } from "./toDoFunctions";
import { showProjectPrompt, showNotesPrompt } from "./modal";

let d = document.querySelector(".add-task-input-container input");
let fixedNavButtons = document.querySelectorAll(
	".fixed-navigation-link-container"
);
let datePicker = document.querySelector("#due-date");
let projectList = document.querySelector(".projects-list-container");
let projectAddButton = document.querySelector(".add-project-icon");
let notesAddButton = document.querySelector(
	".task-edit-add-notes-container button"
);
console.log(notesAddButton);
let newD = new Date();

let proj = JSON.parse(localStorage.getItem("projects"));
proj["projects"].forEach((e) => {
	addProjects(e);
});
projectAddButton.addEventListener("click", () => {
	// console.log("hjkalf");
	showProjectPrompt();
});
export function addProjects(e) {
	let projectLi = document.createElement("li");
	projectLi.className = "todo-navigation-link-container";
	let projectSpan = document.createElement("span");
	projectSpan.id = e;
	projectSpan.textContent = e;
	projectLi.addEventListener("click", function () {
		toDoManager.currentWorkingSpaceSetter(this.children[0].id);
		toDoManager.loadToDos();
		console.log(toDoManager.currentWorkingSpaceGetter());
	});
	projectLi.appendChild(projectSpan);
	projectList.appendChild(projectLi);
}

let currDate = `${newD.getFullYear()}-${
	+("0" + newD.getMonth()).slice(-2) + 1
}-${("0" + newD.getDate()).slice(-2)}`;
datePicker.value = currDate;
datePicker.min = currDate;
console.log(currDate);

toDoManager.loadToDos();
// console.log(navButtons);
fixedNavButtons.forEach((e) => {
	e.addEventListener("click", function () {
		// console.log(this.children[0].id);
		toDoManager.currentWorkingSpaceSetter(this.children[0].id);
		let currentSpace = toDoManager.currentWorkingSpaceGetter();
		console.log(toDoManager.currentWorkingSpaceGetter());
		if (currentSpace == "notes") {
			toDoManager.loadNotes();
			document.querySelector(
				".task-edit-add-notes-container"
			).style.gridTemplateRows = "1fr";
			document.querySelector(".add-task-container").style.gridTemplateRows =
				"0fr 0fr 0fr";
		} else {
			toDoManager.loadToDos();
			document.querySelector(
				".task-edit-add-notes-container"
			).style.gridTemplateRows = "0fr";
			document.querySelector(".add-task-container").style.gridTemplateRows =
				"1fr 1fr 1fr";
		}
	});
});

notesAddButton.addEventListener("click", () => {
	showNotesPrompt();
});
d.addEventListener("keydown", (e) => {
	// console.log(d.value);
	if (e.keyCode === 13) {
		let s = d.value.trim();
		// s=s.trim();

		if (s.length > 0) {
			// task.textContent = s;
			// b.appendChild(task);
			toDoManager.Addtodo();
		}
		d.value = "";
	}
});
// localStorage.clear();
