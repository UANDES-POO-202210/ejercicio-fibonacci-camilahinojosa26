// in order to make this exercise I used the following websites:
// https://nodejs.dev/learn/reading-files-with-nodejs
// https://www.codegrepper.com/code-examples/javascript/javascript+fibonacci+example
// all credits go to the references given above, these helped me understand what was requested for the activity.

function fibonacci(nums) {
  
    let fib = [0, 1];
    let data = [];
    // console.log(0)
    console.log(1)
    for(let i = 2; i <= nums; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
      console.log(fib[i]);
      data.push(fib[i]);
    }
    
    return data;
  }


const fs = require('fs');

fs.readFile('number_file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const num_fib = data
  
  console.log("numero input:" + num_fib);

  fibonacci(num_fib);
});

