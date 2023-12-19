// function isThisAPalindrome(str) {
//   const reversedStr = str.split("").reverse().join("");

//   return str === reversedStr;
// }

function isThisAPalindrome(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}

console.log(isThisAPalindrome("nitrogen"));
