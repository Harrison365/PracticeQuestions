function calculateTaxiFare(seconds) {
  const minutes = Math.ceil(seconds / 60);
  let cost = 500;
  if (minutes > 3) {
    cost += (minutes - 3) * 70;
  }
  return cost;
}
