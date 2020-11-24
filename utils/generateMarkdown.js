// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.license);
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
  console.log(licenseTag);
  return `# ${data.projectName}

## Description

${data.projectDescription}

${licenseTag}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Links](#links)

* [Questions](#questions)

## Installation

Install necessary dependencies with ${data.npmDepend} command.

## Usage

${data.repoInfo}

## License

Licensed under ${data.license} license.

## Contributing

${data.contributeInfo}

## Test

Use ${data.testCommand} command to test repo.

## Links

https://${data.userName}.github.io/{add repo name here}
https://github.com/${data.userName}/{add repo name here}

## Questions

Email ${data.emailAddy} with any questions.
`;
}

module.exports = generateMarkdown;
