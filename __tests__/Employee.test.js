const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Joe', 1, 'joe@yahoo.com');

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('joe@yahoo.com');
});