// add whatever parameters you deem necessary
function averagePair(arr, average) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let val = (arr[start] + arr[end]) / 2;
    if (val === average) {
      return true;
    } else if (val < average) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
