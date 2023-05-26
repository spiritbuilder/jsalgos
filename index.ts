// import LinkedList from "./linkedList";
// import DoublyLinkedList from "./doublyLinkedList";
// import BST from "./BinarySearchTree";
// import { Stack, Queue } from "./Stack_Queue";
// import BinaryHeap from "./BinaryHeap";
// import axios from "axios";
// import PriorityQueue from "./PriorityQueue";

// let pq = new PriorityQueue();
import { feeds, FeedProps } from "./jothings";

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
//dashboard.buildwithbnkle.com/projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIl0sImRlbnlpbmdQb2xpY2llcyI6W10sIl9pZCI6IjYzZmRmNGY0YzI5ODVkZjJiMjc1OGM3ZSIsIm5hbWUiOiJwb3J0Zm9saW9NYW5hZ2VyIiwiaWF0IjoxNjgyNjc4NjYxLCJleHAiOjE2ODMyODM0NjF9.O12HobAhCmT_9xx_JZOjGl83XZhbvCOeVMrGV478TXk&role=portfolioManager
// function showurl(url: string) {
//   console.log(
//     url +
//       "projects?&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbGxvd2luZ1BvbGljaWVzIjpbIl5pYW06KiIsIl5wcm9qZWN0czoqIl0sImRlbnlpbmdQb2xpY2llcyI6W10sIl9pZCI6IjYzZmRmNGY0YzI5ODVkZjJiMjc1OGM3ZSIsIm5hbWUiOiJwb3J0Zm9saW9NYW5hZ2VyIiwiaWF0IjoxNjg0ODM4NTU1LCJleHAiOjE2ODU0NDMzNTV9.nor3SdCWgIcsUSnHbThxlbCWjFyV8leR1SWVx8bNo8U&role=portfolioManager"
//   );
// }

// showurl("https://bnkle-fe2-git-ft-timfinancials-bnkleruby.vercel.app/");

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
const checkifAnagram = (str1: string, str2: string) => {
  let counter: { [key: string]: number } = {};
  if (str1 === str2) return false;
  if (!str1 || !str2) return false;
  for (let i = 0; i < str1.length; i++) {
    if (counter[str1[i] as string]) {
      counter[str1[i]]++;
    } else {
      counter[str1[i]] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (counter[str2[i]]) {
      counter[str2[i]]--;
    } else {
      return false;
    }
  }
  for (let x of Object.values(counter)) {
    if (x > 0 || x < 0) {
      return false;
    }
  }

  return true;
};
const countAnagrams = (str: string) => {
  const strArr = str.split(" ");
  console.log(strArr);
  let newArr = [...strArr];
  let total = 0;
  while (newArr.length > 0) {
    let anagrams: string[] = [];
    for (let i = 0; i < newArr.length; i++) {
      if (i < newArr.length - 1) {
        for (let j = i + 1; j < newArr.length; j++) {
          let isAnagram = checkifAnagram(newArr[i], newArr[j]);
          if (isAnagram && !anagrams.includes(newArr[j])) {
            anagrams.push(newArr[j]);
            console.log(anagrams, "anaz");
          }
        }
      }
      delete newArr[i];
      newArr = newArr.filter((m) => !anagrams.includes(m));
    }
    console.log(newArr);
    total += anagrams.length;
  }

  console.log(total);
};

countAnagrams("aa aa dog dog dgo dgo gdo");

let myX: { [key: string]: any } = {
  name: "joy",
  school: "Eksu",
  lovers:["victor","MyJames"],
  countries:[{
    name:"US",
    population:3000
  }]
};
const change = (ref:any,value:any)=>{
  ref.name =value
}
const onchange = (key: string, value: any,isArray?:boolean, method?:"push"|"pull") => {
  if(!isArray){
  myX[key] = value;
  }else{
    if(method==="push"){
      myX[key].push(value)
    }else{

    }
  }

};

onchange("name","Joy")
onchange("school","Akungba")
onchange("lovers","Jesus",true,"push")
change(myX.countries[0],"LAgos")

console.log(myX)
