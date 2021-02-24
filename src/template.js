function generateHtml(data) {
  return `<p>boilerplate stuff</p>
${generateTeam(data)}
`;
}

const generateTeam = team => {

  const generateManager = manager => {
    return `<p>${manager.getName()}</p>
<p>${manager.getId()}</p>
<p>${manager.getEmail()}</p>
<p>${manager.officeNumber}</p>
`;
  };
  
  const generateEngineer = engineer => {
    return `<p>${engineer.getName()}</p>
<p>${engineer.getId()}</p>
<p>${engineer.getEmail()}</p>
<p>${engineer.getGithub()}</p>
`;
  };

  const generateIntern = intern => {
    return `<p>${intern.getName()}</p>
<p>${intern.getId()}</p>
<p>${intern.getEmail()}</p>
<p>${intern.getSchool()}</p>
`;
  };

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  
  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );

  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );

  return html.join("");
}

module.exports = {
  generateHtml
};
