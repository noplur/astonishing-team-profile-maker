const Intern = require('../lib/Intern.js');



test('creates an intern school object', () => {
    const intern = new Intern('school');
  
    expect(intern.school).toBe('school');
});