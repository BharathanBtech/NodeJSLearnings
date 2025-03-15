const message = "Hello, Node.js stdout!";

async function printMessage() {
  for (const char of message) {
    process.stdout.write(char);
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulating delay
  }
  console.log("\nDone!");
}

printMessage();


/*
 in message variable setting a string value
 loops through all chars of the string value
 print a character
 wait for 800 milliseconds
 print next character 
 end after last character print
 print done message in console.

*/
