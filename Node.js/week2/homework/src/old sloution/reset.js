`use strict`

let fs = require("fs");


let reset = function () {
    
    fs.open("./toDoList.json", 'r', (err, fd) => {

        if (err) {
            //check if the file exist 

            if (err.code === 'ENOENT') {

                console.error('file does not exist');
                return;
            }

            throw err;
        }

        else {

            fs.readFile("./toDoList.json", "utf8", (err, data) => {
                if (err) throw err;

                listItemsObject = JSON.parse(data);

                if (listItemsObject.listItemsArray.length === 0) {

                    console.log("The list is empty");
                }

                else {

                    listItemsObject.listItemsArray.splice(0, listItemsObject.listItemsArray.length);

                    let listItemsJson = JSON.stringify(listItemsObject);

                    fs.writeFile("./toDoList.json", listItemsJson, (err, data) => {

                        if (err) throw err;

                    })

                    console.log("All the items removed successfully ")

                }

            })
        }
    })


}

module.exports = reset;