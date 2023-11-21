/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


console.log('ritik gandu');
let a = document.querySelector('.add-task-container');
let d = document.querySelector('.add-task-container input');
let b = document.querySelector('.todo-tasks-container');
let k = document.querySelector('addtaskform');
a.addEventListener('keydown', (e) => {
    // console.log(d.value);
    if(e.keyCode === 13)
    {
        let task = document.createElement('p');
        task.textContent = ()=>{
            let s = d.value;
            s=s.trim();
            if(s.length>0)
            {
                task.textContent = s;
                b.appendChild(task);
            }
        }
        d.value = "";
    }
});

// function storageAvailable(type) {
//     let storage;
//     try {
//       storage = window[type];
//       const x = "__storage_test__";
//       storage.setItem(x, x);
//       storage.removeItem(x);
//       return true;
//     } catch (e) {
//       return (
//         e instanceof DOMException &&
//         // everything except Firefox
//         (e.code === 22 ||
//           // Firefox
//           e.code === 1014 ||
//           // test name field too, because code might not be present
//           // everything except Firefox
//           e.name === "QuotaExceededError" ||
//           // Firefox
//           e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
//         // acknowledge QuotaExceededError only if there's something already stored
//         storage &&
//         storage.length !== 0
//       );
//     }
//   }

//   if (storageAvailable("localStorage")) {
//     // Yippee! We can use localStorage awesomeness
//     console.log("ys")
// } else {
//     // Too bad, no localStorage for us
//     console.log("no")
//   }
/******/ })()
;
//# sourceMappingURL=main.ddc493c4e933aede2d80.js.map