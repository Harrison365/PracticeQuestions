function findEvenLengthStrings(arr) {
  let evenStrings = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length % 2 === 0) {
      evenStrings.push(arr[i]);
    }
  }

  return evenStrings;
}
