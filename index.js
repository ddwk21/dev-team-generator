//Index is root file

import fs from 'fs';
import inquirer from 'inquirer';

import generateHtml from './generate-page.js';

//Imports classes from member file
import {Manager, Engineer, Intern} from './member.js';

//storage for employee objects
const employeeList = [];

let dynamicMarkup = ``;


//Following three functions are inquirer sessions to add teammates.
function managerPrompt(){
    inquirer.prompt([
        {

            name:'name',
            message:'Team member name: ',
            type:'input',
        },
        {
            name:'id',
            message:'employee id: ',
            type:'input',
        },
        {
            name:'email',
            message:'employee email: ',
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
    .then(function(){
        promptContinue();
    })
}

function promptContinue(){
    inquirer.prompt([{
        name:'continue',
        message: 'What would you like to do?',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
    }])
    .then(function (answer) {
        if(answer.continue == 'Add Engineer')
        { 
            engineerPrompt();
        }
        if(answer.continue == 'Add Intern'){           
            internPrompt();
        }
        if(answer.continue == 'Finish')
        {
            buildFile();
        }
    })
}

function engineerPrompt(){
    inquirer.prompt([
        {

            name:'name',
            message:'Team member name: ',
            type:'input',
        },
        {
            name:'id',
            message:'employee id: ',
            type:'input',
        },
        {
            name:'email',
            message:'employee email: ',
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
    .then(function(){
        promptContinue();
    })
    
}

function internPrompt(){
    inquirer.prompt([
        {

            name:'name',
            message:'Team member name: ',
            type:'input',
        },
        {
            name:'id',
            message:'employee id: ',
            type:'input',
        },
        {
            name:'email',
            message:'employee email: ',
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
    .then(function(){
        promptContinue();
    })
    
}

function buildFile() {
    fs.writeFileSync('./index.html',generateHtml(employeeList),'utf-8')
}

managerPrompt();
//modulate html generation

//