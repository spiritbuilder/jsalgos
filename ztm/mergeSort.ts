const mergeSort = (arr: number[]): number[] => {
  const merge = (a: number[], b: number[]) => {
    let left = 0;
    let right = 0;

    let result: number[] = [];

    while (right < b.length && left < a.length) {
      if (a[left] <= b[right]) {
        result.push(a[left]);
        left++;
      } else {
        result.push(b[right]);
        right++;
      }
    }

    if (a[left]) {
      result.push(a[left]);
    }
    if (b[right]) {
      result.push(b[right]);
    }

    return result;
  };

  if (arr.length === 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midPoint);

  let right = arr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right)) as number[];
};

export default mergeSort;
