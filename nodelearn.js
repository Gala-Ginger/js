function sumArg() {
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sumArg(4, 5, 6));
