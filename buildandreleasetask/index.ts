import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const num1 : string | undefined = tl.getInput('Number1',true);
        const num2 : string| undefined = tl.getInput('Number2',true);
        const op : string | undefined = tl.getInput('Operation', true);
        
        console.log(eval(num1+op+num2));
        var ans = eval(num1+op+num2);
        
        var outputObject = { 
            number1: num1, 
            number2: num2,  
            opreation: op,
            result: ans            
         };

        var outputObjectString =  JSON.stringify(outputObject)
        /*
        https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string
        var in pipelines can only be passed as a string
        we can break the object into a string pass it and convert it into object
        we can then convert this into an object by using Object() in our other task 
        */

         tl.setVariable("outputVar", outputObjectString,false,true);
        // can you only pass string, or can you also pass object? -- search
        
    }
    catch (e) {
        
        console.error(e);
    }
}

run();

