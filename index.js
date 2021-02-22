const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

function createManager() {
  console.log("Please build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "managerID",
      message: "What is the team manager's ID?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number?",
    },
    {
      type: "list",
      name: "nextEmployee",
      message: "Which type of employee would you like to add next?",
      choices: ["Engineer", "Intern", "I am done adding team members."],
    },
  ]);
}
createManager();
