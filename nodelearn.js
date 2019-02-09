function getSecondToday() {
  var date = new Date();

  return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondToday(2019, 1, 10));
