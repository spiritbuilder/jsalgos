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

// let allTask = Object.values(taskPow)[0];

// const getSubtaskDetails = (subTaskId: string) => {
//   let allSubtasks = allTask.map((m) => m.subTasks).flat();

//   return allSubtasks.find((m) => m._id === subTaskId);
// };

// console.log(getSubtaskDetails("667c347348d4a6e330c97ef8"));

TicTakToe()
