// import LinkedList from "./linkedList";
// import DoublyLinkedList from "./doublyLinkedList";
// import BST from "./BinarySearchTree";
// import { Stack, Queue } from "./Stack_Queue";
// import BinaryHeap from "./BinaryHeap";
import axios from "axios";
// import PriorityQueue from "./PriorityQueue";
import path from "path";
import { ana } from "./anagrams";
// let pq = new PriorityQueue();
import { feeds, FeedProps } from "./jothings";
// import Address from "address-validator"
import Graph from "./Graph";
import jt from "jsonwebtoken";
import WeightedGraph from "./DijkstraAlgo";
import { convert } from "./leetcode/zigzagconversion";
import reverse from "./leetcode/reverseInteger";
import myAtoi from "./leetcode/myAtoi"
import {
  DynamicFib,
  DynamicFibTabulated,
  Fib,
  bubbleSort,
  insertionSort,
  mergeSort,
  selectionSort,
} from "./dynamicProgramming";
import {
  longestPalindrome,
  longestPalindromeLeet,
  longestPalindromePointer,
} from "./palindromes";
console.log(ana);

// pq.enqueue("go out", 3);
// pq.enqueue("think", 0);
// pq.enqueue("pray again", 1);
// pq.enqueue("pray", 0);
// pq.enqueue("think2", 2);
// pq.enqueue("go out2", 4);
// pq.dequeue();
// pq.dequeue();
// pq.dequeue();
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
//dashboard.buildwithbnkle.com/projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIl0sImRlbnlpbmdQb2xpY2llcyI6W10sIl9pZCI6IjYzZmRmNGY0YzI5ODVkZjJiMjc1OGM3ZSIsIm5hbWUiOiJwb3J0Zm9saW9NYW5hZ2VyIiwiaWF0IjoxNjg1NzAzMzkzLCJleHAiOjE2ODYzMDgxOTN9.JRqfWiqiWfjaqnQe6ithx5F51544uJr6-jM466mwGs8&role=portfolioManager
function showurl(url: string) {
  console.log(
    url +
      "projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIl0sImRlbnlpbmdQb2xpY2llcyI6W10sIl9pZCI6IjYzZmRmNGY0YzI5ODVkZjJiMjc1OGM3ZSIsIm5hbWUiOiJwb3J0Zm9saW9NYW5hZ2VyIiwiaWF0IjoxNjg0ODM4NTU1LCJleHAiOjE2ODU0NDMzNTV9.nor3SdCWgIcsUSnHbThxlbCWjFyV8leR1SWVx8bNo8U&role=portfolioManager"
  );
}

showurl("https://bnkle-fe2-git-ft-timmeetings-bnkleruby.vercel.app/");

