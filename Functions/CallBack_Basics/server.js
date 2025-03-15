import prompt from 'prompt';

const schema_SARULATHA = {
    properties:{
        value1:{
            description: "Enter value 1",
            type: "integer",
            required: true,
        },
        value2:{
            description: "Enter value 2",
            type:"integer",
            required:true,
        }
    }
}

prompt.get(schema_SARULATHA,(err,result)=>{
    if(err){
        console.error(`Error: ${err}`);
    }

    sum(result.value1,result.value2,printoutput);

});

function sum(val1,val2,callback){

    const sumOutput = val1+val2;

    callback(sumOutput);

}
function printoutput(out){
    console.log(`return value is ${out}`);
}


