const trapRainWater = (height: number[]) => {
  let time1 = new Date().getTime() / 1000;

  if (height.length < 3) return 0;
  let agg = 0;
  let left = 0;
  let right = 1;
  for (let i = 0; i < height.length; i++) {
    if (height[i] != 0) {
      left = i;
      right = i;
      break;
    }
  }

  let lastMaxPosition = left;
  const calculateVolume = (arr: number[], min: number) => {
    let total = 0;
    for (let val of arr) {
      if (val < min) total += min - val;
    }
    console.log(arr, total);
    return total;
  };
  while (left < height.length - 1) {
    if (height[left] <= height[right]) {
      agg += calculateVolume(height.slice(left, right), height[left]);
      left = right;
      lastMaxPosition = left;
    } else if (height[right - 1] <= height[right]) {
      if (lastMaxPosition === left) {
        lastMaxPosition = right;
      } else {
        lastMaxPosition =
          height[lastMaxPosition] <= height[right] ? right : lastMaxPosition;
      }
    }

    if (right === height.length - 1) {
      agg += calculateVolume(
        height.slice(left, lastMaxPosition),
        height[lastMaxPosition]
      );

      if (lastMaxPosition === left) {
        left = right;
      } else {
        left = lastMaxPosition;
        right = left;
      }
    }

    right++;
  }
  console.log(new Date().getTime() / 1000 - time1, " secs");
  return agg;
};

export const trapRainWater2 = (height: number[]) => {

  let total = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];

  while (left !== right) {
    let valLeft = height[left];
    let valRight = height[right];
    if (valLeft <= maxLeft) {
      total += maxLeft - valLeft;
    } else {
      maxLeft = height[left];
    }
    if (valRight <= maxRight) {
      total += maxRight - valRight;
    } else {
      maxRight = height[right];
    }
    if (maxLeft <= maxRight) {
      left++;
    } else {
      right--;
    }

  }



  return total;
};

export const testTrapCalculation = (arr: number[]) => {
  let left = trapRainWater(arr);
  let right = trapRainWater2(arr);

  return {
    arr,
    left,
    right,
    isEqual: right === left,
  };
};

export default trapRainWater;
