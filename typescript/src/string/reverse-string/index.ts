function reverseString(s: string[]): void {
  //   s.reverse();
  let [l, r] = [0, s.length - 1];
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
}

export { reverseString };
