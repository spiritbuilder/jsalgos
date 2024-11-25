// const moveZeroToEnd = (arr: number[] = []): void => {
//   let array = [...arr];
// console.log("======\n",array)
//   array.sort((a, b) => {
//     console.log(a,b)
//     // if (b === 0) return -1;
//     // if(a==0) return 1
//     // return 0;
//     return b-a
//   });

//   console.log(array,"\n====");
// };

const moveZeroToEnd = (arr: number[] = []): void => {
  let array = [...arr];
  console.log("======\n", array);
  array.sort((a, b) => {
    console.log(a, b);
    // if (b === 0) return -1;
    // if(a==0) return 1
    // return 0;
    return b - a;
  });

  console.log(array, "\n====");
};
[1, 2, 3, 5, 6, 8];
("321568==351268==356218");
const rotateArray = (arr: number[], d: number = 0) => {
  let mod = d % arr.length;
  let difference = arr.slice(0, mod);
  for (let i = mod; i < arr.length; i++) {
    arr[i - mod] = arr[i];
  }
  for (let i = 0; i < difference.length; i++) {
    arr[arr.length - mod + i] = difference[i];
  }
  return arr;
};

const debounce = (func: (...args: any) => void, timeout: number = 0) => {
  let timer: NodeJS.Timeout;

  return (...args:any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, [...args]);
    }, timeout);
  };
};

export { moveZeroToEnd, rotateArray, debounce };
