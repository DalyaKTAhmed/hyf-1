DROP database IF EXISTS students_teachers;
CREATE database students_teachers;
USE students_teachers;

CREATE TABLE students(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(1000) NOT NULL,
    last_name VARCHAR(1000) NOT NULL,
    group_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE marks(
    id INT NOT NULL AUTO_INCREMENT,
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    mark INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);
CREATE TABLE groups(
    id INT NOT NULL AUTO_INCREMENT,
    group_name VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE subjects(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE subjects_teachers(
    id INT NOT NULL,
    subject_id INT NOT NULL,
    teacher_id INT NOT NULL,
    group_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (group_id) REFERENCES groups(id)
);
CREATE TABLE teachers(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(1000) NOT NULL,
    last_name VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO students (first_name, last_name, group_id) VALUES ('Maartje', 'Kruijt', 19);
INSERT INTO students(first_name, last_name, group_id) VALUES ('Joost', 'Lubach', 20);
INSERT INTO students (first_name, last_name, group_id) VAlUES ('Jim', 'Cramer', 21);
INSERT INTO students (first_name, last_name,group_id) VAlUES ('Frank', 'Versnel', 20);


INSERT INTO subjects (title) VALUES ('Mathmatic');
INSERT INTO subjects (title) VALUES ('English');
INSERT INTO subjects (title) VALUES ('Swedish');

INSERT INTO groups (group_name) VALUES ('First Year');
INSERT INTO groups (group_name) VALUES ('Second Year');
INSERT INTO groups (group_name) VALUES ('Third Year');

INSERT INTO teachers (first_name, last_name) VALUES ('Jon ', 'Stephens');
INSERT INTO teachers(first_name, last_name) VALUES ('Mike ', 'Hillyer');
INSERT INTO teachers (first_name, last_name) VAlUES ('Johanna', 'Cramer');
INSERT INTO teachers (first_name, last_name) VAlUES ('Mathilda', 'Svansson');


INSERT INTO marks (student_id, subject_id, mark) VALUES (1,1,100);


