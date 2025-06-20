

function reverseNumber(num: number): number {
  // Convert the number to a string
  const numString = String(num);
  // Reverse the string
  const reversedString = numString.split("").reverse().join("");
  // Parse the reversed string back to a number
  const reversedNumber = parseInt(reversedString, 10);
  return reversedNumber;
}

console.log(reverseNumber(100.11));
console.log(100.11 % 1);

function oppositeNumber(num: number): number {
  return -num;
}

console.log(oppositeNumber(100));

// Input:["/home/documents/file1.txt", "/home/documents/file2.txt", "/home/pictures/photo.jpg", "/home/videos/video.mp4"]

// Output:67

// Explanation:Optimal path: cd home (7) -> cd documents (12)
// -> open file1.txt (14) -> open file2.txt (14) -> cd .. (5)
// -> cd pictures (11) -> open photo.jpg (14) -> cd .. (5) ->
// cd videos (9) -> open video.mp4 (14).
// Total: 7+12+14+14+5+11+14+5+9+14 = 105. Wait, recalculating...
// cd home (7) -> cd documents (12) -> open file1.txt (14)
// -> open file2.txt (14) -> cd .. (5) -> cd pictures (11) ->
// open photo.jpg (14) -> cd .. (5) -> cd videos (9) ->
// open video.mp4 (14) = 67 keystrokes.

// EXAMPLE 2
// Input:["/a/b/c/file1.txt", "/a/b/file2.txt", "/a/file3.txt", "/file4.txt"]

// Output:52

// Explanation:Optimal path: cd a (4) -> cd b (4) ->
// cd c (4) -> open file1.txt (14) -> cd .. (5) ->
// open file2.txt (14) -> cd .. (5) -> open file3.txt (14) -> cd .. (5) ->
// open file4.txt (14). Total: 4+4+4+14+5+14+5+14+5+14 = 83.
// Rechecking...
// The correct path is: cd a (4) -> cd b (4) -> cd c (4) -> open file1.txt (14) -> cd .. (5) -> open file2.txt (14) -> cd ..
// (5) -> open file3.txt (14) -> cd .. (5) -> open file4.txt (14) = 52 keystrokes.

interface PNode {
  name: string;
  files: string[];
  folders: PNode[];
}

const input1 = [
  "/a/b/c/file1.txt",
  "/a/b/file2.txt",
  "/a/file3.txt",
  "/file4.txt",
];

const input2 = [
  "/home/documents/file1.txt",
  "/home/documents/file2.txt",
  "/home/pictures/photo.jpg",
  "/home/videos/video.mp4",
];

// const buildTree = (input: string[]) => {
//   const acc: PNode = { name: "/", folders: [], files: [] };
//   const allFiles: string[] = [];

//   for (let item of input) {
//     let paths = convertStringToPathArray(item);
//     let current = acc;
//     for (let i = 0; i < paths.length; i++) {
//       const item = paths[i];
//       if (item.includes(".")) {
//         current.files.push(item);
//         allFiles.push(item);
//       } else {
//         const folderExists = current.folders.find((m) => m.name === item);
//         if (folderExists) {
//           current = folderExists;
//         } else {
//           const newFolder = {
//             folders: [],
//             files: [],
//             name: item,
//           };

//           current.folders.push(newFolder);
//           current = newFolder;
//         }
//       }
//     }
//   }

//   return acc;
// };

const shortestStrokes = (input: string[]) => {
  const convertStringToPathArray = (str: string) => {
    return [...str.split("/").slice(1)];
  };
  let sorted = [...input].sort((a, b) => {
    return (
      convertStringToPathArray(a).length - convertStringToPathArray(b).length
    );
  });

  console.log(sorted);

  const shortestCommonPaths = (path1: string, path2: string) => {
    const left = convertStringToPathArray(path1);
    const right = convertStringToPathArray(path2);
    let i = 0;

    while (left[i] === right[i]) {
      i++;
    }

    return i;
  };

  const calculateKeyStrokes = (paths: string[]) => {
    let prev = "";

    let totalStrokes = 0;

    for (let i = 0; i < paths.length; i++) {
      let up = 0;
      let down = 0;
      const common = shortestCommonPaths(prev, paths[i]);
      if (convertStringToPathArray(prev).length - 1 > common) {
        up += convertStringToPathArray(prev).length - common;
      }

      down += convertStringToPathArray(paths[i]).slice(common).length - 1;

      totalStrokes += up * 5;

      let folders = convertStringToPathArray(paths[i]).slice(common);

      totalStrokes += folders
        .slice(folders.length)
        .reduce((a, b) => a + (3 + b.length), 0);
      totalStrokes += 5 + folders[folders.length - 1].length;

      prev = paths[i];
    }

    return totalStrokes;
  };

  // console.log(shortestCommonPaths(input[0], input[1]));

  return calculateKeyStrokes(sorted);
};

// interface Tester {
//   value: number;
//   // getter: () => number;
// }

// class Tester implements Tester {
//   constructor(val: number) {
//     this.value = val;
//   }

//   getter() {
//     return this.value;
//   }
// }

// const tester = new Tester(4);
// console.log(tester.getter());

// console.log(shortestStrokes(input1));
// console.log(shortestStrokes(input2));

// function jj(n: number) {
//   //0 1 1 2 3
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     let acc = [0, 1];
//     for (let i = 2; i < n + 1; i++) {
//       let latest = acc[0] + acc[1];
//       acc[0] = acc[1];
//       acc[1] = latest;
//     }
//     return acc[1];
//   }
// }

// function solution(N: number) {
//   // Implement your solution here
//   const toBinary = (num: number) => {
//     let numx = num;
//     let str = "";
//     while (numx > 1) {
//       if (numx % 2 === 0) {
//         str = "0" + str;
//       } else {
//         str = "1" + str;
//       }
//       numx = Math.floor(numx / 2);
//     }

//     return "1" + str;
//   };

//   let strArr = toBinary(N).toString();
//   console.log(strArr);
//   let max = 0;
//   let prev1 = 0;

//   for (let i = 1; i < strArr.length; i++) {
//     if (strArr[i] === "1") {
//       max = Math.max(max, i - prev1 - 1);
//       prev1 = i;
//     }
//   }

//   return max;
// }

// console.log(solution(66561), "1041");

// const toBinary = (num: number) => {
//   let numx = num;
//   let str = "";
//   while (numx > 1) {
//     if (numx % 2 === 0) {
//       str = "0" + str;
//     } else {
//       str = "1" + str;
//     }

//     numx = Math.floor(numx / 2);
//     console.log(numx, str);
//   }
//   return parseInt("1" + str);
// };

// toBinary(1041);

// function isMatch(s: string, p: string) {
//   const memo = new Map();

//   function dp (i: number, j: number) {
//     const key = `${i},${j}`;
//     if (memo.has(key)) return memo.get(key);

//     // Base case: end of pattern
//     if (j === p.length) {
//       return i === s.length;
//     }

//     const firstMatch = i < s.length && (s[i] === p[j] || p[j] === ".");

//     let result;

//     if (j + 1 < p.length && p[j + 1] === "*") {
//       // Try 0 occurrence of preceding char OR try to match current char
//       result = dp(i, j + 2) || (firstMatch && dp(i + 1, j));
//     } else {
//       result = firstMatch && dp(i + 1, j + 1);
//     }

//     memo.set(key, result);
//     return result;
//   }

//   return dp(0, 0);
// }
