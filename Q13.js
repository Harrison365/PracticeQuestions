function makeGuestList(person) {
  const arr = person.name.split(" ");

  person.firstName = arr[0];
  person.lastName = arr[1];
  delete person.name;
  return person;
}
