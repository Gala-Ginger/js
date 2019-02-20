var calculator = {
  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }
};

calculator.read();
console.log(calculator.sum(3, 2));
console.log(calculator.mul(4, 5));
