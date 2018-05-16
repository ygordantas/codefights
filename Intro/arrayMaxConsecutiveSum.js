function arrayMaxConsecutiveSum(inputArray, k) {
  let slice = inputArray.slice(0, k);
  let sum = slice.reduce((a, b) => a + b);
  let max = sum;

  for (let i = 0; i < inputArray.length; i++) {
    sum = sum - inputArray[i] + inputArray[i + k];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
