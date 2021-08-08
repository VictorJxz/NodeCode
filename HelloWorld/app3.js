
console.log('Program start'); // #1

setTimeout( () => {
    console.log('First timeout '); // #5
}, 3000);

setTimeout( () => {
    console.log('Seconds timeout'); // #2
}, 0);

setTimeout( () => {
    console.log('Third timeout'); // #3
}, 0);


console.log('End of program'); // #4 :: 2