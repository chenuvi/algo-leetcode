function evalRPN(tokens: string[]): number {
  const heleperStack = [];
  const operatorMap: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["/", (a, b) => Math.trunc(a / b)],
    ["*", (a, b) => a * b],
  ]);
  let a: number, b: number;
  for (let i of tokens) {
    if (operatorMap.has(i)) {
      b = heleperStack.pop()!;
      a = heleperStack.pop()!;
      heleperStack.push(operatorMap.get(i)!(a, b));
    } else {
      heleperStack.push(Number(i));
    }
    // console.log("heleperStack: ", heleperStack);
  }
  return heleperStack[0];
}

export { evalRPN };