function showforProfessional(url: string) {
  console.log(
    url +
      "projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06cHJvZmVzc2lvbmFsczpwb3Jmb2xpb1Byb2plY3RzOioiLCJeaWFtOnByb2Zlc3Npb25hbHM6cGxhbnRzQW5kRXF1aXBtZW50czoqIiwiXmlhbTpwcm9mZXNzaW9uYWxzOnRlYW06KiIsIl5pYW06cHJvZmVzc2lvbmFsczpwbGFudHNBbmRFcXVpcG1lbnRzOioiLCJecHJvamVjdHM6cG93cyoiLCJeaWFtOm1pc2M6KiIsIl5pYW06cHJvZmVzc2lvbmFsczpQT1NUOmdlbmVyYXRlLXNpZ25lZC11cmwqIiwiXmlhbTpwcm9mZXNzaW9uYWxzOkdFVDpnZXQtZGV0YWlscyoiLCJpYW06cHJvZmVzc2lvbmFsczpHRVQ6cG9ydEZvbGlvUHJvamVjdHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6UE9TVDpwb3J0Rm9saW9Qcm9qZWN0cyoiLCJpYW06cHJvZmVzc2lvbmFsczpQQVRDSDpwb3J0Rm9saW9Qcm9qZWN0cyoiLCJpYW06cHJvZmVzc2lvbmFsczpERUxFVEU6cG9ydEZvbGlvUHJvamVjdHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6R0VUOnBsYW50c0FuZEVxdWlwbWVudHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6UE9TVDpwbGFudHNBbmRFcXVpcG1lbnRzKiIsImlhbTpwcm9mZXNzaW9uYWxzOlBBVENIOnBsYW50c0FuZEVxdWlwbWVudHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6REVMRVRFOnBsYW50c0FuZEVxdWlwbWVudHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6R0VUOnRlYW0qIiwiaWFtOnByb2Zlc3Npb25hbHM6UE9TVDp0ZWFtKiIsImlhbTpwcm9mZXNzaW9uYWxzOlBBVENIOnRlYW0qIiwiaWFtOnByb2Zlc3Npb25hbHM6REVMRVRFOnRlYW0qIiwicHJvamVjdHM6YmlkczpQQVRDSDppbnZpdGVzOioiLCJwcm9qZWN0czpiaWRzOkdFVDoqIiwicHJvamVjdHM6YmlkczpQQVRDSDoqIiwicHJvamVjdDpicmllZnM6UE9TVDoqIiwicHJvamVjdHM6ZmlsZXM6UE9TVDpkb3dubG9hZCIsInByb2plY3RzOmZpbGVzOlBPU1Q6dXBsb2FkIiwicHJvamVjdHM6c3VibWlzc2lvbnM6KiIsImlhbTpwcm9mZXNzaW9uYWxzOlBBVENIOnVwZGF0ZSIsInByb2plY3RzOmZpbGVzOkdFVDpzb3J0IiwiXmlhbTpwcm9mZXNzaW9uYWxzOkdFVDpwcm9mZXNzaW9uYWwqIiwiXmlhbTpwcm9mZXNzaW9uYWxzOkdFVDpwcm9mZXNzaW9uYWwqIiwicHJvamVjdHM6dGFza3M6UE9TVDphZGQiLCJecHJvamVjdHM6dGFza3M6R0VUKiIsIl5wcm9qZWN0czp0YXNrczpQQVRDSCoiLCJecHJvamVjdHM6c3ViLXRhc2tzOlBPU1QqIiwiXnByb2plY3RzOnN1Yi10YXNrczpHRVQqIiwiXnByb2plY3RzOnN1Yi10YXNrczpQQVRDSCoiLCJpYW06dXNlcnM6R0VUOmZpbHRlcioiLCJecHJvamVjdHM6cG93cyIsIl5iaWRzOmJpZHM6R0VUOioiLCJeYmlkczpiaWRzOlBBVENIOioiLCJecHJvamVjdHM6dGFza3M6R0VUOioiLCJwcm9qZWN0czpwcm9qZWN0czpQT1NUOmZpbmFuY2lhbHMiLCJwcm9qZWN0czpwcm9qZWN0czpHRVQ6ZmluYW5jaWFsczoqIiwicHJvamVjdHM6cHJvamVjdHM6UEFUQ0g6ZmluYW5jaWFsczoqIiwicHJvamVjdHM6cHJvamVjdHM6REVMRVRFOmZpbmFuY2lhbHM6Kjp0cmFuY2g6KiJdLCJkZW55aW5nUG9saWNpZXMiOltdLCJfaWQiOiI2M2ZlMDQ4OWMyOTg1ZGYyYjI3NThjYjciLCJuYW1lIjoiY29udHJhY3RvciIsImlhdCI6MTY4NTYzMjE0OSwiZXhwIjoxNjg2MjM2OTQ5fQ.rfWPvcnVFHAHCuwJjsLdutepedlFZCkMp1Rk38d1q8c&role=contractor"
  );
}

// showforProfessional("https://bnkle-fe2-git-ft-timmeetings-bnkleruby.vercel.app/")
// import path from "path"
// console.log(path.join(__dirname,"../jsalgos"))
// let times = 100000
// for(let i=0;i<times;i++){
//  let res =  axios.get("https://www.google.com/search?q=fintafrica.com+fintafrica")
//  console.log(res,i)
// }

// let x = {
//   data:
//   message: "ID Read Successfully!",
//   status: 200,
// };

