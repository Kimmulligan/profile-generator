// array of questions for user
const employeeArray = [];
const inquirer = require("inquirer");
const fs = require("fs");
const generateDynamicHTML = require("./utils/generateHTML");
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your employee's name?",
  },
  {
    type: "checkbox",
    message: "What is your employee's job titile?",
    name: "title",
    choices: ["Manager", "Engineer", "Intern"],
    default:["Engineer"]
  },
  {
    type: "input",
    name: "id",
    message: "What is employee's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your employee's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your employee's github?",
  },
  { type: "list",
    name: "continue",
    message: "Do you have another employee to add?",
    choices: ["Yes", "No"],
  }
];
// function to initialize program
function init() {
    inquirer
      .prompt(
        questions
        /* Pass your questions in here */
      )
      .then((answers) => {
        employeeArray.push(answers)
        if (answers.continue === "Yes"){
          init()
        }
        else {
          const returnValue = generateDynamicHTML(employeeArray);
        }
      });
}
for (let index = 0; index < employeeArray.length; index++) {
  const team = employeeArray[index];
  
}

// function call to initialize program
init();
