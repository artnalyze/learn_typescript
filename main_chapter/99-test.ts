function addAA(a: number, b: number): number {
  return a + b;
}

let addK: (a: number, b: number) => number;

addK = function (a: number, b: number): number {
  return a + b;
};

addK(1, 2);

