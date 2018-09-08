// This is the connector (also known as driver)
// that we can use to connect to a MySQL process
// and access its databases.
const mysql = require('mysql');

class TodoModel {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // Loads all the TODOs in the database
    load(userID,callback) {
        const selectTodoItems = "SELECT users.first_name, todo_items.text FROM todo_items, users WHERE  users.id  = ?";
        this.dbConnection.query(selectTodoItems,userID, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }
            console.log(fields)

            callback(null, results);
        });
    }

    create(description, callback) {
        // Write code and query to create a new TODO item
        const createTodoItems = "INSERT INTO todo_items SET ?";
        this.dbConnection.query(createTodoItems, description, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }
            
            callback(null, results);
        });
    }

    update(description,id, callback) {
        // Write code and query to update and existing TODO item
        const updateTdoItem = 'UPDATE todo_items SET text= ? WHERE user_id=?';

        this.dbConnection.query(updateTdoItem,description,id, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    delete(id, callback) {
        // Write code and query to delete an existing TODO item
        const deleteTodoItem = 'DELETE FROM todo_items WHERE user_id=?';
        this.dbConnection.query(deleteTodoItem,id, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    tagTodoItem(todoItemId, tagId, callback) {
        // Write code and query add a tag to a TODO item
        const tagItem= 'INSERT INTO todo_item_tag SET ?';
        this.dbConnection.query(tagItem,todoItemId, tagId, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    untagTodoItem([todoItemId,todoTag], callback) {
        // Write code and query remove a tag from a TODO item
        const untagItem = 'DELETE FROM todo_item_tag WHERE todo_item_id=? and tag_id=? ';
        this.dbConnection.query(untagItem,[todoItemId,todoTag], function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    markCompleted(todoItemId, callback) {
        // Write code to mark a TODO item as completed
        const completeTodoItem = "UPDATE todo_items SET is_completed = TRUE WHERE id=?";
        this.dbConnection.query(completeTodoItem,todoItemId, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }
}

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mansour2005',
    database: 'todo_app'
});

dbConnection.connect(function (err) {
    if (err != null) {
        console.error('error connecting: ' + err.stack);
        return;
    }

  console.log('connected as id ' + dbConnection.threadId);

    const todoModel = new TodoModel(dbConnection);
    
    todoModel.load(3,function (err, todoItems,fields) {
        if (err) {
            console.log("error loading TODO items:", err);
        }

        console.log("existing todo items:", todoItems);
    });


 todoModel.create({ text: 'Do the home work', user_id: 3 }, function (err, result,fields) {
        if (err) {
            console.log("error creating a TODO item:", err);
        }
        // if there is no error, you have the result
        console.log("a new todo item has been aded ");
        console.log("Number of rows affected : " + result.affectedRows);
        console.log("Number of records affected with warning : " + result.warningCount);
        console.log("Message from MySQL Server : " + result.message);
        let newTodoId = result.insertId;
        console.log(newTodoId);
    });

//     todoModel.update(["Walk the dog",3],function (err, result) {
//         if (err) {
//             console.log("error updating TODO item", err);
//         }

//         console.log("todo item has been updated ");
//         console.log("Number of rows affected : " + result.affectedRows);
//         console.log("Number of records affected with warning : " + result.warningCount);
//         console.log("Message from MySQL Server : " + result.message);
//     });
//     todoModel.delete(2,function (err, result) {
//         if (err) {
//             console.log("error deleting TODO item", err);
//         }

//         console.log("todo item has been deleted ");
//         console.log("Number of rows affected : " + result.affectedRows);
//         console.log("Number of records affected with warning : " + result.warningCount);
//         console.log("Message from MySQL Server : " + result.message);
//     });

    todoModel.tagTodoItem({ todo_item_id:43, tag_id: 1}, function (err, result) {
        if (err) {
            console.log("error putting a tag on TODO item", err);
        }
        // if there is no error, you have the result
        console.log("a new tag on todo item has been aded ");
        console.log("Number of rows affected : " + result.affectedRows);
        console.log("Number of records affected with warning : " + result.warningCount);
        console.log("Message from MySQL Server : " + result.message);
    });

//     todoModel.untagTodoItem([43,1], function (err, result) {
//         if (err) {
//             console.log("error removing a tag from TODO item", err);
//         }
//         // if there is no error, you have the result
//         console.log("a tag on todo item has been removed ");
//         console.log("Number of rows affected : " + result.affectedRows);
//         console.log("Number of records affected with warning : " + result.warningCount);
//         console.log("Message from MySQL Server : " + result.message);
//     });
    // todoModel.markCompleted(53, function (err, result) {
    //     if (err) {
    //         console.log("error marking a todo as completed", err);
    //     }
    //     // if there is no error, you have the result
    //     console.log("a todo item has been marked ");
    //     console.log("Number of rows affected : " + result.affectedRows);
    //     console.log("Number of records affected with warning : " + result.warningCount);
    //     console.log("Message from MySQL Server : " + result.message);
    // });

    
});