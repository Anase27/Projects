import tasks from "./localStorage";
import { currentSpaceTodos, fetchStorage } from "./localStorage";
import { showPrompt, showEditNotesPrompt } from "./modal";
import colcade from "colcade";
const taskN = document.querySelector(".add-task-input-container input");
const taskD = document.querySelector(".add-task-desc input");
const taskDDate = document.querySelector(".add-task-date-edit input");
let taskPrio = document.querySelector(".add-task-priority input:checked");
// let deletebuttons = document.querySelectorAll('.')
let currentWorkingSpace = "home";

const taskContainer = document.querySelector(".todo-tasks-container");
export const toDoManager = (function () {
	function loadNotes() {
		taskContainer.textContent = "";
		let space = currentWorkingSpaceGetter();
		console.log(currentSpaceTodos(space));
		let notesGridContainer = document.createElement("div");
		notesGridContainer.className = "grid";
		for (let i = 1; i <= 3; i++) {
			let noteGridCol = document.createElement("div");
			noteGridCol.className = "grid-col";
			noteGridCol.classList.add(`grid-col--${i}`);
			notesGridContainer.appendChild(noteGridCol);
		}
		// var grid = document.querySelector('.grid');
		// console.log(grid);
		var colc = new colcade(notesGridContainer, {
			columns: ".grid-col",
			items: ".grid-item",
		});

		// selector string as first argument
		// var colc = new colcade( '.grid', {
		//     columns: '.grid-col',
		//     items: '.grid-item'
		// });

		currentSpaceTodos(space).forEach((el, i) => {
			let noteTileContainer = document.createElement("div");
			noteTileContainer.className = "note-tile";
			noteTileContainer.classList.add("grid-item");
			noteTileContainer.setAttribute("data-index", i);
			noteTileContainer.setAttribute("data-projectType", el.type);

			let noteTileButtonContainer = document.createElement("div");
			noteTileButtonContainer.className = "note-tile-button-container";
			let noteDelete = document.createElement("div");
			noteDelete.className = "note-delete-button";
			let deleteSpan = document.createElement("span");
			deleteSpan.className = "iconify";
			deleteSpan.setAttribute("data-icon", "ph:x");
			noteDelete.addEventListener("click", removeNote.bind(noteDelete));
			noteDelete.appendChild(deleteSpan);

			let noteEdit = document.createElement("div");
			noteEdit.className = "note-edit-button";
			let editSpan = document.createElement("span");
			editSpan.className = "iconify";
			editSpan.setAttribute("data-icon", "clarity:edit-line");
			noteEdit.appendChild(editSpan);
			noteEdit.addEventListener("click", editNote.bind(noteEdit));

			noteTileButtonContainer.appendChild(noteDelete);
			noteTileButtonContainer.appendChild(noteEdit);

			let noteTileDescContainer = document.createElement("div");
			noteTileDescContainer.className = "note-tile-desc-container";
			let noteTileDesc = document.createElement("p");
			noteTileDesc.textContent = el.note;
			noteTileDescContainer.appendChild(noteTileDesc);

			noteTileContainer.appendChild(noteTileButtonContainer);
			noteTileContainer.appendChild(noteTileDescContainer);

			// notesGridContainer.appendChild(noteTileContainer);
			colc.prepend(noteTileContainer);
		});

		taskContainer.appendChild(notesGridContainer);
		// element as first argument
		// taskContainer.appendChild(notesContainer);
	}
	function loadToDos() {
		taskContainer.textContent = "";
		let space = currentWorkingSpaceGetter();
		console.log(currentSpaceTodos(space));
		let task = JSON.parse(localStorage.getItem("tasks"));
		// console.log(task);
		if (space == "home") {
			for (const name in task) {
				// console.log(name);
				currentSpaceTodos(name).forEach((el, i) => {
					let todoToAdd = createToDo(
						el.name,
						el.desc,
						el.priority,
						el.dueDate,
						el.status,
						name,
						i
					);
					taskContainer.appendChild(todoToAdd);
				});
			}
		} else {
			currentSpaceTodos(space).forEach((el, i) => {
				let todoToAdd = createToDo(
					el.name,
					el.desc,
					el.priority,
					el.dueDate,
					el.status,
					space,
					i
				);
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

	function createToDo(
		name = "name",
		desc = "demo",
		priority = "high",
		date = "20/10/2003",
		status = "pending",
		type,
		index
	) {
		// task tile for each task
		let taskBox = document.createElement("div");
		taskBox.className = "task-tile";
		taskBox.setAttribute("data-index", index);
		taskBox.setAttribute("data-projectType", type);

		// task tile checkbox container
		let taskCheckBoxContainer = document.createElement("div");
		taskCheckBoxContainer.className = "task-status-container";
		// task checkbox
		let taskCheckBox = document.createElement("div");
		taskCheckBox.className = "task-status";
		if(status === "completed")
		{
			taskCheckBox.classList.add("task-completed");
		}
		// adding event listerner to the task checkbox
		taskCheckBox.addEventListener("click", function () {
			toggleStatus(this);
		});
		// appending taskstatus into its container
		taskCheckBoxContainer.appendChild(taskCheckBox);

		// task name and description
		let taskNameDesc = document.createElement("div");
		taskNameDesc.className = "task-info-container";
		// task name or heading
		let taskName = document.createElement("p");
		taskName.className = "task-name";
		// taskName.textContent = taskN.value;
		// taskName.textContent = el.name;
		taskName.textContent = name;
		// task description
		let taskDesc = document.createElement("p");
		taskDesc.className = "task-desc";
		// taskDesc.textContent= taskD.value;
		// taskDesc.textContent= el.desc;
		taskDesc.textContent = desc;
		// appending name and desc into its container
		taskNameDesc.appendChild(taskName);
		taskNameDesc.appendChild(taskDesc);

		// task tile buttons container
		let taskButtonContainer = document.createElement("div");
		taskButtonContainer.className = "task-button-container";
		// task delete button
		let taskDelete = document.createElement("div");
		taskDelete.className = "task-delete-button";
		let deleteSpan = document.createElement("span");
		deleteSpan.className = "iconify";
		deleteSpan.setAttribute("data-icon", "ph:x");
		// appending delete button into its container
		taskDelete.appendChild(deleteSpan);
		taskDelete.addEventListener("click", removeTask.bind(taskDelete));
		// task edit button
		let taskEdit = document.createElement("div");
		taskEdit.className = "task-edit-button";
		let editSpan = document.createElement("span");
		editSpan.className = "iconify";
		editSpan.setAttribute("data-icon", "clarity:edit-line");
		// appending edit button into its container
		taskEdit.appendChild(editSpan);
		taskEdit.addEventListener("click", editTask.bind(taskEdit));
		taskButtonContainer.appendChild(taskEdit);
		taskButtonContainer.appendChild(taskDelete);

		// task due date container
		let dueDateContainer = document.createElement("div");
		dueDateContainer.className = "task-due-container";
		// task due date
		let taskDate = document.createElement("p");
		taskDate.className = "task-due-date";
		// taskDate.textContent = taskDDate.value;
		// taskDate.textContent = el.dueDate;
		taskDate.textContent = date;
		// appending task delete into its container
		dueDateContainer.appendChild(taskDate);

		// task priority
		let taskPriority = document.createElement("div");
		taskPriority.className = "task-priority";

		// setting classname by priority
		// taskPrio = document.querySelector('.add-task-priority input:checked');
		switch (priority) {
		case "high":
			taskPriority.classList.add("highPriority");
			break;

		case "med":
			taskPriority.classList.add("midPriority");
			break;

		default:
			taskPriority.classList.add("lowPriority");
			break;
		}

		// appening all children to the parent(task-tile) container
		[
			taskCheckBoxContainer,
			taskNameDesc,
			taskButtonContainer,
			dueDateContainer,
			taskPriority,
		].forEach((e) => {
			taskBox.appendChild(e);
		});

		return taskBox;
	}

	function toggleStatus(e) {
		e.classList.toggle("task-completed");
		let index = +e.parentElement.parentElement.getAttribute("data-index");
		let type = e.parentElement.parentElement.getAttribute("data-projectType");
		let task = JSON.parse(localStorage.getItem("tasks"));
		if (task[type][index].status == "pending") {
			task[type][index].status = "completed";
		} else {
			task[type][index].status = "pending";
		}
		localStorage.setItem("tasks", JSON.stringify(task));
	}

	function Addtodo() {
		taskPrio = document.querySelector(".add-task-priority input:checked");
		let space = currentWorkingSpaceGetter();
		// adding to the storage
		populateStorage(
			taskN.value,
			taskD.value,
			taskPrio.value,
			taskDDate.value,
			space
		);
		let task = fetchStorage();
		// create a todo
		let todoToAdd = createToDo(
			taskN.value,
			taskD.value,
			taskPrio.value,
			taskDDate.value,
			"pending",
			space,
			task[space].length - 1
		);
		// adding to the page
		taskContainer.appendChild(todoToAdd);
	}

	function editTask() {
		let e = this;
		showPrompt(e);
	}
	function editNote() {
		let e = this;
		// console.log(e.parentElement.parentElement);
		showEditNotesPrompt(e);
	}

	function removeTask() {
		console.log(
			typeof +this.parentElement.parentElement.getAttribute("data-index")
		);
		console.log(
			this.parentElement.parentElement.getAttribute("data-projectType")
		);
		let index = +this.parentElement.parentElement.getAttribute("data-index");
		taskContainer.removeChild(this.parentElement.parentElement);
		tasks[
			this.parentElement.parentElement.getAttribute("data-projectType")
		].splice(index, 1);
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}

	function removeNote() {
		console.log(typeof this.parentElement.parentElement.dataset.index);
		// console.log(this.parentElement.parentElement.getAttribute("data-projectType"));
		let index = +this.parentElement.parentElement.dataset.index;
		this.parentElement.parentElement.remove();
		tasks[this.parentElement.parentElement.dataset.projecttype].splice(
			index,
			1
		);

		// console.log(tasks[this.parentElement.parentElement.dataset.projecttype]);
		localStorage.setItem("tasks", JSON.stringify(tasks));
		loadNotes();
	}

	function populateStorage(
		name,
		desc,
		priority,
		date,
		type,
		status = "pending"
	) {
		const task = JSON.parse(localStorage.getItem("tasks"));
		// console.log(task);
		task[type].push({
			name: name,
			desc: desc,
			priority: priority,
			dueDate: date,
			type: type,
			status: status,
		});
		localStorage.setItem("tasks", JSON.stringify(task));
	}

	return {
		loadNotes,
		loadToDos,
		createToDo,
		Addtodo,
		currentWorkingSpaceGetter,
		currentWorkingSpaceSetter,
		removeTask,
	};
})();
