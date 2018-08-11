let fs = require("fs");

let list = function () {

    fs.open("./toDoList.json", 'r', (err, fd) => {
        
        if (err) {
            //check if the file exist 
            if (err.code === 'ENOENT') {

                console.error('file does not exist');
                return;
            }

            throw err;
        }

        fs.readFile("toDoList.json", "utf8", (err, data) => {

            if (err) throw err;

            console.log(data);
        })
    })
}

module.exports = list;

