const factorial = (x: number, currentResult = 1): number => {
  if (x <= 1) {
    return currentResult;
  }

  return factorial(x - 1, currentResult * x) as number;
};

const _factorial = (x: number): number => {
  if (x <= 1) {
    return 1;
  }

  return (x * _factorial(x - 1)) as number;
};

export { factorial,_factorial };
