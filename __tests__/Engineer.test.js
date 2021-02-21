const Engineer = require("../lib/Engineer");

describe("Initialization", () => {
  it("should create an object with a name, id, email, & GitHub username if provided valid arguments", () => {
    const name = "Dan";
    const id = "031839";
    const email = "dan.green@hdrinc.com";
    const github = "danielryangreen";
    const engineer = new Engineer(name, id, email, github);
    expect(typeof(engineer)).toEqual("object");
    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.github).toEqual(github);
  });
});
