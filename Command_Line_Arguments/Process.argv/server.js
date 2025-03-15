import fs from 'fs';


//const path ='C://Users//bharathan//Desktop//test.txt';

console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(process.argv[2]);
console.log(process.argv[3]);

const path = process.argv[2];

fs.readFile(path,(err,data)=>{
    if(err){
        console.error("Error reading file:",err); 
        return;   
    }
    console.log(`File content:${data}`);
});

