
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


const getEmployee = ( id, callback) => {
    const employee = employees.find( (e) => e.id === id)?.username;

    if ( employee ) {
        callback( null, employee);
    } else {
        callback(`The employee with the id ${ id } does not exist`);
    }
}

const getWages = ( id, callback ) => {
    const wage = wages.find( (w) => w.id === id )?.wage;

    if ( wage ) {
        callback( null, wage);
    } else {
        callback(`The wage with the id ${ id } does not exist`);
    }
}

const id = 3;

getEmployee( id, (err, employee) => {

    if ( err ){
        console.log('Error!')
        return console.log( err );
    }

    getWages( id, (err, wages) => {

        if ( err ) {
            return console.log( err );
        }
        console.log('Employee: ', employee, ' wage:', wages);
    }); 

} );

