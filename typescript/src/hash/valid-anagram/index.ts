export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const helperArr: number[] = Array(26).fill(0);
  let pivot = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    helperArr[s.charCodeAt(i) - pivot]++;
    helperArr[t.charCodeAt(i) - pivot]--;
  }
  return helperArr.every((i) => i === 0);
}
