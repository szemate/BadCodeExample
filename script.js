let string = "Bill Gates";
let currentJob = "Programmer"
let currentage = 57;
let skills = "JavaScript, HTML and CSS"

printDetailsToLog();

function printDetailsToLog() {
    let output = myFunction();
    //let output1 = getSkillsSentence();
    let output2 = getSkillsSentence();

  console.log(output);
    console.log(output2);
}

// function myFunction() {
//   console.log(output);
// }

function myFunction() {
   return "Hello, my name is " + string + " and I am " + currentage
}

function getSkillsSentence() {
   return "My skills are " + skills
}

