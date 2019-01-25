var arr = [1, 2, 3, 4, 5, 6, 'tic', 'tac', 'fuck'];

function filterRange(arr, a, b) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }
  return result;
}

var filtered = filterRange(arr, 2, 5);
console.log(filtered);
console.log(arr);
