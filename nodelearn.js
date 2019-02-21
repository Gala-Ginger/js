function Accumulator(startingValue) {
  var value = startingValue;

  this.read = function() {
    return (this.value += +prompt("a?", 0));
  };
}

var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
