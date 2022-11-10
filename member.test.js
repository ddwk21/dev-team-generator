import {Employee, Manager, Engineer, Intern} from './member.js'

const name = 'jeff'
const id = 5
const email = 'jeffjeff@reallyjeff.com'

test('Employee object instantiates with correct properties', () =>{
    
    let jeff = new Employee(name, id, email);

    expect(jeff.name).toBe(name);
})

test('Manager object instantiates with its extended property', () => {
    const office = 123;

    let jeff = new Manager(name, id, email, office)

    expect(jeff.office).toBe(office);
})

test('Engineer object instantiates with its extended property', () => {
    const github = 'jeffhub';

    let jeff = new Engineer(name, id, email, github)

    expect(jeff.github).toBe(github);
})

test('Intern object instantiates with its extended property', () => {
    const school = 'jeffacademy';

    let jeff = new Intern(name, id, email, school)

    expect(jeff.school).toBe(school);
})