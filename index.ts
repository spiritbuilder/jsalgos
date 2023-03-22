import LinkedList from "./linkedList";
import DoublyLinkedList from "./doublyLinkedList";

let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(10);
doublyLinkedList.push("SOla");
doublyLinkedList.push("Sjla");
doublyLinkedList.shift();
doublyLinkedList.traverse();
console.log("==============");
doublyLinkedList.unshift("miky");
doublyLinkedList.insert(3, "Arigato");
doublyLinkedList.traverse();
console.log("============");

doublyLinkedList.set(2, "set====me ni");
// console.log(doublyLinkedList.get(3)?.val, "see");
doublyLinkedList.traverse();
console.log("============");
// // doublyLinkedList.remove(1);
// doublyLinkedList.traverse();
console.log(doublyLinkedList.remove(0))
console.log("============");
doublyLinkedList.traverse();

