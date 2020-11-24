const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
  { message: "What is your GitHub username? ", name: "userName" },
  { message: "What is your email address? ", name: "emailAddy" },
  { message: "What is your project name? ", name: "projectName" },
  { message: "Short description of project: ", name: "projectDescription" },
  {
    type: "list",
    message: "What kind of license for your project?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
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
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Generating README..")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    const data = generateMarkdown(response);
    writeToFile("README.md", data);
  });
}

// function call to initialize program
init();
