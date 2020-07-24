// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The nested fucntion can access the outer scope because it forms a closure and the internal variable is part of its lexical scope 
// + the child function can reach out to its parent function but not the other way around

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


 
  function summation(num){
    let count = 0;
    for(let i = 1; i <= num; i++){
      count += num
    }
    return count
  } 

console.log(summation(4));


