function pickWinners(numbers) {
  const returnArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 && i % 2 !== 0) {
      returnArray.push({ seat: i, ticketCost: numbers[i] });
    }
  }
  return returnArray;
}
