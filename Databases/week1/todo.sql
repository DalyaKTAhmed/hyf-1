

CREATE TABLE Users (
    ID INT,
    FirstName CHAR(255),
    LastName CHAR(255)
);
CREATE TABLE ToDo_List (
    ID INT,
    UserID INT,
    ToDoItem TEXT,
    Tag CHAR(255),
    MarkAsDone BOOLEAN 
);