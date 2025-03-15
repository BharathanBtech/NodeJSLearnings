/* 

Basic Example: Read User Input and Print

This example takes user input and prints it back.

How It Works:

* process.stdin.setEncoding('utf-8'): Ensures input is read as a UTF-8 string.
* process.stdin.on('data', callback): Listens for user input.
* input.trim(): Removes extra spaces/newlines.
* process.exit(): Exits the process after receiving input.

*/


/* ------------------------------------------- Single Line Input -------------------------------------------*/

process.stdin.setEncoding('utf-8');

console.log(`Enter something`);

process.stdin.on('data',(input)=>
    {
    console.log(`User entered ${input.trim()}`);
    //process.exit();
});



/* ------------------------------------------- Multi Line Input ------------------------------------------- 


process.stdin.setEncoding('utf-8');

console.log('Enter something (type "exit" to stop):');

process.stdin.on('data', (input) => {
    input = input.trim();
    if (input.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        process.exit();
    }
    console.log(`You entered: ${input}`);
});

*/