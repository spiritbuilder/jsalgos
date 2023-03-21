import LinkedList from "./linkedList";
import DoublyLinkedList from "./doublyLinkedList";

let doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList);
doublyLinkedList.push(10);
doublyLinkedList.push("SOla");
doublyLinkedList.traverse();
//console.log(doublyLinkedList);
doublyLinkedList.push("Sjla");
//console.log(doublyLinkedList);
doublyLinkedList.traverse();
doublyLinkedList.pop();
doublyLinkedList.traverse();
doublyLinkedList.pop();
doublyLinkedList.traverse();
doublyLinkedList.pop();
console.log(doublyLinkedList);
