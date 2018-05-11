var students = [
    {
        id: "1963-1812",
        name: "Brad Pitt",
        education: "General Medicine",
        city: "Lund",
        picture: "https://drive.google.com/uc?id=11wyYBJMlCpcZ8UbrYcMnzcqz5Ei_5hzp"

    },
    {
        id: "196-1605",
        name: "George Clooney",
        education: "Engineering",
        city: "Malmö",
        picture: "https://drive.google.com/uc?id=1lqK0MS4X8pOgrVRhGwBJcMi3n7xiBl4j"

    },
    {
        id: "1966-1306 ",
        name: "Patrick Dempsey",
        education: "Economy",
        city: "Gutenberg",
        picture: "https://drive.google.com/uc?id=1PKZG8Vgma-B4WWKFfXjRyeAtcxpgyBZu"

    }
]

function insertTable(table, headerNames) {
    var div =document.createElement("div");
    div.setAttribute("id", "container");
    document.body.appendChild(div);

    var h1 = document.createElement("h1");
    h1.innerHTML = "This is a table of students"
    div.appendChild(h1);

    var table = document.createElement('table');
    table.setAttribute("class", "table");
    div.appendChild(table);

    insetHeader(table, headerNames);
    insertRows(table, students);


}

function insetHeader(table, headerNames) {
    const rowOfHeader = document.createElement('tr');
    headerNames.forEach(header => {
        var cellInfo = document.createElement("th");
        cellInfo.innerText = header;
        rowOfHeader.appendChild(cellInfo);
    });
    table.appendChild(rowOfHeader);
}

function insertRows(table, arr) {

    arr.forEach(student => {
        const row = document.createElement('tr');
        for (const key in student) {
            var cellInfo = document.createElement("td");
            if(key === "picture"){
             cellInfo.appendChild(insertImage(student[key],student["name"])); 
            }
            else {cellInfo.innerHTML = student[key];} 
            row.appendChild(cellInfo);
        }
        table.appendChild(row);
    });
}

function insertImage(src, alt) {
    var image = document.createElement("img");
    image.setAttribute("src", src);
    image.setAttribute("width", "150");
    image.setAttribute("height", "150");
    image.setAttribute("alt", alt);
    return image;
}





insertTable(students, ["ID", "Name", "Education", "City", "Picture"]);