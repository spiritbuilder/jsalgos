export const printPyramid = (n: number) => {
  let pyramid = "";

  const createString = (max: number, curr: number) => {
    let str = [];
    for (let i = 0; i < 2 * max - 1; i++) {
      str.push(" ");
    }
    for (let i = 0; i < curr; i++) {
      str[max - curr + 2 * i] = "*";
    }

    return str.join("");
  };

  for (let i = n - 1; i >= 0; i--) {
    pyramid += `${createString(n, i + 1)}\n`;
  }

  console.log(pyramid);
};

printPyramid(7);

printPyramid(5);

printPyramid(4);

printPyramid(0);
