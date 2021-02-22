const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, & email if provided valid arguments", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const employee = new Employee(name, id, email);
      expect(typeof(employee)).toEqual("object");
      expect(employee instanceof Employee).toEqual(true);
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });
  });
  describe("getName", () => {
    it("should return the 'Employee' object's 'name' value", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const employee = new Employee(name, id, email);
      const result = employee.getName();
      expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return the 'Employee' object's 'id' value", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const employee = new Employee(name, id, email);
      const result = employee.getId();
      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return the 'Employee' object's 'email' value", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const employee = new Employee(name, id, email);
      const result = employee.getEmail();
      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return the 'Employee' object's role as a string", () => {
      const name = "Dan";
      const id = "031839";
      const email = "dan.green@hdrinc.com";
      const employee = new Employee(name, id, email);
      const result = employee.getRole();
      expect(result).toEqual("Employee");
    });
  });
});
