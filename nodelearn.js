var ladder = {
  step: 0,

  up: function() {
    this.step++;
    return this;
  },

  down: function() {
    this.step--;
    return this;
  },

  showStep: function() {
    console.log(this.step);
    return this;
  }
};

ladder
  .up()
  .down()
  .up()
  .up()
  .up()
  .showStep();
