const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, & office number if provided valid arguments", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const officeNumber = "10197";
      const manager = new Manager(name, id, email, officeNumber);
      expect(typeof(manager)).toEqual("object");
      expect(manager instanceof Manager).toEqual(true);
      expect(manager.name).toEqual(name);
      expect(manager.id).toEqual(id);
      expect(manager.email).toEqual(email);
      expect(manager.officeNumber).toEqual(officeNumber);
    });
  });
  describe("getRole", () => {
    it("should return the 'Manager' object's role as a string", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const officeNumber = "10197";
      const manager = new Manager(name, id, email, officeNumber);
      const result = manager.getRole();
      expect(result).toEqual("Manager");
    });
  });
});
