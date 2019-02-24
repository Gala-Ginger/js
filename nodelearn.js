function work(a) {}

function makeLogging(f, log) {
  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
  }
  return wrapper;
}
var log = [];
work = makeLoging(work, log);

work(1);
work(5);

for (var i = 0; i < log.length; i++) {
  console.log("Лог:" + log[i]);
}
