// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "MIT License":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT))";
      break;
    case "Apache License":
      licenseBadge = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License (GPL) v3":
      licenseBadge = "[![License: GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3-Clause License":
      licenseBadge = "[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "ISC License":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "[![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Unlicensed":
      licenseBadge: ""
      break;
  } 
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  switch (license) {
    case "MIT License":
      licenseLink = "(https://opensource.org/licenses/MIT)";
      break;
    case "Apache License":
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License (GPL) v3":
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "BSD 3-Clause License":
      licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "ISC License":
      licenseLink = "(https://opensource.org/licenses/ISC)";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Unlicensed":
      licenseLink: ""
      break;
  } 
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license) {
    const licenseBadge = renderLicenseBadge(license);
    const licenseLink = renderLicenseLink(license);
    licenseSection = `##License This projcet is license under the ${license} license. Click [here](${licenseLink}) to learn more! ${licenseBadge}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  ## License
  This project is licensed under the ${data.license} license.
  ${renderLicenseLink(data.license)}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
