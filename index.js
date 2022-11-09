//Index is root file
const inquirer = require('inquirer');

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
    
}

//modulate team objects

//modulate html generation

//