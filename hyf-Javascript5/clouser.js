//3.1 Write a function that takes another function as an argument and runs it.

function foo(func) {
    return func();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);


//3.2  write a function that takes 4 arguments.



//function to call if the number is divisible by 3

function sayThree() {
    console.log("sayThree");
}
// function to use if the number is divisible by 5

function sayFive() {
    console.log("sayFive");
}

/**
 * 
 * @param {number} startIndex  the start value 
 * @param {number} stopIndex   the end value
 * @param {function} sayThree  function to call if the number is divided by 3
 * @param {function} sayFive  function to call if the number is divided by 5
 * 
 * @returns {function} sayThree
 * @returns  {function} sayFive
 */


function threeFive(startIndex, stopIndex, sayThree, sayFive) {
    const values = [];

    // make an array

    for (var i = startIndex; i < stopIndex + 1; i++) {

        values.push(i);
    }

    console.log(values);

    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next 

    values.forEach(function (value) {
        if ((value % 3 === 0) && (value % 5 === 0)) {
            return sayThree(), sayFive();
        }
        else if (value % 3 === 0) {
            return sayThree();
        } else if (value % 5 === 0) {
            return sayFive();
        }

    })
}
threeFive(10, 15, sayThree, sayFive);


/*3.3 Please solve this problem:
 
https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string*/

//3.3.1: with a for loop.

function repeatStringNumTimes(str, num) {
    var repeatString = "";
    for (var i = 0; i < num; i++) {
        repeatString += str;
    }
    return repeatString;
}

console.log(repeatStringNumTimes("abc", 3));

//3.3.2: with a while loop.

function repeatStringNumTimes(str, num) {
    var repeatString = "";
    var i = 0;
    while (i < num) {
        repeatString += str;
        i++
    }
    return repeatString;
}

console.log(repeatStringNumTimes("abc", 3));

//3.3.3: with a do...while loop.

function repeatStringNumTimes(str, num) {
    var repeatString = "";
    var i = 0;
    do {
        repeatString += str;
        i++
    } while (i < num)
    return repeatString;
}
console.log(repeatStringNumTimes("abc", 3));



/*3.4 Some practice with objects:
 
https://www.freecodecamp.com/challenges/construct-javascript-objects-with-functions*/



var Car = function () {
    this.wheels = 4;
    this.engines = 1;
    this.seats = 5;
};

console.log(Car.wheels);
var MotorBike = function () {
    this.engines = 1;
    this.wheels = 4;
    this.seats = 5;

};


/*3.5 Nested loops
 
https://www.freecodecamp.com/challenges/nesting-for-loops*/


function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    console.log(product);
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//3.7 two functions that look like they do the something similar but they print different results. Please explain what's going on here.

//in first function we are passing a copy of the variable x into the function therefor the original value of x is not changing
//that's why when we print out x it contains 9
//but in the other function because we have an object and when we pass the object we actually passing a reference to that
//not a copy so the original value in the object has been changed and we get {x;10}


/*4 write a function that would allow you to do this:
 
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27*/

function createBase(baseNumber) {
    return function (addNumber) { return addNumber += baseNumber; }
};
const addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

/* Bonus: Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and returns an array which only has unique values in it 
(so it removes the duplicate ones). Make it a 'smart' algorithm that could do it for every array (only strings/number). Try to make it as fast 
as possible!*/


function removeDuplicate(oldArr) {
    return oldArr.reduce((uniqueArray, arryElement) => {
        if (uniqueArray.indexOf(arryElement) === -1) {
            uniqueArray.push(arryElement);
        }
        return uniqueArray;
    }, []);
}

removeDuplicate(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']);
