function formatDate(date) {
  var diff = new Date() - date;

  if (diff < 1000) {
    return "только что";
  }

  var sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + " сек. назад";

    var min = Math.floor(diff / 60000);
    if (min < 60) {
      return min + " мин. назад";
    }

    var d = date;
    d = [
      "0" + d.getDate(),
      "0" + (d.getMonth() + 1),
      "" + d.getFullYear(),
      "0" + d.getHours(),
      "0" + nd.getMinutes()
    ];

    for (var i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
    return d.slice(0, 3).join(".") + " " + d.slice(3).join(":");
  }
}

var date = new Date();
console.log(formatDate(new Date(new Date - 86400 * 1000)));
