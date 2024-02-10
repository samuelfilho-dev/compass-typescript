// Sintaxe de uma Arrow Function
const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);
