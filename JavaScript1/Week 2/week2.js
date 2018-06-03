//1.1.1 Add the string to your file and log it. 1.2 Log the length of myString. 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces. 1.4 Log myString to see if you succeeded.

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

//2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.   

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//2.2 Log your new array!

console.log(favoriteAnimals);
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

//2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.

favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);

//2.7 Jason does not like 'giraffe', delete this animal from the array.

//used to way to delete the element in order to show the diffrence between delete and splice
delete favoriteAnimals[3];
console.log(favoriteAnimals);//return [ 'blowfish', 'capricorn', 'giraffe', <1 empty item> ]
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);//return [ 'blowfish', 'capricorn', 'giraffe' ]

//2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?

let meerkatIndex = favoriteAnimals.indexOf("meerkat");

//2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item).

if (meerkatIndex !== - 1) {
  favoriteAnimals.splice(meerkatIndex, 1);
  console.log("The meerkat that I am looking for at the index = ", meerkatIndex);
}
else { console.log("I didn't find meerkat"); }
console.log(favoriteAnimals);

//more javascript
//1.Create a function that takes 3 arguments and returns the sum of the these arguments.

function addition(x, y, z) {
  return x + y + z;
}
let exampel = addition(2, 3, 5);
console.log(exampel);

//2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

function colorCar(color) {
  console.log("My car color is", color);
}
let myCar = "red";
colorCar(myCar);

//3.Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

let person = { firstName: "Doua", lastName: "Halwa", adress: "Lund" };
function print(objec) {
  for (let objectProperty in objec) {
    console.log(objectProperty + ": " + objec[objectProperty]);
  }
}
print(person);

//4.Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code) {
  if (code === 1) {
    console.log("A ", color, "car")
  }
  else if (code === 2) {
    console.log("A ", color, "motorbike")
  }
}
vehicleType("blue", 2);

//5.Can you write the following without the if statement, but with just as a single line with console.log(...);?

3 === 3 ? console.log("yes") : console.log("no");

//6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age) {
  let vehicleAge = "";
  if (age > 1) { vehicleAge = "used"; } else { vehicleAge = "new"; }
  if (code === 1) {
    console.log("a", color, vehicleAge, "car");
  }
  else if (code === 2) { console.log("a", color, vehicleAge, "motorbike"); }
  else { console.log("This is not a vehicle"); }
}

//calling the function with diffrent cases

vehicle("blue", 1, 5);
vehicle("blue", 1, 1);
vehicle("blue", 2, 1);
vehicle("blue", 2, 3);
vehicle("blue", 3, 5);
vehicle("blue", 3, 0);

//7.Make a list of vehicles

let vehicles = ["motorbike", "caravan", "bike", "car"];

//8.How do you get the third element from that list?

console.log(vehicles[2]);

//9.Change the function vehicle to use the list of question 7. 

console.log(vehicles);
let vehicleAge = "";
function vehicleList(color, code, age) {
  for (var vehicleIndex = 0; vehicleIndex < vehicles.length - 1; vehicleIndex++) {
    if (code === vehicleIndex + 1) {
      vehicleCode = vehicles[vehicleIndex];
    }
  }
  if (age > 1) { vehicleAge = "used"; } else {
    vehicleAge = "new";
  }
  if (code > vehicles.length - 1) {
    console.log("This vehicle not in the list");
  }
  else {
    console.log("a", color, vehicleAge, vehicleCode);
  }
}
vehicleList("red", 6, 1)

//10. prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

let vehicles = ["motorbike", "caravan", "bike", "car"];
let message = "\"Amazing Joe's Garage, we service ";
for (var i = 0, len = vehicles.length; i < len; i++) {
  console.log(i, vehicles[i]);
  if (i === len - 2) {
    message += vehicles[i] + "s " + "and ";

  }
  else if (i === len - 1) {
    message += vehicles[i] + "s" + "." + "\" ";

  }
  else {
    message += vehicles[i] + "s" + ", ";
  }

}

//11. add one more vehicle to the list

vehicles.push("scoter");
console.log(vehicles);

//create a function to generate a diffrent sperator{, and .} in the message

function advertise(vehicles){
  let message = "Amazing Joe's Garage, we service ";

  for (let i = 0, len = vehicles.length; i < len; i++) {
      message += vehicles[i] + "s";
      message += addSeparator(len, i);
  }  

  console.log(message);
}

function getSeparator(len, i){
  let separator = '';

  if (i === len - 2) {
      separator = " and ";
  } else if (i === len - 1) {
      separator = ".";
  }else {
      separator = ", ";
  }

  return separator;
}
advertise(vehicles);
//12.Create an empty object.

let teachers = {};

//13-14 Create an object that contains the teachers and  modules.

teachers = { HTML: "Victor", github: "Tommy", Javascript: "Shamrat", homeWork: "Wojtek" };

//15 Write some code to test two arrays for equality using == and ===. Test the following:  

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

//Write some code to test two arrays for equality using == and ===. Test the following:

console.log(x + y + z);
let test = (x === y); //return false
console.log(test);
console.log(test = (y == z));//return true

//16 creat object and compare them

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

o1 = { country: 'Sweden' };
console.log(o1);//return { country: 'Sweden' }
console.log(o3);//return { foo: 'bar' }

o2 = { languages: 'english' };
console.log(o2);//return { languages: 'english' }
console.log(o3);//return { foo: 'bar' } so o3 dosen't change when o2 is change 

//17What does the following code return? (And why?)

let bar = 42;
console.log(typeof typeof bar);//return string because typeof "number" =string 






