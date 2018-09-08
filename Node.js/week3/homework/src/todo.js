'use strict';

const fs = require('fs');
const uuid = require('uuid/v4');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const DEFAULT_ENCODING = 'utf8';

class Todo {
  constructor(filename) {
    this._filename = filename;
  }

  async create(description) {
    const todos = await this.read();

    const todo = {
      id: uuid(),
      done: false,

      description
    };

    todos.push(todo);

    await this._save(todos);

    return todo;
  }

  async read() {

    return await readFile(this._filename).then(data => {
      return JSON.parse(data);
    }).catch(error => {
      console.log("File is empty");
      return [];
    })
  }


  async findTodo(id) {

    const todos = await this.read();
    const todo = todos.find(t => t.id === id);

    if (todo == null) {
      const error = new Error(`To-do with ID ${id} does not exist`);
      error.code = 'not-found';
      throw error;
    }

    return todo;
  }


  async update(id, description) {

    const todo = await this.findTodo(id);
    todo.description = description;

    await this._save(todos);
    return todo;
  }

  async makeDone(id) {

    const todo = await this.findTodo(id);
    todo.done = true;

    await this._save(todos);
    return todo;
  }



  async makeNotDone(id) {

    const todo = await this.findTodo(id);
    todo.done = false;

    await this._save(todos);
    return todo;
  }


  async delete_(id) {
    const todos = await this.read();
    const filteredTodos = todos.filter(t => t.id !== id);
    return this._save(filteredTodos);
  }

  async delete() {
    const todos = [];
    return this._save(todos);
  }

  // Methods starting with underscore should not be used outside of this class
  _save(todos) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this._filename,
        JSON.stringify(todos, null, 2),
        error => error == null
          ? resolve()
          : reject(error)
      );
    });
  }
}

module.exports = Todo;
