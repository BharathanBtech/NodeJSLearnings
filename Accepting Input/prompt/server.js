/* step 1: npm init -y
   step 2: create server.js file
   step 3: npm install prompt
   step 4: Code
   Step 5: node server.js

   Using prompt we can do validation also and easy to understand the code on comaring to std.in and inquirer

*/

const prompt =require("prompt");

prompt.start();

// Define schema with all data types
const schema = {
  properties: {
    stringInput: {
      description: 'Enter a string',
      type: 'string',
      required: true,
    },
    numberInput: {
      description: 'Enter a number',
      type: 'number',
      message: 'Input must be a number',
      required: true,
    },
    integerInput: {
      description: 'Enter an integer',
      type: 'integer',
      message: 'Input must be an integer',
      required: true,
    },
    floatInput: {
      description: 'Enter a floating-point number',
      type: 'number',
      conform: (value) => value % 1 !== 0, // Ensures it's a float
      message: 'Input must be a floating-point number',
      required: true,
    },
    booleanInput: {
      description: 'Enter true or false',
      type: 'boolean',
      required: true,
    },
    passwordInput: {
      description: 'Enter a password (hidden)',
      type: 'string',
      hidden: true,
      replace: '*',
      required: true,
    },
    emailInput: {
      description: 'Enter your email',
      type: 'string',
      format: 'email', // Ensures proper email format
      required: true,
    },
    dateInput: {
      description: 'Enter a date (YYYY-MM-DD)',
      type: 'string',
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      message: 'Date format should be YYYY-MM-DD',
      required: true,
    },
    arrayInput: {
      description: 'Enter values separated by commas',
      type: 'array',
      required: true,
    },
  },
};

// Prompt user for input
prompt.get(schema, (err, result) => {
  if (err) {
    console.error('Error:', err);
    return;
  }

  // Display user inputs
  console.log('\n✅ User Inputs:');
  console.log(`String: ${result.stringInput}`);
  console.log(`Number: ${result.numberInput}`);
  console.log(`Integer: ${result.integerInput}`);
  console.log(`Float: ${result.floatInput}`);
  console.log(`Boolean: ${result.booleanInput}`);
  console.log(`Password: (hidden)`);
  console.log(`Email: ${result.emailInput}`);
  console.log(`Date: ${result.dateInput}`);
  console.log(`Array:`, result.arrayInput);
});
