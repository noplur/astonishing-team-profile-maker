const Employee = require("../lib/Employee");
const inquirer = require('inquirer');
const fs = require('fs');
const employees = []

function renderOfficeNumber(officeNumber) {
    if (officeNumber) {
        return `Office Number: ${officeNumber}`
    } else {
        return ''
    }
}

function renderGithub(github) {
    if (github) {
        return `GitHub: ${github}`
    } else {
        return ''
    }
}

function renderSchool(school) {
    if (school) {
        return `School: ${school}`
    } else {
        return ''
    }
}

const employeeSection = (employee) => {

    return employee.map(({ name, role, id, email, officeNumber, github, school }) => {
        return `
        <section>
        <div> ${name}</div>
        <div> ${role} </div>
        <div> ID: ${id}</div>
        <div> Email: ${email}</div>
        <div> ${renderOfficeNumber(officeNumber)} </div>
        <div> ${renderGithub(github)} </div>
        <div> ${renderSchool(school)} </div>
        </section>
        `
    });
};

const generatePage = (employee) => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Astonishing Team Profile Maker</title>
    <link rel="stylesheet" href="style.css">
    </head>

    <section class="intro">My Astonishing Team</section>
    
    ${employeeSection(employee)}
    
   `
};

module.exports = generatePage;