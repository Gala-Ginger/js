var arr = ['воз', ' киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function aclean(arr) {

  var sort = {};

  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i].toLowerCase().split('').sort().join('');

    sort[sorted] = arr[i];
  }

  var result = [];

  for (var key in sort) result.push(sort[key]);

  return result;
} 

console.log(aclean(arr));
