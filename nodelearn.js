var arr = ['кришна', 'кришна', 'харе', 'харе', 'кришна', 'харе', '8-'];

function unique(arr) {

  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var sorted = arr[i];
    obj[sorted] = true;
  }

  return Object.keys(obj);
} 

console.log(unique(arr));
