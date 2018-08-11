'use strict';

const http = require('http');

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */
function createServer(port) {

  let state = 10;
  let currentState = null;

  const server = http.createServer((request, response) => {

    response.writeHead(200, { "Content-Type": "application/json" });

    switch (request.url) {
      case "/state":
        currentState = JSON.stringify({
          "state": state
        });
        break;

      case "/add":
        state++;
        currentState = JSON.stringify({
          "state": state
        });
        
        break;

      case "/subtract":
        state--;
        currentState = JSON.stringify({
          "state": state
        });
        break;

      case "/reset":
        state = 10;
        currentState = JSON.stringify({
          "state": state
        });
        break;

      default:
        response.writeHead(404, { "Content-Type": "application/json" })
        currentState = JSON.stringify({
          error: 'Not found'
        });
    }

    response.end(currentState);
  });

  return server;
}

module.exports = {
  createServer
};
