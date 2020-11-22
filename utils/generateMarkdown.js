// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description

  ${data.projectDescription}

  ## Table of Contents

`;
}

module.exports = generateMarkdown;
