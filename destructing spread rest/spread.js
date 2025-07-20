// const originalArray = [100008, 2, 4];
// console.log(originalArray);

// const copiedArray = [...originalArray];
// console.log(copiedArray);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// const numbers = [2, 3, 4];
// const newNumbers = [1, ...numbers, 5];

// console.log(newNumbers); // Output: [1, 2, 3, 4, 5]

let person = {
    name: "John",
    age: 30,
    occupation: "Software Engineer"
  };
const newPerson = {...person, occupation: "Data Scientist", city: "London"};
console.log(newPerson); // Output: { name: 'John', age: 30, occupation
// 'Data Scientist' }
