const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];
let nextEmployee = "Manager";

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

function createEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's ID?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's email?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the engineer's GitHub username?",
    },
    {
      type: "list",
      name: "nextEmployee",
      message: "Which type of employee would you like to add next?",
      choices: ["Engineer", "Intern", "I am done adding team members."],
    },
  ])
  .then((answers) => {
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    teamMembers.push(engineer);
    console.log(teamMembers);
    nextEmployee = answers.nextEmployee;
    console.log(nextEmployee);
  });
}

function createIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: "input",
      name: "internId",
      message: "What is the intern's ID?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's email?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the intern's school?",
    },
    {
      type: "list",
      name: "nextEmployee",
      message: "Which type of employee would you like to add next?",
      choices: ["Engineer", "Intern", "I am done adding team members."],
    },
  ])
  .then((answers) => {
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    teamMembers.push(intern);
    console.log(teamMembers);
    nextEmployee = answers.nextEmployee;
    console.log(nextEmployee);
  });
}

// while (nextEmployee !== "I am done adding team members.") {
//   if (nextEmployee === "Manager") {
//     createManager();
//   }
//   else if (nextEmployee === "Engineer") {
//     createEngineer();
//   }
//   else if (nextEmployee === "Intern") {
//     createIntern();
//   }
// }
