var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      result.push(val);
    }
  }
  return result;
}

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.indexOf(x) != -1;
  };
}

console.log(
  filter(arr, function(a) {
    return a % 2 == 0;
  })
);

console.log(filter(arr, inBetween(3, 6)));

console.log(filter(arr, inArray([1, 2, 10])));
