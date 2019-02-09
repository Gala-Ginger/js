function getLocalDay(date) {
  var day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

console.log(getLocalDay(new Date(2019, 1, 4)));
