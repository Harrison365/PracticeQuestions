function calculateTables(guests, seats) {
  const tables = Math.floor(guests / seats);
  const remainingGuests = guests % seats;
  return { tables, remainingGuests };
}
