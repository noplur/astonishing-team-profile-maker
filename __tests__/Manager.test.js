const Manager = require('../lib/Manager.js');



test('creates a manager office number object', () => {
    const manager = new Manager('office number');
  
    expect(manager.officeNumber).toBe('office number');
});