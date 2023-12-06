function greetGuest(name) {
  if (name === "") {
    return "Hello !";
  }
  const newName = name[0].toUpperCase() + name.slice(1);
  return "Hello " + newName + "!";
}
