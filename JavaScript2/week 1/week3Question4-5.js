//4 Make an object containing information for each book

let booksInfo = {
    in_search_of_lost_time:
        {
            title: "In search of lost time",
            author: "Marcel Proust",
            language: "French"
        },
    don_quixote:
        {
            title: "Don quixote",
            author: "Miguel de Cervantes",
            language: "Spanish"

        },
    ulysses:
        {
            title: "Ulysses",
            author: "James Joyce",
            language: "English"

        },
    hamlet:
        {
            title: "Hamlet",
            author: "William Shakespeare",
            language: "English"

        },
    the_odyssey:
        {
            title: "The odyssey",
            author: "Homer",
            language: "Latin"

        },
    mopy_dick:
        {
            title: "Mopy dick",
            author: " Herman Melville",
            language: "English"

        },
    war_and_peace:
        {
            title: "War and peace",
            author: "Leo Tolstoy",
            language: "Russian"

        },
    the_great_gatsby:
        {
            title: "The great gatsby",
            author: "F. Scott Fitzgerald",
            language: "English"

        },
    en_man_heter_ove:
        {
            title: "En man heter ove",
            author: "Fredrik Backman  ",
            language: "Swedish"

        },
    great_expectations:
        {
            title: "Great expectations",
            author: "Charles Dickens",
            language: "English"

        }

}


//5 Now change the function you used to display the book ID's in a list to take the actual information about the book from 
//the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.





function getBookInfo(object) {

    var list = document.createElement("UL");
    list.setAttribute('class', 'books-list');   //gave it an class just to access it to set innerHTML later
    document.body.appendChild(list);

    document.querySelector('.books-list').innerHTML = "List of Books:";
    var arrayOfKeys = Object.keys(object);
    for (var i = 0; i < arrayOfKeys.length; i++) {
        let bookListItem = document.createElement('li');
        bookListItem.innerHTML = '<h3>' + object[arrayOfKeys[i]].title + '</h3>' +
            '<p>By ' + object[arrayOfKeys[i]].author + '</p>' +
            '<p>Written in ' + object[arrayOfKeys[i]].language + '</p>'
        list.appendChild(bookListItem);
    }

}
getBookInfo(booksInfo);
