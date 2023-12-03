// import * as n from './index.js'
// localStorage.clear();
let tasks = JSON.parse(localStorage.getItem("tasks")) || {
    "home": [],
    "day": [],
    "week": [],
    "gym":[],
    "study":[],
    "groceries":[],
    "notes":[]

};
localStorage.setItem("tasks",JSON.stringify(tasks));
// if (!localStorage.getItem("tasks")) {
    
// }

// export tasks;
export function fetchStorage()
{
    tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks;
}
export function currentSpaceTodos(name)
{
    // tasks = 
    return tasks[name];
}
export default tasks;