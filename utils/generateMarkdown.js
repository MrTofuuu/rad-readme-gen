// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }
    return `- [License](#license)`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }
    return `## License

${renderLicenseLink(license)}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${data.license ? renderLicenseLink(): ''}
## Installation
${data.installation}

## Usage
${data.usage}

${data.license ? renderLicenseSection(data.licenseType) : ''}
${data.license ? data.licenseType : ''}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

If you have any questions please reach out here

Email: [${data.email}](mailto:${data.email})

GitHub: [${data.github}'s GitHub](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;