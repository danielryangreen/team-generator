const Employee = require("../lib/Employee");

describe("Initialization", () => {
  it("should return an object when called with the 'new' keyword", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"));
  });
});
