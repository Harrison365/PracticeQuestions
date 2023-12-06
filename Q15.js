function isPartyViable(guests) {
  if (guests.length < 5) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < guests.length; i++) {
    count += guests[i].paidForTicket;
  }
  if (count < 100) {
    return false;
  }
  return true;
}
