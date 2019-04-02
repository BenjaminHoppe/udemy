 // 1sr exercise

function printReverse(arr) {
  for(var i = arr.length -1; i >= 0; i--){
  console.log(arr[i]);
  }
}
printReverse([3,6,2,5]);

// 2nd exercise
function isUniform(arr) {
  var first = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

// 3rd exercise

function sumArray(arr) {
  var total = 0
  arr.forEach(function(element) {
    total += element
  });
  return total;
}
