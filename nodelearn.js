function makeCounter() {
  var currentCount = 1;

  return {
    // Получить следующее значение
    getNext: function() {
      return currentCount++;
    },

    // Поставить значение
    set: function(value) {
      currentCount = value;
    },

    // Обнулить счетчик
    reset: function() {
      currentCount = 1;
    }
  };
}

var counter = makeCounter();

console.log(counter.getNext());
