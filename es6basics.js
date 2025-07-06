const product = {
  description: "This is nice product",
};

const { description } = product;

console.log(description);

const array2 = [2, 3, 4];
let array3 = [10, 11, 12];
console.log(...array2);

console.log([...array2]);

function getInfo(a, ...b) {
  console.log(a, b);
  //here b will be an array
}

console.log(getInfo(1, 2, 3, 4, 5));

const personArray = [
  {
    name: "person1",
    age: "30",
    country: "usa",
  },
  {
    name: "person2",
    age: "40",
    country: "usa",
  },
  {
    name: "person3",
    age: "50",
    country: "Russia",
  },
];

//get names of each person in the arra

const personNames = personArray.map((item, index) => `${item.name} ${index}`);

console.log(personNames);

//find will match the first item and return, here it returns the first matching item
let getPersonFromUsa = personArray.find((person, index) => {
  return person.country === "usa";
});

console.log(getPersonFromUsa);

// getAllPerson from USA as an array

const getAllPeopleFromUs = personArray.filter(
  (person, index) => person.country === "usa"
);

console.log(getAllPeopleFromUs);

// some and every , some will return a boolean flag based on if any condition satisfies
//every will true when all the condition satisfy

const checkSome = personArray.some((person, index) => person.age > 30);
console.log(checkSome);

// includes- returns boolean value based on array provided
const fruitArray = ["apple", "banana", "orange"];
console.log(fruitArray.includes("apple"));

//indexOf will give of match location, -1 if no match

console.log(fruitArray.indexOf("apple"));

const getIndex = personArray.findIndex((person) => person.country === "russia");
console.log(getIndex);

const a = [1, 2];

const b = [6, ...a, 8];
console.log(b);

console.log([] + []); //[] + [] → "" — empty arrays are coerced to empty strings.
console.log([] + {}); //"[object Object]" — [] is coerced to "", {} is coerced to "[object Object]".

// The for loop runs synchronously: i = 0 → i = 1 → i = 2 → i = 3 → stop.
//setTimeout just schedules the callback: But setTimeout does not run it immediately — it just stores the callback.
//Because var is function-scoped, not block-scoped. so, same i value is shared with all the functions and will print 3, 3 times
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//let is block-scoped → each loop iteration has its own i:

//1st iteration: i = 0

//2nd iteration: i = 1

//3rd iteration: i = 2

//Each callback closes over its own copy of i.
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//IIFE is a way to fix the issue with var

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}

//out of below code is false, because objects and functions are compared by reference, not by value
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2);
