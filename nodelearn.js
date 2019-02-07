var arr = [1, 2, 3, 4, 5]

function getSums(arr) {

  var result = [];
  if(!arr.length) return result;

  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });

  result.push(totalSum);

  return result;
}

console.log(getSums(arr))
