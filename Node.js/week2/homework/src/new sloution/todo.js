'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const DEFAULT_ENCODING = 'utf8';
const filename = "toDoList.json";
let todos;

class Todo {
  constructor(filename) {
    this.filename = filename;

  }


  async add(todo) {
    
    await this.read().then(data => {
      todos = data;
      todos.push(todo);
    })
    await this._save(todos);
    console.log(`${todo}  was added to the file`);
  }


  async read() {
    return await readFile(this.filename).then(data => {
      return JSON.parse(data);
    }).catch(error => {
      console.log("File is empty");
      return [];
    })
  }


  async update(todo,newTodo) {
    await this.read().then(data =>{
      todos =data;
      if (todos.includes(todo)){
      todos.splice(todo,1,newTodo);
      console.log(`${newTodo}  was updated`);
      }
      else{
        console.log(`${todo}  was not found in the file`)
      }
    })
    await this._save(todos);
    
  }

  async delete() {
    todos = [];
    return this._save(todos);
  }


  async deleteItem(todo) {

    await this.read().then(data => {
      todos = data;
      if (todos.includes(todo)) {
        todos.splice(todo, 1);
        console.log(`${todo}  was deleted from the file`)
      }else{
        console.log(`${todo}  was not found in the file`)
      }
    })

    await this._save(todos);

  }

  // Methods starting with underscore should not be used outside of this class
  _save(todos) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        filename,
        JSON.stringify(todos),
        error => error == null
          ? resolve()
          : reject(error)
      );
    });
  }
}

module.exports = Todo;
