function convert(s: string, numRows: number): string {
  let final = [];
  let temp = [];

  let isEdge = true;
  let lastFilled = null;
  if (numRows < 2) {
    console.log(s);
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    if (isEdge && temp.length <= numRows) {
      temp.push(s[i]);
      if (temp.length === numRows || i === s.length - 1) {
        final.push(temp);
        isEdge = numRows === 2 ? true : false;
        temp = [];
      }
    } else {
      if (!isEdge) {
        let _temp = Array(numRows).fill(null);
        let idx: number = lastFilled ? lastFilled : numRows - 2;
        _temp[idx] = s[i];
        lastFilled = idx;
        if (lastFilled) {
          lastFilled--;
          if (!lastFilled) {
            lastFilled = null;
            isEdge = true;
          }
        }
        final.push(_temp);
      }
    }
  }
  let str = "";
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < final.length; i++) {
      let item = final[i][j];
      str += item ?? "";
    }
  }

  console.log(final, str);

  return str;
}

export { convert };


