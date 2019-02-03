var arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (a > val || val > b) {
      arr.splice(i--, 1);
    }

  }

}

filterRangeInPlace(arr, 1, 4);
console.log(arr);
