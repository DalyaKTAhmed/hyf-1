'use strict';

let fs = require("fs");

let command = process.argv[2];

let item = process.argv[3];

let newItem = process.argv[4];

const Todo = require('./todo');


const FILENAME = 'toDoList.json';

const todo = new Todo(FILENAME);


switch (command) {
  case "list":
    todo.read().then(data => console.log(data));
    break;

  case "add":
    todo.add(item)
    break;

  case "remove":
    todo.deleteItem(item);
    break;

  case "reset":
    todo.delete();
    break;

  case "update":
    todo.update(item, newItem);
    break;

  case "help":
  default:
    fs.readFile("./help.txt", "utf8", (err, data) => {

      if (err) throw err;

      console.log(data);
    })
}


