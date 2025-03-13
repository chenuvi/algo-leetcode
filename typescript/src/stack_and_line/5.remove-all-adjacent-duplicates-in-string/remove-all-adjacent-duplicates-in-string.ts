function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    let top = stack[stack.length - 1];
    if (top === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

export { removeDuplicates };
