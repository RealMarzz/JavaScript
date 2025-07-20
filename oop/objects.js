// let person1 = {
//     name: "John",
//     age: 30,
//     occupation: "Developer",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345",
//         },
//         hobbies: ["reading", "hiking", "coding"],
        
// };
// person1.age = 21
// console.log(person1.age);

// let animal = {}
// let animal = new Object()
// animal.name = "Bella"
// animal.age = 3
// animal.breed = "Golden Retriever"
// animal.color = "Golden"
// animal.size = "Medium"
// animal.hobbies = ["chasing squirrels", "playing fetch", "snuggling"]
// animal.address = {
//     street: "123 Dogwood Dr",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//     }
//     animal.isCute = true
//     console.log(animal) 

let footballer = {
    name: "Cristiano Ronaldo",
    age: 37,
    position: "Forward",
    team: "Manchester United",
    shirtNumber: 7,
    knownAs: "GOAT",
     kick: function(){
        console.log(this.name + " kicks the ball")

    },
    score: function(){
        console.log(this.name + " scores a goal")
    }
}
// for (const key in footballer) {
//     // console.log(footballer[key])
//     console.log(key)


// }
// console.log(footballer['position'])

footballer.score()