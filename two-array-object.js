// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let obj = {};
  // spread arr1 values into obj as keys
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i] || null;
  }
  return obj;
  // spread arr2 values or null into obj as values
}

console.log(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]));
console.log(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4]));
