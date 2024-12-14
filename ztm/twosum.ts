const twoSumArray = (arr: number[], target: number) => {
  let Map: Record<string, number> = {};

  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    let diffIndex = Map[difference.toString()];
    if ( diffIndex >= 0) {
      return [diffIndex, i];
    }
    Map[arr[i]] = i;
  }

  return null;
};






export { twoSumArray };
