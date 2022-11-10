//Index is root file
import inquirer from 'inquirer';

import generateHtml from './generate-page.js';

//Imports classes from member file
import {Manager, Engineer, Intern} from './member.js';

//storage for employee objects
const employeeList = [];




//Following three functions are inquirer sessions to add teammates.
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
        if(answer.continue == answer.choices[0])
        { 
            engineerPrompt();
        }
        if(answer.continue == answer.choices[1]){           
            internPrompt();
        }
        if(answer.continue == answer.choices[2])
        {
            generateHtml();
        }
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
    .then(function(){
        promptContinue();
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
    .then(function(){
        promptContinue();
    })
    
}


//modulate html generation

//