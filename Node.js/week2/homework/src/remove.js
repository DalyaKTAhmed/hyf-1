`use strict`

let fs = require("fs");


let remove = function (listItem) {

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

                else if (listItem in listItemsObject.listItemsArray) {

                    listItemsObject.listItemsArray.splice(listItem, 1);

                    let listItemsJson = JSON.stringify(listItemsObject);

                    fs.writeFile("./toDoList.json", listItemsJson, (err, data) => {

                        if (err) throw err;

                    })

                    console.log(`Item ${listItem} is successfully removed`)

                } else {

                    console.log(`Item ${listItem} is not exist `)
                }

            })
        }
    })
}

module.exports = remove;

