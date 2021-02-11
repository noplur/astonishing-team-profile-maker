const Engineer = require('../lib/Engineer.js');



test('creates an Engineer Github object', () => {
    const engineer = new Engineer('engineerGithub');
  
    expect(engineer.engineerName).toBe('engineerGithub');
});