let data: restype[] = [
  { Confidence: 96.98274993896484, FIRST_NAME: "TIMOTHY" },
  { Confidence: 96.55171203613281, LAST_NAME: "OLULEKE" },
  { Confidence: 94.8182373046875, MIDDLE_NAME: "AYOKUNNU" },
  { Confidence: 99.16246795654297, SUFFIX: "" },
  { CITY_IN_ADDRESS: "", Confidence: 99.17204284667969 },
  { Confidence: 99.1810531616211, ZIP_CODE_IN_ADDRESS: "" },
  { Confidence: 99.16168212890625, STATE_IN_ADDRESS: "" },
  { Confidence: 99.16735076904297, STATE_NAME: "" },
  { Confidence: 96.87952423095703, DOCUMENT_NUMBER: "B50640147" },
  { Confidence: 87.39724731445312, EXPIRATION_DATE: "21 SEP /SEPT 33" },
  { Confidence: 96.58818817138672, DATE_OF_BIRTH: "24 JUN /JUIN 95" },
  { Confidence: 76.57709503173828, DATE_OF_ISSUE: "22 SEP /SEPT 23" },
  { Confidence: 98.47882843017578, ID_TYPE: "PASSPORT" },
  { Confidence: 99.18010711669922, ENDORSEMENTS: "" },
  { Confidence: 99.16741180419922, VETERAN: "" },
  { Confidence: 99.16817474365234, RESTRICTIONS: "" },
  { CLASS: "", Confidence: 99.17239379882812 },
  { ADDRESS: "", Confidence: 99.17485809326172 },
  { COUNTY: "", Confidence: 99.17536926269531 },
  { Confidence: 97.32061767578125, PLACE_OF_BIRTH: "IBADAN" },
  {
    Confidence: 65.4001235961914,
    MRZ_CODE:
      "P<NGAOLULEKE<<TIMOTHY<AYOKUNNU<<<<<<<<<<<<<<B506401472NGA9506240M330921070150143708<<<44",
  },
];
type restype = { [key: "Confidence" | string]: string | number };

let str = "12/13/1992";
let mx = "24/06/1995";
let fixed = mx.split("/").reverse().join("/");
console.log(new Date(str), new Date(mx), new Date(fixed));
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!_])(.{8,})$/
let regex = /(([A-Z]{1,})([a-z]{1,})([0-9]{1,})([.?@!()*<>]{1,}))(.{8,})/;
let s = "Ayokunnu.2";
console.log("\n==========\n");
console.log(regex.test(s));

// const grabdetails = (data: restype[]) => {
//   let importantFields = [
//     "FIRST_NAME",
//     "LAST_NAME",
//     "MIDDLE_NAME",
//     "DATE_OF_BIRTH",
//     "EXPIRATION_DATE",
//   ];
//   let obj: restype = {};
//   for (let i of data) {
//     for (let j of Object.keys(i)) {
//       if (importantFields.includes(j)) {
//         let key = j === "MIDDLE_NAME" ? "mid_name" : j.toLowerCase();
//         obj[key] = i[j];
//       }
//     }
//   }
//   return obj;
// };

// console.log(grabdetails(data));

// let g = new WeightedGraph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");
// g.addEdge("A", "B", 4);
// g.addEdge("A", "C", 2);
// g.addEdge("B", "E", 3);
// g.addEdge("C", "D", 2);
// g.addEdge("C", "F", 4);
// g.addEdge("D", "E", 3);
// g.addEdge("D", "F", 1);
// g.addEdge("E", "F", 1);
// console.log(g.Dijkstra("A", "E"));

// let x = {
//   joiningInfo: {
//     eventUri:
//       "https://api.calendly.com/scheduled_events/92ca3e58-12b3-4cd5-afed-2ab97fb53c5a",
//     eventUrl:
//       "https://us02web.zoom.us/j/8162792177?pwd=dXVFbGVQdnR2ZURqdnZLblBsMitIUT09",
//   },
//   firstName: "Timo",
//   lastName: "Ayo",
//   email: "olaitan@mailinator.com",
//   startTime: "2023-10-24T15:00:00.000000Z",
// };
// g.dfs("A");
// g.dfs_it("A")

// console.log(Fib(30), "Fib");
// console.log(DynamicFib(100000), "Fib");
// console.log(DynamicFibTabulated(1000000), "Fib");
// console.log(selectionSort([3, 5, 6, 0, 2]), "Complete Matters");
// console.log(bubbleSort([11, 3, 5, 6, 0, 2, 10]), "bubble");
// console.log(insertionSort([11, 3, 5, 2, 8]), "insert");
// console.log(mergeSort([11, 3, 5, 2, 8]), "merge");

console.log(myAtoi(" -67 is mine "));
