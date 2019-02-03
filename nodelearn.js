var obj = {
  className: 'open menu my menu'
};

function removeClass(obj, cls) {
  var arr = obj.className.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (cls == arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }
  obj.className = arr.join(' ');
}

removeClass(obj, 'menu');

console.log(obj.className);
