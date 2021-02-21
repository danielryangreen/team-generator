const Employee = require("../lib/Employee");

describe("Initialization", () => {
  it("should create an object with a name, id, & email if provided valid arguments", () => {
    const name = "Dan";
    const id = "031839";
    const email = "dan.green@hdrinc.com";
    const employee = new Employee(name, id, email);
    expect(typeof(employee)).toEqual("object");
    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
  });
});
