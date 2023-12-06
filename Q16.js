function orderSupplies(supplies, guests) {
  let sum = 0;

  for (const key in supplies) {
    sum += supplies[key];
  }

  sum *= guests;
  return sum;
}
