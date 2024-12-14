const linearGradient = (start: string, end: string, divisions: number) => {
  let s = start.split(",").map((m) => parseInt(m));
  let e = end.split(",").map((m) => parseInt(m));

  let addArr = s.map((m, i) => (e[i] - m) / divisions);
  let current = [...s];
  console.log(`rgb(${[...current].join(",")})`);
  for (let i = 0; i < divisions; i++) {
    current = current.map((m, i) => m + addArr[i]);
    console.log(`rgb(${[...current].join(",")})`);
  }
  //25,104,198
  //110,252,235

  //28.33,49.33,12.33
};

linearGradient("25,104,198", "110,252,235", 3);

export { linearGradient };
