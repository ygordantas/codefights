function differentSymbolsNaive(s) {
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) === -1) {
      newStr += s[i];
    }
  }

  return newStr.length;
}
