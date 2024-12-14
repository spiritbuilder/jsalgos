const backSpaceCompare = (s: string, t: string) => {
  const typeOutstring = (str: string) => {
    let length = 0;
    let finalStr = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        if (finalStr !== "") {
          finalStr = finalStr.slice(0, length - 1);
          length--;
        }
      } else {
        finalStr += str[i];
        length++;
      }
    }
    return finalStr;
  };
  return typeOutstring(s) === typeOutstring(t);
};

export { backSpaceCompare };
