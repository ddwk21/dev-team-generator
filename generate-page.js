const fs = require('fs');
const { format } = require('path');

let content = '';

function generateHtml(members){

    for(let i = 0; i<members.length; i++){
        content += formatMember(members[i]);
    }

    const template = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dev Team Page</title>
        </head>
        <body id = "body">
            <div id = "main-content">
                ${content}
            </div>
    </body>
    </html>`



}

function formatMember(member){
    let markUp;
    if(!!member.office){
        markUp = 
        `<div class = "member-card"> 
            <ul class = "member-info">
                <li>Name: ${member.name}</li>
                <li>id: ${member.id}</li>
                <li>e-mail: ${member.email}</li>
                <li>office: ${member.office}</li>
            </ul>
        </div>`
    }
    if(!!member.github){
        markUp = 
        `<div class = "member-card"> 
            <ul class = "member-info">
                <li>Name: ${member.name}</li>
                <li>id: ${member.id}</li>
                <li>e-mail: ${member.email}</li>
                <li>github: ${member.github}</li>
            </ul>
        </div>`

    }
    if(!!member.school){
        markUp = 
        `<div class = "member-card"> 
            <ul class = "member-info">
                <li>Name: ${member.name}</li>
                <li>id: ${member.id}</li>
                <li>e-mail: ${member.email}</li>
                <li>school: ${member.school}</li>
            </ul>
        </div>`

    }

    return markUp
}

export default generateHtml