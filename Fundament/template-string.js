
const username = 'Test name';
const real = 'Test real';

const normal = username + ' ' + real;
const template = `${ username } ${ real }`;

console.log( 'Const ->  '+normal );
console.log( 'Const template -> '+ template);

console.log( normal === template );


const html = `
<h1>Hello</h1>
<p>world</p>
`;

console.log( html );