'use strict';

function deleteTodo(todo, request, response) {

  todo.delete()
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = deleteTodo;