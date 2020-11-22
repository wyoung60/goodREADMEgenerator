const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
const questions = [
  { message: "What is your GitHub username? ", name: "userName" },
  { message: "What is your email address? ", name: "emailAddy" },
  { message: "What is your project name? ", name: "projectName" },
  { message: "Short description of project: ", name: "projectDescription" },
  { message: "What kind of license for your project?", name: "license" },
  { message: "What command to install dependencies?", name: "npmDepend" },
  { message: "What command should be run for tests?", name: "testCommand" },
  {
    message: "What does the user need to know about using the repo?",
    name: "repoInfo",
  },
  {
    message: "What does the user need to know about contributing to the repo?",
    name: "contributeInfo",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  console.log(data);
  fs.writeFile(fileName, JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("Readme.json", response));
}

// function call to initialize program
init();
