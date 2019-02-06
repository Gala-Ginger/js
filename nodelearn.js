var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya, masha, vovochka ];

function sortingAge(personA, personB) {
return personA.age - personB.age;
}

people.sort(sortingAge);


console.log(people[0].age)
