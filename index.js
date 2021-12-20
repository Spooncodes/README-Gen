// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user input
const promptUser = () => {
  console.log(`
    Welcome to the README generator
    `);

  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username? (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("What is your GitHub username?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("What is your GitHub username?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "What is the project title? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("What is the project title?");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a project description:",
    },
    {
      type: "confirm",
      name: "confirmURL",
      message: "Does application have a URL?",
      default: false,
    },
    {
      type: "input",
      name: "applicationURL",
      message: "Please provide project URL:",
      when: ({ confirmURL }) => {
        if (confirmURL) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmLicense",
      message: "Does project use a license?",
      default: false,
    },
    {
      type: "list",
      name: "license",
      message: "What license does your project use?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
      ],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "type",
      name: "installationInstructions",
      message: "Please provided installation instructions:",
    },
    {
      type: "type",
      name: "usage",
      message: "Please provide instructions for application use:",
    },
    {
      type: "type",
      name: "test",
      message: "Please provide details how application can be tested:",
    },
    {
      type: "confirm",
      name: "confirmContributors",
      message: "Are there contributors to the project",
      default: false,
    },
    {
      type: "type",
      name: "contributors",
      message: "Please provide contributors:",
      when: ({ confirmContributors }) => {
        if (confirmContributors) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

// function to write readme
const writeToFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README created!",
      });
    });
  });
};



// Function call to initialize app
promptUser().then(answers => {
  console.log(answers)
  let structuredResponse = generateMarkdown(answers)
  // console.log(structuredResponse)
  writeToFile("README.md", structuredResponse)
})