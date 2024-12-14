let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const checkIfAnagram = (left: string, right: string) => {
  if (left.length !== right.length) return false;
  //   let freq: { [key: string]: number } = {};
  //   for (let i of left) {
  //     freq[i] ? freq[i]++ : (freq[i] = 1);
  //   }
  //   for (let i of right) {
  //     if (freq[i]) {
  //       freq[i]--;
  //     } else return false;
  //   }

  //   for (let i in freq) {
  //     if (freq[i] > 0) {
  //       return false;
  //     }
  //   }
  return left.split("").sort().join() === right.split("").sort().join();
};

const ana = (strs: string[]) => {
  //   const checkIfAnagram = (left: string, right: string) => {
  //     if (left.length !== right.length) return false;
  //     let freq: { [key: string]: number } = {};
  //     for (let i of left) {
  //       freq[i] ? freq[i]++ : (freq[i] = 1);
  //     }
  //     for (let i of right) {
  //       if (freq[i]) {
  //         freq[i]--;
  //       } else return false;
  //     }

  //     for (let i in freq) {
  //       if (freq[i] > 0) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   };

  let final: string[][] = [];
  //   let hash: { [key: string]: string[] } = {};
  //   for (let str of strs) {
  //     let pushed = false;
  //     for (let gram in hash) {
  //       if (checkIfAnagram(gram, str)) {
  //         hash[gram].push(str);
  //         pushed = true;
  //         break;
  //       }
  //     }
  //     if (!pushed) {
  //       hash[str] = [];
  //     }
  //   }

  //   for (let i in hash) {
  //     let current = [i];
  //     current = [...current, ...hash[i]];

  //     final.push(current);
  //   }

  for (let str of strs) {
    let push = false;
    for (let arr of final) {
      if (checkIfAnagram(arr[0], str)) {
        arr.push(str);
        push = true;
        break;
      }
    }
    if (!push) {
      final.push([str]);
    }
  }

  console.log();
  console.log(final);
};

ana(strs);

export { ana, checkIfAnagram };
