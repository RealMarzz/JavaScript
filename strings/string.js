// let town = "London";


// const fullName1 = "Maryam Abdullahi"; //double quotes
// const fullName2 = 'Maryam Abdullahi';  //single quotes
// const fullName3 = `Maryam Abdullahi`; //backticks/template literals
// const fullName4 = new String("Maryam Abdullahi"); //using the new keyword


// let fullSentence = "Hello , my name is " + fullName1 + " and I am from " + town;
// let fullSentence = `Hello , my name is ${fullName1} and I am from ${town}`
// console.log(fullSentence)

// let fullName = "Maryam Abdullahi";
// console.log(fullName.length); 
// console.log(fullName.indexOf("b")) //find the index of the letter that is passed as an argument

// console.log(fullName.charAt("4")); //finds character of the index of 4

// console.log(fullName.concat(" ").concat(town)) // adds the first variable next to the contacted one //(" ") = an empty string which is a space that is seperating town and the name with a space
// console.log(fullName + " " + town) // same as the above line but more readable

// console.log(fullName.replace("Maryam","Ali")) //replaces maryam with ali in the last name

let ukNationalAnthem = 
    "God save our gracious King,\n Long live our noble King,\n God save the King.\n Send him victorious, \n Happy and glorious, \n Long to reign over us,\n God save our King!\n.............................."

// console.log(ukNationalAnthem.replaceAll("King","Queen"));
// console.log(ukNationalAnthem[2]) //square brackets are like index of

// console.log(ukNationalAnthem.slice(29,53)) //slicing the string from index 30 to 50

// console.log(ukNationalAnthem.trim())
 
// if(ukNationalAnthem.endsWith("!"))
// {
//     console.log("The anthem does end with it")
// }
// else
// {
//     console.log("The anthem does not end with it")
// }

 console.log(ukNationalAnthem.repeat(3))
