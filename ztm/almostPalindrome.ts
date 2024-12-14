const almostPalindrome = (s: string, depth = 1): boolean => {
  let str = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  console.log("======", str);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    console.log(str[left], str[right]);
    if (str[left] === str[right]) {
      right--;
      left++;
    } else {
      if (depth - 1 < 0) return false;
      return (
        (almostPalindrome(str.slice(left, right), depth - 1) as boolean) ||
        (almostPalindrome(str.slice(left + 1, right + 1), depth - 1) as boolean)
      );
    }
  }

  return true;
};

export default almostPalindrome;
