function myAtoi(s: string): number {
  let str = s.replaceAll(" ", "");
  let lastString = "";
  let digits = "";
  let first = str[0];
  if (first === "-") {
    lastString += "-";
    digits = str.slice(1);
  } else if (first === "+") {
    digits = str.slice(1);
  } else {
    digits = str;
  }

  let ret = parseInt(lastString + digits);
  if(isNaN(ret)) return 0
  if (ret < -(2 ** 31)) return -(2 ** 31);
  if (ret > 2 ** 31 - 1) return 2 ** 31 - 1;
  return ret;
}

export default myAtoi
