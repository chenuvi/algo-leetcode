function reverseString(s: string[]): void {
  let [f, l] = [0, s.length -1 ];
  while (f < l) {
    [s[f], s[l]] = [s[l], s[f]];
    f++;
    l--;
  }
}

export { reverseString };
