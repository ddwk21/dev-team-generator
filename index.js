//Index is root file
const inquirer = require('inquirer');
import {Manager, Engineer, Intern} from './member.js';
const employeeList = [];

function managerPrompt(){
    inquirer.prompt([
        {

            name:'memberName',
            message:'Team member name: ',
            type:'input',
        },
        {
            name:'id',
            message:'employee id: ',
            type:'input',
        },
        {
            name:'e-mail',
            message:'employee e-mail: ',
            type:'input',
        },
        {
            name:'office',
            message:'office number: ',
            type:'input',
        },
    ])
    .then(function(answer) {
        let M = new Manager(answer.name, answer.id, answer.email, answer.office);

        employeeList.push(M);
    })
}

function engineerPrompt(){
    inquirer.prompt([
        {

            name:'memberName',
            message:'Team member name: ',
            type:'input',
        },
        {
            name:'id',
            message:'employee id: ',
            type:'input',
        },
        {
            name:'e-mail',
            message:'employee e-mail: ',
            type:'input',
        },
        {
            name:'github',
            message:'github username: ',
            type:'input',
        },
    ])
    .then(function(answer) {
        let E = new Engineer(answer.name, answer.id, answer.email, answer.github);

        employeeList.push(E);
    })
    
}

function internPrompt(){
    inquirer.prompt([
        {

            name:'memberName',
            message:'Team member name: ',
            type:'input',
        },
        {
            name:'id',
            message:'employee id: ',
            type:'input',
        },
        {
            name:'e-mail',
            message:'employee e-mail: ',
            type:'input',
        },
        {
            name:'school',
            message:'intern school: ',
            type:'input',
        },
    ])
    .then(function(answer) {
        let I = new Intern(answer.name, answer.id, answer.email, answer.school);

        employeeList.push(I);
    })
    
}

//modulate team objects

//modulate html generation

//