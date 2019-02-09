function getWeekDay(date) {

  var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return days[date.getDay()];
}

var date = new Date(2019, 1, 8)
console.log(getWeekDay(date));
