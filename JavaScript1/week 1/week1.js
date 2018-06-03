//1

onsole.log("Hello world"); //English
console.log("مرحبا ايها العالم"); //Arabic
console.log("hej Värleden"); //Swedish

//2

console.log('I \'m awesome');

//3

let x;
console.log('the value of my variable x will be: whateverYouThinkItWillLog');
console.log(x);
x = 10;
console.log("I think the value of x is 10");
console.log("The value of x will be", x);

//4

let y = "The wheather today is nice ";
console.log("I think the value of y is \"The wheather is very nice today\"");
console.log("the actual value of y is", y);
y = "I don't know about the wheather tomorow ";
console.log("I think the value of y is \"I don't know about the wheather tomorow\"");
console.log("\"the actual value of y is\"", y);

//5

let z = 7.25;
console.log(z);
let a = 7;
console.log(a);
let h = Math.max(z, a);
console.log(h);

//another way of solving number 5 by using method round
Math.round(z);

//6. Arrays!

let myArray = [];
console.log("I think the value of my array is undefiend");
console.log("The actual value of my array is", myArray);
let animals = ["cat", "tiger", "delphine"];
console.log(animals);
animals.push("baby pig");
console.log(animals);

//7. More strings

let myString = "this is a test";
console.log(myString);
console.log(myString.length);
let item1 = 4;
let item2 = "my name is Doua";
let item3 = 3;
let item4 = ["a", "b", "c"];
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);

let ary = [item1, item2, item3, item4];

//8. Write a program that checks the types of two variables

//solving the comparison problem with for loop
for (let i = 0; i < ary.length; i++) {
    for (let j = i + 1; j < ary.length; j++) {
        if (typeof ary[i] == typeof ary[j]) {
            console.log("Compare", ary[i], "with", ary[j], ":", "same type", "i= ", i, "j= ", j);
        } else { console.log("Compare", ary[i], "with", ary[j], ":", "diffrent type", "i= ", i, "j= ", j); }
    }
}

//solving the comparison problem with while loop
let i = 0;
while (i < ary.length) {
    let j = i + 1;
    while (j < ary.length) {
        if (typeof ary[i] == typeof ary[j]) {
            console.log("Compare", ary[i], "with", ary[j], ":", "same type", "i= ", i, "j= ", j);
        } else { console.log("Compare", ary[i], "with", ary[j], ":", "diffrent type", "i= ", i, "j= ", j); }
        j++;
    }
    i++;
}

//9
let num1 = 10;
console.log("I think the rest of dividing 10 on 2 is", num1 % 2);
console.log("I think the rest of dividing 10 on 3 is", num1 % 3);
console.log("I think the rest of dividing 10 on 4 is", num1 % 4);

//10

let info = ["Doua", "Halwa", 3]
console.log("I can create an array with diffrent types for exampel this array that contain the first name and the last name and number of kids:", info)
console.log("Yes we can compare infinties in javscript because infinity is a number in javascript")
console.log("When I compare the type and the value of: 6/0 and 10/0 I should get: ", 6 / 0 === 10 / 0);
console.log(6 / 0);

