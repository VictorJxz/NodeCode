const { createFile } = require('./helpers/multiplier');


const multipler = () =>  {
    console.clear();

    console.log( process.argv );
    const [,,arg3 = 'base=5'] = process.argv;
    const [, base = 5 ] = arg3.split('=');
    console.log( base );

    createFile( base )
        .then( msg => console.log( msg ))
        .catch( err => console.log( err ));
}

multipler();