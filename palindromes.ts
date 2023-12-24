function longestPalindrome(s: string): string {
  let acc: { [key: string]: boolean } = {};
  const isPalindrome = (str: string) => {
    if (str.length <= 1) return str;
    if (acc[str]) return acc[str];
    let reversed = str === str.split("").reverse().join("");
    acc[str] = reversed;
    return reversed;
  };
  if (isPalindrome(s)) {
    return s;
  }
  let gap = s.length;
  while (gap > 0) {
    console.log(gap);
    for (let i = 0; i < s.length - gap + 1; i++) {
      let sub = s.substring(i, gap + i);
      console.log(sub, i, sub.length);
      if (isPalindrome(sub)) {
        console.log(sub);
        return sub;
      }
    }
    gap--;
  }
  return "";
}

function longestPalindromePointer(s: string): string {
  let acc: { [key: string]: boolean } = {};
  const isPalindrome = (str: string) => {
    if (str.length <= 1) return str;
    if (acc[str]) return acc[str];
    let reversed = str === str.split("").reverse().join("");
    acc[str] = reversed;
    return reversed;
  };
  if (isPalindrome(s)) {
    return s;
  }
  let longest = "";
  const expand = (i: number, isDouble = false) => {
    let extra = 0;
    let left = i;
    let right = isDouble ? i + 1 : i;
    let longest = "";
    while (left - extra > -1 && right + extra < s.length) {
      let _left = left - extra;
      let _right = right + extra;
      let sub = s.substring(_left, _right + 1);
      if (isPalindrome(sub)) {
        if (longest.length < sub.length) {
          longest = sub;
        }
      } else {
        return longest;
      }
      extra++;
    }
    return longest;
  };
  for (let i = 0; i < s.length; i++) {
    let len1 = expand(i);
    let len2 = expand(i, true);
    let len = len1.length < len2.length ? len2 : len1;
    if (longest.length < len.length) {
      longest = len;
    }
  }
  console.log(Object.keys(acc).length);
  console.log(longest);
  return longest;
}

function longestPalindromeLeet(s: string): string {
  if (!s || s.length <= 1) {
    return s;
  }
  let longestPalindrome = s.substring(0, 1);

  for (let i = 0; i < s.length; i++) {
    [expand(s, i, i), expand(s, i, i + 1)].forEach((maybeLongest) => {
      if (maybeLongest.length > longestPalindrome.length) {
        longestPalindrome = maybeLongest;
      }
    });
  }

  return longestPalindrome;
}

function expand(s: string, begin: number, end: number): string {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--;
    end++;
  }

  return s.substring(begin + 1, end);
}

export { longestPalindrome,longestPalindromePointer,longestPalindromeLeet };
