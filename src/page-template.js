const Employee = require("../lib/Employee");
const inquirer = require('inquirer');
const fs = require('fs');
const employees = []

function renderOfficeNumber(officeNumber) {
    if (officeNumber) {
        return `<li class="list-group-item">Office Number: ${officeNumber}</li>`
    } else {
        return '<li class="d-none">Office Number:</li>'
    }
}

function renderGithub(github) {
    if (github) {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${github}/portfolio" target=_blank>${github}</a></li>`
    } else {
        return '<li class="d-none">GitHub:</li>'
    }
}

function renderSchool(school) {
    if (school) {
        return `<li class="list-group-item">School: ${school}</li>`
    } else {
        return '<li class="d-none">School: ${school}</li>'
    }
}

function renderIcon(role) {
    if (role === "Manager") {
        return `<i class="fas fa-mug-hot"></i>`
    }
    if (role === "Engineer") {
        return `<i class="fas fa-glasses"></i>`
    } else {
        return `<i class="fas fa-user-graduate"></i>`
    }
}


const employeeSection = (employee) => {
    
    return employee.map(({ name, role, id, email, officeNumber, github, school }) => {
        return `
        
        
        
        
        <div class="shadow col-12 col-md-3 employee rounded">
        <h5 class="card-title bg-primary title"> ${name}</h5>
        <h5 class="card-subtitle bg-primary subtitle"> ${renderIcon(role) }  ${role} </h5>
        <ul class="list-group border bg-light">
            <li class="list-group-item"> ID: ${id}</li>
            <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a></li>
            ${renderOfficeNumber(officeNumber)}
            ${ renderGithub(github)}
            ${renderSchool(school)}
        </ul>
        </div>
        
       `;
    })
    .join('')
};

const generatePage = (employee) => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Astonishing Team Profile Maker</title>
    </head>

    <section class="intro">My Astonishing Team</section>
    
    <body>
    <main>
    
    <section>
    <div class="row row-cols-2 row-cols-md-3 d-flex justify-content-center">
    ${employeeSection(employee)}
    </div>
    </section>
    
    </main>

    <footer>
    <section class="footer"></section>
    </footer>
    
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>
   `;
};

module.exports = generatePage;