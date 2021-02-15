const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {

    const employee = new Employee("Joe", 333, "joe@yahoo.com");

    expect(employee.name).toBe("Joe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("joe@yahoo.com");
});

test('creates an employee object name', () => {
    const employee = new Employee("Joe", 333, "joe@yahoo.com");

    expect(employee.getName()).toBe("Joe");
});

test('creates an employee object id', () => {
    const employee = new Employee("Joe", 333, "joe@yahoo.com");

    expect(employee.getID()).toEqual(expect.any(Number));
});

test('creates an employee object email', () => {
    const employee = new Employee("Joe", 333, "joe@yahoo.com");

    expect(employee.getEmail()).toBe("joe@yahoo.com");
});

test('creates an employee object role', () => {
    const employee = new Employee("Joe", 333, "joe@yahoo.com");

    expect(employee.getRole()).toBe("Employee");
});