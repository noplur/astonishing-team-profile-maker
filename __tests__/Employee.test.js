const Employee = require('../lib/Employee.js');

test('creates a Manager name object', () => {
    const employee = new Employee('Joe');

    expect(employee.managerName).toBe('Joe');
    
});