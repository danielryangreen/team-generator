function generateHtml(data) {
  return `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

  <title>Team Generator</title>
</head>

<body class="bg-light">
  <div class="container">
    <header class="row">
      <div class="col">
        <h1 class="p-3 mb-3 text-center bg-danger text-white">My Team</h1>
      </div>
    </header>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
${generateTeam(data)}
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
    crossorigin="anonymous"></script>
</body>

</html>
`;
}

const generateTeam = team => {

  const generateManager = manager => {
    return `<div class="col">
  <div class="card h-100">
    <div class="card-header bg-primary text-white">
      <h2>${manager.getName()}</h2>
      <h3>${manager.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a target="_blank" href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>
`;
  };
  
  const generateEngineer = engineer => {
    return `<div class="col">
  <div class="card h-100">
    <div class="card-header bg-primary text-white">
      <h2>${engineer.getName()}</h2>
      <h3>${engineer.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a target="_blank" href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub username: <a target="_blank" href="http://github.com/${engineer.getGithub()}" class="card-link">${engineer.getGithub()}</a></li>
    </ul>
  </div>
</div>
`;
  };

  const generateIntern = intern => {
    return `<div class="col">
  <div class="card h-100">
    <div class="card-header bg-primary text-white">
      <h2>${intern.getName()}</h2>
      <h3>${intern.getRole()}</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a target="_blank" href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>
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
