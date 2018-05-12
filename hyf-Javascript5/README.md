In this repository you can find the solutions of the following questions in the link:

https://github.com/HackYourFuture/JavaScript2/blob/master/Week3/MAKEME.md

Step 3: JavaScript
Deadline Wednesday

We learned a little bit about callbacks in JS. A callback is simply a function passed to another function that gets executed (run) after a potentially long running operation has completed. There is another function called setTimeout that will wait a specified period of time and then execute a function. For example:

function doIt() {
  console.log('I am done');
}
setTimeout(doIt, 5000);
If you run the above code it will wait 5 seconds and then print I am done. Please read something about setTimeout on MDN. The first argument to the setTimeout call is the callback (doIt).

3.1 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.

function foo(func) {
  // What to do here? 
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);
3.2 You must write a function that takes 4 arguments.

A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
The function should first generate an array containing values from start value to end value (inclusive).

Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.

The function should call the second callback if the array value is divisible by 5.

Both functions should be called if the array value is divisible by both 3 and 5.

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next  
}

threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive
// please make sure you see why these calls are made before you start coding
Note: The following assignments include some problems from freeCodeCamp. While we normally ask you to use more modern const and let keywords to declare variables, currently freeCodeCamp does not give you that option and expects you to use the older var keyword.

3.3 Please solve this problem:

https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string

3.3.1: with a for loop.
3.3.2: with a while loop.
3.3.3: with a do...while loop.

3.4 Some practice with objects:

https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions

3.5 Nested loops

https://www.freecodecamp.com/challenges/nesting-for-loops

3.6 We did some work with arrays:

const arr = [1, 2, 3];
We can also nest arrays inside arrays like this:

const arr2d = [[1, 2], [3, 4], [5, 6]];
(for math people you can think of this as a matrix)

How would you print all the items of an array with 3 dimensions? How about with K dimensions? What if you didn't know how deep the array was nested? (You don't have to write code for this but think about it.)

3.7 Here are two functions that look like they do the something similar but they print different results. Please explain what's going on here.

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
If you are confused please run the code and then consult the Google for "javascript pass by value pass by reference"

Step 4: Scope and Closures
Deadline Saturday

Let's continue to learn a little more about scope and Closures.

Write a function that would allow you to do this:

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it (so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast as possible!
