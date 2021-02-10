const Engineer = require('../lib/Engineer.js');



test('creates an Engineer Github object', () => {
    const engineer = new Engineer('Github');
  
    expect(engineer.github).toBe('Github');
});