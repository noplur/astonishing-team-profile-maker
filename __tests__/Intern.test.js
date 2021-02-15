const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern("Intern", "Hughie", 491, "hughie@yahoo.com", "University of Something");
  
    expect(intern.role).toBe("Intern");
    expect(intern.name).toBe('Hughie');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('hughie@yahoo.com');
    expect(intern.school).toBe('University of Something');
});

test('creates an intern object role', () => {
    const intern = new Intern("Intern", "Hughie", 491, "hughie@yahoo.com", "University of Something");

    expect(intern.getRole()).toBe("Intern");
});

test('creates an intern object name', () => {
    const intern = new Intern("Intern", "Hughie", 491, "hughie@yahoo.com", "University of Something");

    expect(intern.getName()).toBe("Hughie");
});

test('creates an intern object id', () => {
    const intern = new Intern("Intern", "Hughie", 491, "hughie@yahoo.com", "University of Something");

    expect(intern.getID()).toEqual(expect.any(Number));
});

test('creates an intern object email', () => {
    const intern = new Intern("Intern", "Hughie", 491, "hughie@yahoo.com", "University of Something");

    expect(intern.getEmail()).toBe("hughie@yahoo.com");
});

test('creates an intern object school', () => {
    const intern = new Intern("Intern", "Hughie", 491, "hughie@yahoo.com", "University of Something");

    expect(intern.getSchool()).toBe("University of Something");
});