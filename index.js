// array of questions for user
const employeeArray = [];
const inquirer = require("inquirer");
const fs = require("fs");
const generateDynamicHTML = require("./utils/generateHTML");
const Manager = require("./lib/Manager");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your employee's name?",
  },
  {
    type: "list",
    message: "What is your employee's job titile?",
    name: "title",
    choices: ["Manager", "Engineer", "Intern"],
    default: ["Engineer"],
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
    message: "What is your employee's github? If not applicable leave blank.",
  },
  {
    type: "input",
    name: "number",
    message: "What is the office number? If not applicable leave blank.",
  },
  {
    type: "input",
    name: "school",
    message: "What is your intern's school? If not applicable leave blank.",
  },
  {
    type: "list",
    name: "continue",
    message: "Do you have another employee to add?",
    choices: ["Yes", "No"],
  },
];
// function to initialize program
function init() {
  inquirer
    .prompt(
      questions
      /* Pass your questions in here */
    )
    .then((answers) => {
      employeeArray.push(answers);
      if (answers.continue === "Yes") {
        init();
      } else {
        //const returnValue = generateDynamicHTML(employeeArray);
        fs.writeFile(
          "./dist/index.html",
          generateDynamicHTML(employeeArray),
          (error) => {
            if (error) {
              console.log(error);
              return;
            }
          }
        );
      }
    });
}

// return html

// function call to initialize program
init();
