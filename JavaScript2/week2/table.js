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

/**
 * 
 * @param {object} array  
 */

function createHeaderOfTable(listOfInformation,column ){
    var tr = document.createElement("tr");
    listOfInformation.appendChild(tr);
    
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");

    th1.innerHTML = "ID";
    th2.innerHTML = "Name";
    th3.innerHTML = "Education";
    th4.innerHTML = "City";
    th5.innerHTML = "Picture";

    table.appendChild(th1);
    table.appendChild(th2);
    table.appendChild(th3);
    table.appendChild(th4);
    table.appendChild(th5);

}




function getStudents(arrayOfStudent) {

    var div =
    document.createElement("div");
    div.setAttribute("id", "container");
    document.body.appendChild(div);

    var h1 = document.createElement("h1");
    h1.innerHTML = "This is a table of students"
    div.appendChild(h1);

    var table = document.createElement('table');
    table.setAttribute("class", "table");
    div.appendChild(table);

    // creat the table header

  

    //create the rows of students 

    for (var i = 0; i < arrayOfStudent.length; i++) {

        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var div1 = document.createElement("div")
        div1.setAttribute("id", "imgStyle")
        document.body.appendChild(div1);
        var image = document.createElement("img");
        image.setAttribute("src", arrayOfStudent[i].picture);
        image.setAttribute("width", "150");
        image.setAttribute("height", "150");
        image.setAttribute("alt", arrayOfStudent[i].name);
        div1.appendChild(image);

        td1.innerHTML = arrayOfStudent[i].id;
        td2.innerHTML = arrayOfStudent[i].name;
        td3.innerHTML = arrayOfStudent[i].education;
        td4.innerHTML = arrayOfStudent[i].city;


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tr.appendChild(image);

        table.appendChild(tr);
    }
}


getStudents(students);