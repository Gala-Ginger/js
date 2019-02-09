function getLastDayOfMonth(year, month) {

  var date = new Date(year, month + 1, 0);

  return date.getDate(0)
}


console.log(getLastDayOfMonth(2018, 4));
