//Dynamic Programming Approaches

import { me } from "./myClass";

let Fib = (n: number): number => {
  if (n <= 2) return 1;
  return Fib(n - 1) + Fib(n - 2);
};

let DynamicFib = (
  n: number,
  memo: { [key: string | number]: number } = {}
): number => {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  let res = DynamicFib(n - 1, memo) + DynamicFib(n - 2, memo);
  memo[n] = res;
  return res;
};

let DynamicFibTabulated = (n: number): number => {
  let memo: { [key: string | number]: number } = { 0: 0, 1: 1, 2: 1 };
  if (memo[n]) return memo[n];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

//SORTS
// -selection Sort swaps at the end of the check. and puts minimum at the beginning
//-Bubble SOrt looops n-squared times swaping as it goes till the max gets to the end can be optimized by reducing the arrays to be sorted after each pass
//

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
};

const insertionSort = (arr: number[]) => {
  if (arr.length === 1) return arr;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let lastIndex: number = i - 1;
    for (let j = i - 1; j > -1; j--) {
      console.log(arr[j], currentVal);
      if (arr[j] < currentVal) {
        break;
      } else {
        arr[j + 1] = arr[j];
        //update last index
        lastIndex = j;
        console.log(arr);
      }
    }
    arr[lastIndex] = currentVal;
  }
  return arr;
};

export {
  Fib,
  DynamicFib,
  DynamicFibTabulated,
  selectionSort,
  bubbleSort,
  insertionSort,
};
