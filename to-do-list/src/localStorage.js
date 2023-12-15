/* eslint-disable no-undef */
// import * as n from './index.js'
// localStorage.clear();
let proj = JSON.parse(localStorage.getItem("projects")) || {
	projects: ["gym", "study", "grocery"],
};
let tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks == null) {
	tasks = {
		home: [],
		day: [],
		week: [],
		notes: [],
	};
	proj["projects"].forEach((e) => {
		// console.log(e);
		tasks[e] = [];
	});
}
localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.setItem("projects", JSON.stringify(proj));
// if (!localStorage.getItem("tasks")) {

// }

// export tasks;
export function fetchStorage() {
	tasks = JSON.parse(localStorage.getItem("tasks"));
	return tasks;
}
export function currentSpaceTodos(name) {
	// tasks =
	tasks = JSON.parse(localStorage.getItem("tasks"));
	return tasks[name];
}
export default tasks;
