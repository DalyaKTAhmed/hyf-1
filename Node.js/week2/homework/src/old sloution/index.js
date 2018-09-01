'use strict'

let fs = require("fs");

let list = require("./list");

let add = require("./add");

let remove = require("./remove");

let reset = require("./reset");

let update = require("./update");


let command = process.argv[2];

let argument3 = process.argv[3];

let argument4 = process.argv[4];


let listItemsArray = [];

//module.exports = {listItemsArray};

let listItemsObject = {

    listItemsArray: []
};


switch (command) {


    case "help":

        fs.readFile("./help.txt", "utf8", (err, data) => {
            if (err) throw err;
            console.log(data);
        })

        break;

    case "list":

        list();

        break;

    case "add":

        add(argument3, listItemsObject);

        break;

    case "remove":

        remove(argument3);

        break;

    case "reset":

        reset();
       
        break;

    case "update":

        update(argument3, argument4);

        break;

    default:

        fs.readFile("./help.txt", "utf8", (err, data) => {

            if (err) throw err;

            console.log(data);
        })


}

