// import * as n from './index.js'
// localStorage.clear();
const tasks = JSON.parse(localStorage.getItem("tasks")) || {
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
export function currentSpaceTodos(name)
{
    return tasks[name];
}
export default tasks;