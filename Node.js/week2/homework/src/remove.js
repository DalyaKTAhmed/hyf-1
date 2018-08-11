`use strict`

let fs = require("fs");


let remove = function (argument3) {

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

                else if (argument3 in listItemsObject.listItemsArray) {

                    listItemsObject.listItemsArray.splice(argument3, 1);

                    let listItemsJson = JSON.stringify(listItemsObject);

                    fs.writeFile("./toDoList.json", listItemsJson, (err, data) => {

                        if (err) throw err;

                    })

                    console.log(`Item ${argument3} is successfully removed`)

                } else {

                    console.log(`Item ${argument3} is not exist `)
                }

            })
        }
    })
}

module.exports = remove;

