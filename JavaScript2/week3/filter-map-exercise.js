/**
 * First Question. write a program that doubles the odd numbers in an array and throws away the even number.
 */

const numbers = [1, 2, 3, 4];

// use filter to get the odd numbers and then use  map to multiply each number * 2

const oddNumbers = numbers.filter(number => number % 2 !== 0);
const doubleOddNumber = oddNumbers.map(number => number * 2);

console.log(doubleOddNumber);

/**
 * second question
 */
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

//1.Map the tasks to durations in hours.

//create an array of tasks' duration in minutes

var tasksInMinutes = [];
for (var i = 0; i < tasks.length; i++) {
  tasksInMinutes.push(tasks[i].duration);
}

//create an array of tasks' duration in hours

const tasksInHours = tasksInMinutes.map(time => time / 60);


//2.Filter out everything that took less than two hours (i.e., remove from the collection)

const lessThanTwoHoursTasks = tasksInHours.filter(taskDuration => taskDuration > 2);


//3.Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should earn per hour) and sum it all up.

const perHourRate = 50;

const perHoursBil = lessThanTwoHoursTasks.map(taskDuration => taskDuration * perHourRate);


var totalBil = 0;
for (var i = 0; i < perHoursBil.length; i++) {
  totalBil += perHoursBil[i];
}


//4. Output a formatted Euro amount, rounded to Euro cents, e.g: € 12.34.

//format the total bil rounded to cents

var totalBilRoundedToCents = totalBil.toFixed(2);

//format the total bil to euro

var totalBiInEuro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalBilRoundedToCents);

console.log(totalBiInEuro);



/**
 *  function that calculate the total bil of employee's task rounded to Euro cents 
 * 
 *  @param {array} jobTasks array of objects which includes task's name and task's duration
 * 
 *  @returns {number} total bil in Euro
 * 
 */

function calculateTasksBil(jobTasks) {

  var tasksInMinutes = [];

  for (var i = 0; i < jobTasks.length; i++) {
    tasksInMinutes.push(jobTasks[i].duration);
  }

  //create an array of tasks' duration in hours

  const tasksInHours = tasksInMinutes.map(time => time / 60);

  
  //render tasks with more than two hour duration 

  const lessThanTwoHoursTasks = tasksInHours.filter(taskDuration => taskDuration > 2);

  
  //calculate the total bil (tasks' duration * rate per hour)

  const perHourRate = 50;

  const perHoursBil = lessThanTwoHoursTasks.map(taskDuration => taskDuration * perHourRate);

  var totalBil = 0;

  for (var i = 0; i < perHoursBil.length; i++) {
    totalBil += perHoursBil[i];
  }
  //formatting the output
 
  var totalBilRoundedToCents = totalBil.toFixed(2);
  var totalBiInEuro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalBilRoundedToCents);
 
  return totalBiInEuro;
}
console.log(calculateTasksBil(tasks));