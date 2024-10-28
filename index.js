import fs from 'fs';
import inquirer from 'inquirer';

// Questions for the user
const questions = [
  { type: 'input', name: 'projectTitle', message: 'What is your project title?' },
  { type: 'input', name: 'description', message: 'Provide a description of your project:' },
  { type: 'input', name: 'installation', message: 'How do you install your project?' },
  { type: 'input', name: 'usage', message: 'How do you use your project?' },
  { type: 'input', name: 'contributing', message: 'How can people contribute to your project?' },
  { type: 'input', name: 'tests', message: 'How do you run tests for your project?' },
  { type: 'list', name: 'license', message: 'Choose a license for your project:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3'] },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' }
];

// Function to generate the README content
function generateReadMe(answers) {
  return `
# ${answers.projectTitle}

![License](https://img.shields.io/badge/License-${answers.license}-green)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
\`\`\`
${answers.installation}
\`\`\`

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, you can reach me at [${answers.email}](mailto:${answers.email}).  
GitHub: [https://github.com/${answers.github}](https://github.com/${answers.github})
  `;
}

// Function to initialize the app and ask questions
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadMe(answers);
      fs.writeFileSync('README.md', readmeContent);
      console.log('README.md file has been generated successfully!');
    })
    .catch((error) => {
      console.error('Error generating the README file', error);
    });
}

// Initialize the app
init();
