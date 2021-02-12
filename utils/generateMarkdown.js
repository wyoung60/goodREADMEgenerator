// function to generate markdown for README
//Imports data from promise in index.js
function generateMarkdown(data) {
  //Get license image based on selection
  let licenseTag = "";
  if (data.license === "MIT") {
    licenseTag =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "APACHE 2.0") {
    licenseTag =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GPL 3.0") {
    licenseTag =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "BSD 3") {
    licenseTag =
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    licenseTag = "";
  }
  //Generates and returns README file
  return `# ${data.projectName}

## Description

${data.projectDescription}

${licenseTag}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Screenshot](#screenshot)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Links](#links)

* [Questions](#questions)

## Installation

Install necessary dependencies with ${data.npmDepend} command.

## Usage

${data.repoInfo}

## Screenshot

## License

Licensed under ${data.license} license.

## Contributing

${data.contributeInfo}

## Tests

Use ${data.testCommand} command to test repo.

## Links

https://${data.userName}.github.io/${data.projectName} </br>
https://github.com/${data.userName}/${data.projectName}

## Questions

Email ${data.emailAddy} with any questions.
`;
}

module.exports = generateMarkdown;
