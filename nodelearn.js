function getDateAgo(date, days) {
  var dateCopy = new Date(date);
  
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

var date = new Date(2019, 1, 8);

console.log(getDateAgo(date, 68));
