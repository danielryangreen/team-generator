const Intern = require("../lib/Intern");

describe("Initialization", () => {
  it("should create an object with a name, id, email, & school if provided valid arguments", () => {
    const name = "Dan";
    const id = "031839";
    const email = "dan.green@hdrinc.com";
    const school = "University of Illinois";
    const intern = new Intern(name, id, email, school);
    expect(typeof(intern)).toEqual("object");
    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });
});
