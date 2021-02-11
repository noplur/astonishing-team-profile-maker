const Intern = require('../lib/Intern.js');



test('creates an intern school object', () => {
    const intern = new Intern('intern name');
  
    expect(intern.internName).toBe('intern name');
});