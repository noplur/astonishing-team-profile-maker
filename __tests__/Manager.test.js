const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {

    const manager = new Manager("Manager", "Mo", 333, "mo@yahoo.com", 4004);

    expect(manager.role).toBe("Manager");
    expect(manager.name).toBe("Mo");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("mo@yahoo.com");
    expect(manager.officeNumber).toBe(4004);
});

test('creates an manager object role', () => {
    const manager = new Manager("Manager", "Mo", 333, "mo@yahoo.com", 4004);

    expect(manager.getRole()).toBe("Manager");
});

test('creates an manager object name', () => {
    const manager = new Manager("Manager", "Mo", 333, "mo@yahoo.com", 4004);

    expect(manager.getName()).toBe("Mo");
});

test('creates an manager object id', () => {
    const manager = new Manager("Manager", "Mo", 333, "mo@yahoo.com", 4004);

    expect(manager.getID()).toEqual(expect.any(Number));
});

test('creates an manager object email', () => {
    const manager = new Manager("Manager", "Mo", 333, "mo@yahoo.com", 4004);

    expect(manager.getEmail()).toBe("mo@yahoo.com");
});

test('creates an manager object office number', () => {
    const manager = new Manager("Manager", "Mo", 333, "mo@yahoo.com", 4004);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});
