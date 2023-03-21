let fibonnacciWithGenerator = (number: number) => {
  function* fib(number: number) {
    if (number == 1) {
      yield [1];
    } else if (number === 2) {
      yield [1, 1];
    } else {
      let current: any = fib(number - 1).next().value;
      let len = current.length;
      let next: number[] = [...current, current[len - 1] + current[len - 2]];
      yield [...next];
    }
  }

  return fib(number).next().value;
};
console.log(fibonnacciWithGenerator(10));

let x = 34315;
const getVision = (nstr: number[], i: number, v: number) => {
  let len = nstr.length;
  let left = i != 0 ? (i - v < 0 ? 0 : i - v) : undefined;
  let right = i != len - 1 ? (i + v > len - 1 ? len - 1 : i + v) : undefined;
  console.log(left, right);
  let sumleft =
    left === undefined ? 0 : nstr.slice(left, i).reduce((x = 0, a) => x + a);
  let sumright =
    right === undefined
      ? 0
      : nstr.slice(i + 1, right + 1).reduce((x = 0, a) => x + a);
  let summation = sumright + sumleft;

  console.log(summation, v);
  return summation;
};
export function isOneWithLowestVision(number: number) {
  // Insert your code here

  let str = number.toString().split("");
  let nstr = str.map((m) => parseInt(m));
  let freq: any = {};
  for (let i = 0; i < nstr.length; i++) {
    freq[nstr[i]] = getVision(nstr, i, nstr[i]);
  }

  console.log(freq);
}

isOneWithLowestVision(x);
getVision([3, 4, 3, 1, 5], 2, 3);

// export default function matchesK(
//   N: number,
//   K: number,
//   inputArray: number[]
// ):  {
// let newArr = [...inputArray]

// console.log(matchesK(5,4,[1,1,2,8,16]))
let xy = [1, 2, 3, 99];
const maxsum = (arr: number[], N: number) => {
  let maxsum = 0;

  for (let i = 0; i < N; i++) {
    maxsum += arr[i];
  }
  let tempsum = maxsum;
  for (let i = N; i < arr.length; i++) {
    tempsum = tempsum + arr[i] - arr[i - N];

    maxsum = Math.max(tempsum, maxsum);
  }
  return maxsum;
};

console.log(maxsum(xy, 2));
