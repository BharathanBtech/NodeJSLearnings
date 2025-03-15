const inquirer = require('inquirer').default;

async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'password',
      name: 'password',
      message: 'Enter a secure password:',
      mask: '*',
    },
    {
      type: 'number',
      name: 'age',
      message: 'How old are you?',
      validate: (value) => (value > 0 ? true : 'Please enter a valid age'),
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do you want to proceed?',
      default: true,
    },
    {
      type: 'list',
      name: 'color',
      message: 'Pick a color:',
      choices: ['Red', 'Green', 'Blue', 'Yellow'],
    },
    {
      type: 'checkbox',
      name: 'hobbies',
      message: 'Select your hobbies:',
      choices: ['Reading', 'Gaming', 'Traveling', 'Cooking'],
    },
    {
      type: 'rawlist',
      name: 'transport',
      message: 'Choose your preferred transport:',
      choices: ['Car', 'Bike', 'Public Transport', 'Walking'],
    },
    {
      type: 'expand',
      name: 'license',
      message: 'Do you have a driving license?',
      choices: [
        { key: 'y', name: 'Yes', value: 'yes' },
        { key: 'n', name: 'No', value: 'no' },
        { key: 's', name: 'Still learning', value: 'learning' },
      ],
    },
    {
      type: 'editor',
      name: 'bio',
      message: 'Write a short bio:',
    },
  ]);

  console.log('\n✅ Your Responses:');
  console.log(answers.name);
}

askQuestions();
