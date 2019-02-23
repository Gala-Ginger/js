function sumArg() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

console.log(sumArg(4, 5, 6));
