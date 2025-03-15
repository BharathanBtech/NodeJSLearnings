// Ensure you have 'type': 'module' in package.json
import { Command } from 'commander';

const program = new Command();

program
    .name("my-cli")
    .description("A simple CLI using commander")
    .version("1.0.0");

program
    .option('-n, --name <name>', 'User name')    // -n is short-form flag  and --name is long flag 
    .option('-a, --age <age>', 'User age');      // -a is short-form flag  and --age is long flag

program.parse(process.argv);

const options = program.opts();

console.log("Name:", options.name); 
console.log("Age:", options.age);

// if we wants to give input with short-form flag we have to run code like   "node server.js -n "John Doe" -a 30"
// if we wants to give input with long-form flag we have to run code like   "node server.js --name "John Doe" --age 30"