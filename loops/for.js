console.log("Start") //appears 1 time
let students = ["Bob", "Tim" , "John" , "Alice"]

for(let index = 0; index < students.length; index++) 
{
    if (index == 5){
        continue // 5 is exclude 
    }
    console.log("Hello " + students[index]); //hello to the students in the array
    console.log("World")
    console.log("The counter is " + index) //tell what number its on
    console.log("............................................")
}

console.log("End")  //appears 1 time
