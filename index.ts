// import LinkedList from "./linkedList";
// import DoublyLinkedList from "./doublyLinkedList";
// import BST from "./BinarySearchTree";
// import { Stack, Queue } from "./Stack_Queue";
// import BinaryHeap from "./BinaryHeap";
// import axios from "axios";
// import PriorityQueue from "./PriorityQueue";

// let pq = new PriorityQueue();
import { feeds, FeedProps } from "./jothings";
import Graph from "./Graph";

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

showurl("https://bnkle-fe2-git-ft-timfinancials-bnkleruby.vercel.app/");

function showforProfessional(url: string) {
  console.log(
    url +
      "projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06cHJvZmVzc2lvbmFsczpwb3Jmb2xpb1Byb2plY3RzOioiLCJeaWFtOnByb2Zlc3Npb25hbHM6cGxhbnRzQW5kRXF1aXBtZW50czoqIiwiXmlhbTpwcm9mZXNzaW9uYWxzOnRlYW06KiIsIl5pYW06cHJvZmVzc2lvbmFsczpwbGFudHNBbmRFcXVpcG1lbnRzOioiLCJecHJvamVjdHM6cG93cyoiLCJeaWFtOm1pc2M6KiIsIl5pYW06cHJvZmVzc2lvbmFsczpQT1NUOmdlbmVyYXRlLXNpZ25lZC11cmwqIiwiXmlhbTpwcm9mZXNzaW9uYWxzOkdFVDpnZXQtZGV0YWlscyoiLCJpYW06cHJvZmVzc2lvbmFsczpHRVQ6cG9ydEZvbGlvUHJvamVjdHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6UE9TVDpwb3J0Rm9saW9Qcm9qZWN0cyoiLCJpYW06cHJvZmVzc2lvbmFsczpQQVRDSDpwb3J0Rm9saW9Qcm9qZWN0cyoiLCJpYW06cHJvZmVzc2lvbmFsczpERUxFVEU6cG9ydEZvbGlvUHJvamVjdHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6R0VUOnBsYW50c0FuZEVxdWlwbWVudHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6UE9TVDpwbGFudHNBbmRFcXVpcG1lbnRzKiIsImlhbTpwcm9mZXNzaW9uYWxzOlBBVENIOnBsYW50c0FuZEVxdWlwbWVudHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6REVMRVRFOnBsYW50c0FuZEVxdWlwbWVudHMqIiwiaWFtOnByb2Zlc3Npb25hbHM6R0VUOnRlYW0qIiwiaWFtOnByb2Zlc3Npb25hbHM6UE9TVDp0ZWFtKiIsImlhbTpwcm9mZXNzaW9uYWxzOlBBVENIOnRlYW0qIiwiaWFtOnByb2Zlc3Npb25hbHM6REVMRVRFOnRlYW0qIiwicHJvamVjdHM6YmlkczpQQVRDSDppbnZpdGVzOioiLCJwcm9qZWN0czpiaWRzOkdFVDoqIiwicHJvamVjdHM6YmlkczpQQVRDSDoqIiwicHJvamVjdDpicmllZnM6UE9TVDoqIiwicHJvamVjdHM6ZmlsZXM6UE9TVDpkb3dubG9hZCIsInByb2plY3RzOmZpbGVzOlBPU1Q6dXBsb2FkIiwicHJvamVjdHM6c3VibWlzc2lvbnM6KiIsImlhbTpwcm9mZXNzaW9uYWxzOlBBVENIOnVwZGF0ZSIsInByb2plY3RzOmZpbGVzOkdFVDpzb3J0IiwiXmlhbTpwcm9mZXNzaW9uYWxzOkdFVDpwcm9mZXNzaW9uYWwqIiwiXmlhbTpwcm9mZXNzaW9uYWxzOkdFVDpwcm9mZXNzaW9uYWwqIiwicHJvamVjdHM6dGFza3M6UE9TVDphZGQiLCJecHJvamVjdHM6dGFza3M6R0VUKiIsIl5wcm9qZWN0czp0YXNrczpQQVRDSCoiLCJecHJvamVjdHM6c3ViLXRhc2tzOlBPU1QqIiwiXnByb2plY3RzOnN1Yi10YXNrczpHRVQqIiwiXnByb2plY3RzOnN1Yi10YXNrczpQQVRDSCoiLCJpYW06dXNlcnM6R0VUOmZpbHRlcioiLCJecHJvamVjdHM6cG93cyIsIl5iaWRzOmJpZHM6R0VUOioiLCJeYmlkczpiaWRzOlBBVENIOioiLCJecHJvamVjdHM6dGFza3M6R0VUOioiLCJwcm9qZWN0czpwcm9qZWN0czpQT1NUOmZpbmFuY2lhbHMiLCJwcm9qZWN0czpwcm9qZWN0czpHRVQ6ZmluYW5jaWFsczoqIiwicHJvamVjdHM6cHJvamVjdHM6UEFUQ0g6ZmluYW5jaWFsczoqIiwicHJvamVjdHM6cHJvamVjdHM6REVMRVRFOmZpbmFuY2lhbHM6Kjp0cmFuY2g6KiJdLCJkZW55aW5nUG9saWNpZXMiOltdLCJfaWQiOiI2M2ZlMDQ4OWMyOTg1ZGYyYjI3NThjYjciLCJuYW1lIjoiY29udHJhY3RvciIsImlhdCI6MTY4NTYzMjE0OSwiZXhwIjoxNjg2MjM2OTQ5fQ.rfWPvcnVFHAHCuwJjsLdutepedlFZCkMp1Rk38d1q8c&role=contractor"
  );
}

// showforProfessional("https://bnkle-fe2-git-ft-timfinancials-bnkleruby.vercel.app/")

// console.log(new Date());

//63fe3ca7c2985df2b2758dc2

// let feed = feeds;
// const sortIntoRepos = (feed: FeedProps[]) => {
//   let group: any = {};

//   for (let i = 0; i < feed.length; i++) {
//     if (group[feed[i].repoName]) {
//       group[feed[i].repoName].push(feed[i].title);
//     } else {
//       group[feed[i].repoName] = [feed[i].title];
//     }
//   }

//   return group;
// };
// let sorted = sortIntoRepos(feed);

// console.log(sorted);

//console.log(Object.keys(sorted).map(m=><COmponent reponame = {m} titles = {sorted[m]} />))

// console.log(Object.keys(sorted));

//        <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>

// let x=[{name:"2023-04-05"},{name:"2022-04-03"}]
// console.log(x.sort((a, b) => a.name>b.name?1:b.name>a.name?-1:0
// ))

// console.log(.0.toLocaleString())

//I am testing 9db98fef6f48933676afc24379bf144c316b770a  I added sometin again

// "Awaiting Approval",
//         "Not started",
//         "In progress",
//         "Completed",
//         "Verified",

// const name=()=>{
//   setTimeout(()=>{
//     console.log("see")
//   })
// }

// const spark=()=>{
//   name()
//   console.log("Adesola")
//   return
// }


// spark()

// let G = new Graph()

// console.log(G.addVertex("s"))
// console.log(G.addVertex("b"))
// console.log(G.addVertex("c"))
// console.log(G.addEdge("s","c"))
// console.log(G.addEdge("b","c"))
// console.log(G.addEdge("s","b"))
// console.log(G.removeVertex("b"))
// console.log(G.removeEdge("b","c"))

//I am adding things
