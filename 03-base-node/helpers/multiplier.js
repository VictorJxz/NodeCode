const fs = require('fs');

const createFile = async( base = 5 ) => {

    console.log('...................................');
    console.log('   Multiplication table: ', base);
    console.log('...................................');

    let data = '';
    for ( let i = 1; i <= 10; i++) {
        data +=  `${ base } * ${ i } = ${ base*i }\n`;
    }
    console.log( data );

    try {
        fs.writeFileSync(`Table-${ base }.txt`, data);
        return `Process successfully -> Table-${ base }.txt create!`;
    } catch ( err ) {
        throw err;
    }
}

module.exports = {
    createFile
}