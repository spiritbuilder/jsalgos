var lengthOfLongestSubstring = function (s: any) {
  let freq: any = {};
  let max = 0;
  let begin = 0;
  let end = 0;
  if (s.length == 0) return 0;
  if (s.length === 1) return 1;
  for (end = 0; end < s.length; end++) {
    if (freq[s[end]] >= 0 && freq[s[end]] >= begin) {
      console.log(max, "before");
      max = Math.max(end - begin, max);
      console.log(max, "after");
      begin = freq[s[end]] + 1;
      console.log(freq, "changeing end", begin, max);
    }
    freq[s[end]] = end;
    console.log(freq);
  }
  max = Math.max(end - begin, max);
  console.log("final ", max);
  return max;
};

// lengthOfLongestSubstring("abdbsbeuf")
// lengthOfLongestSubstring("au");

var longestPalindrome = function (s: string) {
  let palindromes = "";
  let iterations = 0;
  let isPalindrome = (s: string) => {
    let newstr = s.slice().split("").reverse().join("");
    if (s === newstr) {
      if (palindromes.length < s.length) {
        return true;
      }
    }
    return false;
  };
  // console.log(s.length, "pali");
  for (let i = 0; i < s.length + 1; i++) {
    for (let j = 0; j < s.length - i + 1; j++) {
      iterations++;
      let substr = s.substring(j, i + j);
      //   console.log(substr, j, i);

      if (isPalindrome(substr)) {
        palindromes = substr;

        break;
      }
    }
  }
  console.log(palindromes, iterations);
  return palindromes;
};

longestPalindrome("abbgtjgmgj");
longestPalindrome("baaaaab");
console.log(new Date().getTime());
longestPalindrome(
  "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcgconsole.log(new Date().getTime())"
);

console.log(new Date().getTime());
