let person = {
    name: "John",
    age: 30,
    occupation: "Software Engineer"
  };
  
  // console.log(person['age'])
  // let {occupation, age, name} = person // destructuring
  console.log(age);
  
  let listOfNames = ["Ali", "Bob", "Farax", "John", "Mary"];
  // let oneName = listOfNames[0];
  // console.log(oneName)
  let [oneName, anotherName] = listOfNames;
  console.log(anotherName);
  