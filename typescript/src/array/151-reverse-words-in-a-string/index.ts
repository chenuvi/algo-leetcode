function reverseWords(s: string): string {
  // 解决方法1
  //   return s.split(' ').filter(word => word !== '').reverse().join(' ')
  const wordList = s.trim().split(/\s+/);
  const j = wordList.length;
  for (let i = 0; i < Math.floor(wordList.length / 2); i++) {
    [wordList[i], wordList[j - i - 1]] = [wordList[j - i - 1], wordList[i]];
  }
  return wordList.join(" ");
}

export { reverseWords };
