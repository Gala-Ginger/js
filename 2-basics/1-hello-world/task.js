var num = [];
while (true) {
  var value = prompt('Введите число', 0);
  if (value == '' || value === null || isNaN(value)) break;
  num.push(+value);
}

var sum = 0;
for (var i = 0; i < num.length; i++) {
  sum += num[i];
}
 alert(sum);
