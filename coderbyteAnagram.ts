const checkifAnagram = (str1: string, str2: string) => {
    let counter: { [key: string]: number } = {};
    if (str1 === str2) return false;
    if (!str1 || !str2) return false;
    for (let i = 0; i < str1.length; i++) {
      if (counter[str1[i] as string]) {
        counter[str1[i]]++;
      } else {
        counter[str1[i]] = 1;
      }
    }
  
    for (let i = 0; i < str2.length; i++) {
      if (counter[str2[i]]) {
        counter[str2[i]]--;
      } else {
        return false;
      }
    }
    for (let x of Object.values(counter)) {
      if (x > 0 || x < 0) {
        return false;
      }
    }
  
    return true;
  };
  const countAnagrams = (str: string) => {
    const strArr = str.split(" ");
    console.log(strArr);
    let newArr = [...strArr];
    let total = 0;
    while (newArr.length > 0) {
      let anagrams: string[] = [];
      for (let i = 0; i < newArr.length; i++) {
        if (i < newArr.length - 1) {
          for (let j = i + 1; j < newArr.length; j++) {
            let isAnagram = checkifAnagram(newArr[i], newArr[j]);
            if (isAnagram && !anagrams.includes(newArr[j])) {
              anagrams.push(newArr[j]);
              console.log(anagrams, "anaz");
            }
          }
        }
        delete newArr[i];
        newArr = newArr.filter((m) => !anagrams.includes(m));
      }
      console.log(newArr);
      total += anagrams.length;
    }
  
    console.log(total);
  };
  
  countAnagrams("aa aa dog dog dgo dgo gdo");

  export default countAnagrams