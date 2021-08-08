const employees = [
    {
        id: 1,
        username: 'Victor'
    },
    {
        id: 2,
        username: 'Employee1'
    },
    {
        id: 3,
        username: 'Employee2'
    }
];

const wages = [
    {
        id: 1,
        wage: 1000
    },
    {
        id: 2,
        wage: 1500
    },
];

const getEmployee = ( id ) => {

    return new Promise( (resolve, reject) => {

        const employee = employees.find( (e) => e.id === id)?.username;

         ( employee ) 
           ? resolve( employee )
           : reject( `The employee with the ID ${ id } does not exist`);
    });
}

const getWage = ( id ) => {

    return new Promise( (resolve, reject) => {

        const wage = wages.find( (w) => w.id === id)?.wage;

        ( wage )
            ? resolve( wage )
            : reject(`The wage with the ID ${ id } does not exist`);
    });
}


const id = 3;

/* getEmployee( id )
    .then( employee => console.log( employee ))
    .catch( err => console.log( err ));

getWage( id )
    .then( wage => console.log( wage ))
    .catch( err => console.log( err )); */

let username;

getEmployee( id )
    .then( employee => {
        username =  employee;
        return getWage( id ) 
    })
    .then( wage =>  console.log( `Employee: ${ username } wage: ${ wage }`))
    .catch( err => console.log( err ));


