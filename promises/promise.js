// Create a Promise to check if we have coffee beans
// let makeCoffee = new Promise((resolve, reject) => {
//     let haveBeans = true; // Change to false to simulate no coffee beans
  
//     if (haveBeans) {
//       resolve("Coffee beans are available. ☕ Making your coffee...");
//     } else {
//       reject("No coffee beans available! 😢");
//     }
//   });
  
//   // Use the promise to make coffee
//   makeCoffee
//     .then((message) => {
//       console.log(message); // If we have beans, coffee is made
//       console.log("Enjoy your coffee! 😊");
//     })
//     .catch((error) => {
//       console.log(error); // If no beans, handle the error
//       console.log("Please buy some coffee beans first. 🛒");
//     });
  
// Mother's promise to buy an iPhone if the boy behaves well
let motherPromise = new Promise((resolve, reject) => {
    let boyBehaves = true; // Change this to false to simulate the boy misbehaving

    if (boyBehaves) {
        resolve("Mom buys you the iPhone!");
    } else {
        reject("Mom: No iPhone! You didn't behave.");
    }
});

// Father's promise depends on Mother's promise
let fatherPromise = motherPromise
    .then((momMessage) => {
        console.log(momMessage);
        return new Promise((resolve) => {
            resolve("Dad: Since Mom bought you an iPhone, I'll buy you a SIM card.");
        });
    })
    .catch((error) => {
        console.log(error);
        console.log("Boy: Oh no! My dream of getting an iPhone is shattered!");
    });

// Sister's promise to buy a phone cover if Dad buys the SIM card
let sisterPromise = fatherPromise.then((dadMessage) => {
    console.log(dadMessage);
  
    return new Promise((resolve) => {
        resolve("Sister: Since Dad bought you a SIM card, I'll buy you a phone cover.");
    });
});

// Execute the chain of promises
sisterPromise
    .then((sisterMessage) => {
        console.log(sisterMessage);
        console.log("Boy: Yay! I got an iPhone, a SIM card, and a phone cover!");
    })
    .catch((error) => {
        console.log(error);
        console.log("Boy: Oh no! My dream of getting an iPhone is shattered.");
    });
