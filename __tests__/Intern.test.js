const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, & school if provided valid arguments", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const school = "University of Illinois";
      const intern = new Intern(name, id, email, school);
      expect(typeof(intern)).toEqual("object");
      expect(intern instanceof Intern).toEqual(true);
      expect(intern.name).toEqual(name);
      expect(intern.id).toEqual(id);
      expect(intern.email).toEqual(email);
      expect(intern.school).toEqual(school);
    });
  });
  describe("getSchool", () => {
    it("should return the 'Intern' object's 'school' value", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const school = "University of Illinois";
      const intern = new Intern(name, id, email, school);
      const result = intern.getSchool();
      expect(result).toEqual(school);
    });
  });
  describe("getRole", () => {
    it("should return the 'Intern' object's role as a string", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const school = "University of Illinois";
      const intern = new Intern(name, id, email, school);
      const result = intern.getRole();
      expect(result).toEqual("Intern");
    });
  });
});
