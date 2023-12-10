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



export { Fib, DynamicFib, DynamicFibTabulated };
