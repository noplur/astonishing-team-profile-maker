const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Lucy', 3, 'lucy@yahoo.com', 'lucygithub');
  
    expect(engineer.name).toBe('Lucy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('lucy@yahoo.com');
    expect(engineer.github).toBe('lucygithub');
});