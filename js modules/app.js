// app.js

// Import named exports and the default export from math.js
import multiply, { add as dd, subtract } from "./math.js";

// Perform operations and log results to the console
console.log("Addition: 5 + 3 =", dd(5, 3));
console.log("Subtraction: 10 - 4 =", subtract(10, 4));
console.log("Multiplication: 6 * 7 =", multiply(6, 7));

// Display results in the HTML document
document.getElementById("output").innerHTML = `
  <p>Addition: 5 + 3 = ${dd(5, 3)}</p>
  <p>Subtraction: 10 - 4 = ${subtract(10, 4)}</p>
  <p>Multiplication: 6 * 7 = ${multiply(6, 7)}</p>
`;

// as = rename