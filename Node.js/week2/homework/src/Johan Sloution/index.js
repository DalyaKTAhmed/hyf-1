'use strict';


let fs = require('fs');

console.log('Your To Do List: ');

let input = process.argv[2];
let item = process.argv[3];
//let items= [];
let listItemsArray = [];

let listItemsObject = {

    listItemsArray: []
};

const fileName = 'toDoList.json'

debugger
try{
  fs.readFile(fileName, 'utf8', (err, data)=>{
    listItemsObject.listItemsArray= JSON.parse(data);
    console.log(JSON.stringify(listItemsObject));
  });}
  catch(err){
      items= [];
  }
 



switch (input) {
  case 'add':
  
    listItemsObject.listItemsArray.push(item);
    console.log('you have added an item to your list')
    break;

  case 'remove':
    items.splice(item, 1)
    console.log('you have removed one item from your list');
    break;

  case 'list':
    console.log(JSON.stringify(items));
    break;

  case 'reset':
    items = [];
    console.log('your list has been reset');
    break;

  case 'help':
  default:
    let help = fs.readFile('help.txt', 'utf8', function (err, data) {
      console.log(data);
    })
    return;
};

fs.writeFile(fileName, JSON.stringify(listItemsObject), (err, data) => {
  if (err) throw error;
});