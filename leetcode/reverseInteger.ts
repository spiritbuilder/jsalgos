function reverse(x: number): number {
  let lastString = "";
  let str = x.toString();
  if (str[0] === "-") {
    lastString += "-";
    str = str.slice(1);
  }
  lastString += str.split("").reverse().join("");

  let ret = parseInt(lastString);

//   if (ret < -(2 ^ 31) || ret > (2 ^ 31) - 1) return 0;
  return ret;
}

export default reverse;
