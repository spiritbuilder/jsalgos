const maxContainer = (arr: number[]) => {
  let max = 0;
  let position: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let newMax = Math.max(max, Math.min(arr[i], arr[j]) * (j - i));
      if (newMax > max) {
        position = [i, j];
        max = newMax;
      }
    }
  }
  console.log(position);

  return max;
};

export const _maxContainer = (arr: number[]) => {
  let max = 0;
  let position: number[] = [];
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let width = right - left;
    let diff = Math.min(arr[left], arr[right]);

    let newMax = Math.max(diff * width, max);
    if (newMax > max) {
      position = [left, right];
      max = newMax;
    }
    if (arr[left] <= arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  console.log(position);

  return max;
};
export default maxContainer;
