const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Hughie', 4, 'hughie@yahoo.com', 'University of Delaware');
  
    expect(intern.name).toBe('Hughie');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('hughie@yahoo.com');
    expect(intern.school).toBe('University of Delaware');
});