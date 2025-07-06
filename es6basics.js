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
