/*
let a  = new Promise( (resolve,reject) => {
    const val1 = 1+1;

    if(val1 ==2){
        resolve("condition becomes true");
    }else{
        reject("condition becomes false");
    }

})

a.then((message) =>
{
    console.log(`outcome: ${message}`);
}).catch((rejectresult)=>{
    console.log(`outcome: ${message}`);
})
    */


// If we do a promise in real life, its outcome will be resolved and rejected. similarly promise here has 2 outcomes resolve and reject


// A Promise object takes a function with two parameters: resolve (for success) and reject (for failure).A Promise object takes a function with two parameters: resolve (for success) and reject (for failure).

//Create Promises using new Promise()

//Use .then() and .catch() for handling results and errors


// Below code demonstrate promise without arrow functions


let a = new Promise(function (resolve, reject) {
    const val1 = 1 + 1;

    if (val1 === 2) {
        resolve("condition becomes true");
    } else {
        reject("condition becomes false");
    }
});

a.then(function (message) {
    console.log(`outcome: ${message}`);
}).catch(function (rejectresult) {
    console.log(`outcome: ${rejectresult}`);
});
