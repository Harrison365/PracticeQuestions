function findFirstOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      return numbers[i];
    }
  }
  return undefined;
}
