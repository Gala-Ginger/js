function makeBuffer() {
  var buff = "";

  return function (piece) {
    if (arguments.length == 0) {
      return buff;
    }
    buff += piece;
  };
}

var buffer = makeBuffer();

buffer("Замыкания");
buffer(" Использовать");
buffer(" Нужно!");

console.log(buffer());
