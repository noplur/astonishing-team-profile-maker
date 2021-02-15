const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Engineer', "Lucy", 33, 'lucy@yahoo.com', 'lucygithub');
    
    expect(engineer.role).toBe("Engineer");
    expect(engineer.name).toBe('Lucy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('lucy@yahoo.com');
    expect(engineer.github).toBe('lucygithub');
});

test('creates an engineer object role', () => {
    const engineer = new Engineer('Engineer', "Lucy", 33, 'lucy@yahoo.com', 'lucygithub');

    expect(engineer.getRole()).toBe("Engineer");
});

test('creates an engineer object name', () => {
    const engineer = new Engineer('Engineer', "Lucy", 33, 'lucy@yahoo.com', 'lucygithub');

    expect(engineer.getName()).toBe("Lucy");
});

test('creates an engineer object id', () => {
    const engineer = new Engineer('Engineer', "Lucy", 33, 'lucy@yahoo.com', 'lucygithub');

    expect(engineer.getID()).toEqual(expect.any(Number));
});

test('creates an engineer object email', () => {
    const engineer = new Engineer('Engineer', "Lucy", 33, 'lucy@yahoo.com', 'lucygithub');

    expect(engineer.getEmail()).toBe("lucy@yahoo.com");
});

test('creates an engineer object github', () => {
    const engineer = new Engineer('Engineer', "Lucy", 33, 'lucy@yahoo.com', 'lucygithub');

    expect(engineer.getGithub()).toBe("lucygithub");
});