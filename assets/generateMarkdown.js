// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return 'N/A';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project utilizes the ${license} license. Please refer to the repo for more details.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  
  ## Badge
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installion}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.testing}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  If you have any questions about the code please check out my GitHub at https://github.com/${data.userNameGitHub}. Otherwise feel free to reach me via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
