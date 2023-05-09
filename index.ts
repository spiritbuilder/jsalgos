import LinkedList from "./linkedList";
import DoublyLinkedList from "./doublyLinkedList";
import BST from "./BinarySearchTree";
import { Stack, Queue } from "./Stack_Queue";
import BinaryHeap from "./BinaryHeap";
import axios from "axios";
import PriorityQueue from "./PriorityQueue";

let pq = new PriorityQueue();

pq.enqueue("go out", 3);
pq.enqueue("think", 0);
pq.enqueue("pray again", 1);
pq.enqueue("pray", 0);
pq.enqueue("think2", 2);
pq.enqueue("go out2", 4);
pq.dequeue();
pq.dequeue();
pq.dequeue();
// pq.dequeue();
// pq.dequeue();
// pq.dequeue();

// let bh=new BinaryHeap()
// bh.insert(78)
// bh.insert(75);
// bh.insert(74);
// bh.insert(71);
// bh.insert(6);
// bh.insert(5);
// bh.insert(8);
// bh.insert(10);
// bh.insert(100);
// bh.insert(70);
// bh.extractMax()
// bh.extractMax();
// // bh.insert(70);
// console.log(bh.values)

// function countTeams(skills, minPlayers, minLevel, maxLevel) {
//   // Write your code here

//   let;
// }
//dashboard.buildwithbnkle.com/projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIl0sImRlbnlpbmdQb2xpY2llcyI6W10sIl9pZCI6IjYzZmRmNGY0YzI5ODVkZjJiMjc1OGM3ZSIsIm5hbWUiOiJwb3J0Zm9saW9NYW5hZ2VyIiwiaWF0IjoxNjgyNjc4NjYxLCJleHAiOjE2ODMyODM0NjF9.O12HobAhCmT_9xx_JZOjGl83XZhbvCOeVMrGV478TXk&role=portfolioManager
// function showurl(url: string) {
//   console.log(
//     url +
//       "projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIl0sImRlbnlpbmdQb2xpY2llcyI6W10sIl9pZCI6IjYzZmRmNGY0YzI5ODVkZjJiMjc1OGM3ZSIsIm5hbWUiOiJwb3J0Zm9saW9NYW5hZ2VyIiwiaWF0IjoxNjgyNjc4NjYxLCJleHAiOjE2ODMyODM0NjF9.O12HobAhCmT_9xx_JZOjGl83XZhbvCOeVMrGV478TXk&role=portfolioManager"
//   );
// }

// showurl("https://bnkle-fe2-1amb7v9mw-bnkleruby.vercel.app/");


