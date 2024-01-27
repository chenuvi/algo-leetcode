const delMinChar = (str: string): string => {
  if (!str.length) return str;
  let charMap: { [key: string]: number } = {};
  for (let char of str) {
    charMap[char] = (charMap[char] | 0) + 1;
  }
  let min = Infinity;
  let minChar: string = "";
  for (let key in charMap) {
    if (charMap[key] < min) {
      min = charMap[key];
      minChar = key;
    }
  }

  const res: string[] = [];
  for (let char of str) {
    if (char !== minChar) {
      res.push(char);
    }
  }
  return res.join("");
};

export { delMinChar };
