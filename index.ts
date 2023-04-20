import LinkedList from "./linkedList";
import DoublyLinkedList from "./doublyLinkedList";
import BST from "./BinarySearchTree";
import { Stack, Queue } from "./Stack_Queue";
import axios from "axios";

let bst = new BST();

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(8);
bst.insert(3);
bst.insert(20);
// bst.insert(2);
// bst.insert(21);
// bst.insert(22);
//  bst.insert(26);

console.log(bst.find(12));

bst.traverseBFS()
bst.traverseDFSPreOrder()
bst.traverseDFSPostOrder()
bst.traverseDFSInOrder()

console.log(JSON.stringify(bst));
