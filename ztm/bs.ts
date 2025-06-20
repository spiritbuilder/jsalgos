const binarySearch = (arr: number[], target: number) => {
  let left = 0,
    right = arr.length - 1;

  if (target > arr[right]) return -1;
  if (target < arr[left]) return -1;

  while (left !== right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  if (arr[left] === target) return left;
  return -1;
};

export const searchRange = (arr: number[], target: number) => {
  let firstPosition = binarySearch(arr, target);
  if (firstPosition === -1) return [-1, -1];

  let temp1 = firstPosition;
  let temp2 = firstPosition;
  let leftPosition = firstPosition - 1;
  let rightPosition = firstPosition + 1;
  while (leftPosition !== -1) {
    temp1 = leftPosition;
    leftPosition = binarySearch(arr.slice(0, leftPosition), target);
  }

  while (rightPosition !== -1) {
    temp2 = rightPosition;
    let x = binarySearch(arr.slice(rightPosition + 1), target);
    if (x !== -1) rightPosition += x + 1;
    else break;
  }

  return [temp1, temp2];
};

export default binarySearch;
