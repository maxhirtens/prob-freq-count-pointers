// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < num1.length; i++) {
    arr1.push(parseInt(num1[i]));
  }
  for (let j = 0; j < num2.length; j++) {
    arr2.push(parseInt(num2[j]));
  }
  let added1 = arr1.reduce((sum, a) => sum + a);
  let added2 = arr2.reduce((sum, a) => sum + a);

  if (added1 === added2) {
    return true;
  }
  return false;
}
console.log(sameFrequency(182, 281));
console.log(sameFrequency(3523589578, 5879385));
