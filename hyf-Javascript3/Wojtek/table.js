const students = [
    {
        name: "Brad Pitt",
        education: "General Medicine",
        city: "Lund",
        picture: "https://drive.google.com/uc?id=11wyYBJMlCpcZ8UbrYcMnzcqz5Ei_5hzp"
    },
    {
        name: "George Clooney",
        education: "Engineering",
        city: "Malmö",
        picture: "https://drive.google.com/uc?id=1lqK0MS4X8pOgrVRhGwBJcMi3n7xiBl4j"
    },
    {
        name: "Patrick Dempsey",
        education: "Economy",
        city: "Gutenberg",
        picture: "https://drive.google.com/uc?id=1PKZG8Vgma-B4WWKFfXjRyeAtcxpgyBZu"
    }
];
const teachers = [
    {
        name: "Teacher Pitt",
        education: "General Medicine",
        city: "Lund",
        picture: "https://drive.google.com/uc?id=11wyYBJMlCpcZ8UbrYcMnzcqz5Ei_5hzp"
    },
    {
        name: "Teacher Clooney",
        education: "Engineering",
        city: "Malmö",
        picture: "https://drive.google.com/uc?id=1lqK0MS4X8pOgrVRhGwBJcMi3n7xiBl4j"
    },
    {
        name: "Teacher Dempsey",
        education: "Economy",
        city: "Gutenberg",
        picture: "https://drive.google.com/uc?id=1PKZG8Vgma-B4WWKFfXjRyeAtcxpgyBZu"
    }
];

const container = createElementInElement('container', 'div', document.body);
const studentTable = createElementInElement('student-table', 'table', container);
const teacherTable = createElementInElement('teacher-table', 'table', container);

addRowsToTable(students, studentTable);
addRowsToTable(teachers, teacherTable);

/**
 * Adds a header to a html table
 * 
 * @param {String[]} columnNames, Values for the headers, column names, on header row. 
 */
function addHeaderToTable(table, columnNames) {
    const row = document.createElement('tr');

    columnNames.forEach(columnName => {
        const cell = document.createElement('th');
        cell.innerText = columnName;
        row.appendChild(cell);
    });

    table.appendChild(row);
}

/**
 * Adds a student to a html table
 * 
 * @param {<table>} table The table html-element
 * @param {*} student 
 */
function addStudentToTable(table, student) {
    const row = document.createElement('tr');

    for (const key in student) {
        const cell = document.createElement('td');

        if (key === 'picture') {
            cell.appendChild(createImageElement(student[key], student['name']));
        } else {
            cell.innerText = student[key];
        }

        row.appendChild(cell);
    }

    table.appendChild(row);
}

/**
 * Creates an img html element
 * 
 * @param {String} src Url to the image file
 * @param {String} alt Description of image
 * 
 * @returns {<img>} The image element
 */
function createImageElement(src, alt) {
    const image = document.createElement("img");
    image.setAttribute("src", src);
    image.setAttribute("width", "150");
    image.setAttribute("height", "150");
    image.setAttribute("alt", alt);

    return image;
}

/**
 * Adds rows to a html table
 * 
 * @param {Object[]} rows Rows with data to be rendered in the table
 * @param {<table>} table The table to add the rows to
 */
function addRowsToTable(rows, table) {
    addHeaderToTable(table, ['Name', 'Education', 'City', 'Picture']);

    rows.forEach(row => {
        addStudentToTable(table, row);
    })
}

/**
 * Creates one child element inside a parent element
 * 
 * @param {String} childElementClassName CSS class name for child element
 * @param {Object} childElementType 
 * @param {Object} parentElement 
 * 
 * @returns The child element
 */
function createElementInElement(childElementClassName, childElementType, parentElement) {
    const childElement = document.createElement(childElementType);
    childElement.setAttribute('class', childElementClassName);
    parentElement.appendChild(childElement);

    return childElement;
}
