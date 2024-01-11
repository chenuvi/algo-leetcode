export function isHappy(n: number): boolean {
  let StoreSet: Set<number> = new Set();
  while (n !== 1 && !StoreSet.has(n)) {
    StoreSet.add(n);
    n = calcSum(n);
  }
  return n === 1;
}

function calcSum(value: number): number {
  return String(value)
    .split("")
    .reduce((pre, cur) => pre + Number(cur) * Number(cur), 0);
}
