function findTicketPrices(emailString) {
  for (let i = 0; i < emailString.length; i++) {
    const num = parseInt(emailString[i]);
    if (!isNaN(num)) {
      return true;
    }
  }
  return false;
}
