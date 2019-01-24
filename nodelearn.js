"use strict";

var salaries = {
  'Vasya': 100,
  'Petya': 300,
  'Dasha': 250
};

var max = 0;
var maxName = "";
  for (var key in salaries) {
  if (max < salaries[key]) {
    max = salaries[key];
    maxName = key;
  }
  }
console.log(maxName || "net");
