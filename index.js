const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];
let nextEmployee = "";

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
      name: "managerId",
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
  ])
  .then((answers) => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    console.log(teamMembers);
    nextEmployee = answers.nextEmployee;
    console.log(nextEmployee);
  });
}
createManager();
