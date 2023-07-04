// add whatever parameters you deem necessary
function constructNote(str, letters) {
  for (let i in str) {
    if (letters.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(constructNote("apple", "ldppa"));
