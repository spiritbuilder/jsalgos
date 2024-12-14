import { _maxContainer } from "./ztm/max-container";
import { twoSumArray } from "./ztm/twosum";
import trapRainWater, { testTrapCalculation } from "./ztm/trapRainwater";
import { backSpaceCompare } from "./ztm/backspaceCompare";
import almostPalindrome from "./ztm/almostPalindrome";
import LinkedList from "./oldfiles/linkedList";
import DoublyLinkedList from "./oldfiles/doublyLinkedList";

let linkedList = new LinkedList();

linkedList.push("mike");
linkedList.push("Sola");
linkedList.shift();
linkedList.unshift("Mjx");
linkedList.push("Bosola");
linkedList.traverse();
linkedList.unshift("Manda");
console.log("======");
linkedList.set(3, "sleep");
linkedList.traverse();
console.log("======");
linkedList.remove(2);
linkedList.traverse();
console.log("======");
linkedList.insert(2, "Insert");
console.log("======");
linkedList.traverse();
console.log("======");
console.log("About to reverse");
linkedList.reverse2();
console.log("======");
linkedList.traverse();
linkedList.reverse2();
console.log("======");
//linkedList.traverse();

//linkedList.pop()
// linkedList.traverse();

let withChild=()=>({child:{
  
}})

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(56);
doublyLinkedList.push(6);
doublyLinkedList.traverse()
console.log(doublyLinkedList)
