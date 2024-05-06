let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

let lowercaseAnimals = animals.map(animal => animal.toLowerCase());
console.log(lowercaseAnimals);

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

let names = people.map(person => person.name);
console.log(names);
