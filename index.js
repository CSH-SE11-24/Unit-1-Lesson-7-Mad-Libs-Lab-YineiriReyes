// Console log a welcome message with instructions to mad libs
console.log("Welcome to my game")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("give me an adjective")
let pluralnoun=prompt("give me an pluralnoun")
let verb=prompt("give me an verb")
let adjective2=prompt("give me an adjective2")
// Create an array that stores the values the user entered
let Array=[]

Array.push(adjective)
Array.push(pluralnoun)
Array.push(verb)
Array.push(adjective2)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log("In a small " + Array[0] + " school in the Bronx, there was a problem with too many " + Array[1] +" These " + Array[1] +" loved to " + Array[2] + " which caused Mr. P so many headaches. However, no one wanted to remove them because they were too " + Array[3] + " so they stayed there forever.")






