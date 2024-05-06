const add = (a, b) => {
    return a + b;
};

let numbers = [5, 11, 8, 20, 7, 15];
let filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers); 

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
let animalsUpperCase = animals.map(animal => animal.toUpperCase());
console.log(animalsUpperCase); 

  
