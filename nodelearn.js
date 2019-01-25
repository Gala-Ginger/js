var arr = [1, 2, 3, 4, 5, 6, 'tic', 'tac', 'fuck'];

if ([].indexOf) {
  var find = function(arr, value) {
    return arr.indexOf(value);
  }
} else {
  var find = function(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (value === arr[i]) return i;
    }
    return -1;
  }
}

console.log(find(arr, 4))
