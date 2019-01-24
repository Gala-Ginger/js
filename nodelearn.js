"use strict";

var salaries = {
  'Vasya': 100,
  'Petya': 300,
  'Dasha': 250
};

var sum = 0;
  for (var key in salaries) {
    sum += salaries[key];
  }
console.log(sum);
