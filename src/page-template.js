// global constructors

const Employee = require("../lib/Employee");
const inquirer = require('inquirer');
const fs = require('fs');
const employees = []

// function to return an employee office number
// if there is no office number, return empty

function renderOfficeNumber(officeNumber) {
    if (officeNumber) {
        return `<li class="list-group-item">Office Number: ${officeNumber}</li>`
    } else {
        return '<li class="d-none">Office Number:</li>'
    }
}

// function to return a GitHub user name
// if there is no GitHub user name, return empty

function renderGithub(github) {
    if (github) {
        return `<li class="list-group-item">GitHub: <a href="https://github.com/${github}" target=_blank>${github}</a></li>`
    } else {
        return '<li class="d-none">GitHub:</li>'
    }
}

// function to return a school
// if there is no school, return empty

function renderSchool(school) {
    if (school) {
        return `<li class="list-group-item">School: ${school}</li>`
    } else {
        return '<li class="d-none">School: ${school}</li>'
    }
}

// function to return an icon based on role

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

// function to generate employee section

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

// function to generate HTML page

const generatePage = (employee) => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">

    <!-- start of head section -->

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Astonishing Team Profile Maker</title>
    </head>

    <!-- end of head section -->

    <!-- start of intro section -->

    <section class="intro">My Astonishing Team</section>

    <!-- end of intro section -->
    
    <body>

    <!-- start of main section -->

    <main>

    <!-- start of employee section function -->
    
    <section>
    <div class="row row-cols-2 row-cols-md-3 d-flex justify-content-center">
    ${employeeSection(employee)}
    </div>
    </section>

    <!-- end of employee section function -->
    
    </main>

    <!-- end of main section -->

    <!-- start of footer section -->

    <footer>
    <section class="footer"></section>
    </footer>

    <!-- end of footer section -->
    
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>
   `;
};

module.exports = generatePage;