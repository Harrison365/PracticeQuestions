function findBiggestAndSmallest(numbers) {
  if (numbers.length === 0) {
    return {};
  }
  if (numbers.length === 1) {
    return { biggest: numbers[0], smallest: numbers[0] };
  }
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return { biggest: max, smallest: min };
}
