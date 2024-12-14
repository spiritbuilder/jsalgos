import { debounce, moveZeroToEnd, rotateArray } from "./moveZeroToEnd";
import { taskPow } from "./taskfile";
import TicTakToe from "./TicTacToe";

// moveZeroToEnd([1, 2, 0, 4, 3, 0, 5, 0]);
// moveZeroToEnd([10, 20, 30]);
// moveZeroToEnd([0, 0]);

rotateArray([10, 20, 30, 40], 3);
// let before = new Date().getTime();
// console.log(new Date().getTime());
// console.log(
//   debounce(() => {
//     console.log("I see");
//     console.log(new Date().getTime() - before);
//   }, 1000)()
// );
// TicTakToe();
let allSubtaskMap: Record<string, string> = {};

let allTask = taskPow["6679505848d4a6e330c00943"];

for (let i = 0; i < allTask.length; i++) {
  for (let j = 0; j < allTask[i].subTasks.length; j++) {
    allSubtaskMap[allTask[i].subTasks[j]._id] = `${i + 1}.${j + 1}`;
  }
}

//667c35fa48d4a6e330c98d9a
//667c32da48d4a6e330c9774e

console.log(allSubtaskMap["667c347348d4a6e330c97ef8"]);
console.log(allSubtaskMap["667c35fa48d4a6e330c98d9a"]);
console.log(allSubtaskMap["667c32da48d4a6e330c9774e"]);
