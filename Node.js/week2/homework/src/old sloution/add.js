`use strict`

let fs = require("fs");

let lisItemArray = [];

let listItemsObject = {

    listItemsArray: []
};

let add = function (argument3) {

    fs.open("./toDoList.json", "a", (err) => {

        if (err) throw err;
    })


    fs.readFile("./toDoList.json", "utf8", (err, data) => {

        if (err) throw err;

        if (data) {

            listItemsObject = JSON.parse(data);

        }

        listItemsObject.listItemsArray.push(argument3);

        let listItemsJson = JSON.stringify(listItemsObject);


        fs.writeFile("./toDoList.json", listItemsJson, (err, data) => {

            if (err) throw err;

        })
        
        console.log(`Item ${argument3} was added successfully`)


    })
}

module.exports = add;