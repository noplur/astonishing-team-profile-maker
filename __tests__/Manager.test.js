const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Alice', 2, 'alice@yahoo.com', 205);
  
    expect(manager.name).toBe('Alice');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('alice@yahoo.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});