const Employee = require('../lib/Employee.js');

test('creates an Employee name object', () => {
    const employee = new Employee('EmployeeName');
  
    expect(employee.managerName).toBe('EmployeeName');
});