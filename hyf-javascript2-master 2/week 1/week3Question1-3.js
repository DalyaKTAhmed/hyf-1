
//1 Creating an array of 10 strings

const books = [
    
    "in_search_of_lost_time",
    "don_quixote",
    "ulysses",
    "hamlet",
    "the_odyssey",
    "mopy_dick",
    "war_and_peace",
    "the_great_gatsby",
    "en_man_heter_ove",
    "great_expectations"
];


// 3 Make a function that generate a ul with li elements for each book ID


var bookList = document.getElementById("bookList");


books.forEach(function (book) {
    var bookListElement = document.createElement("li");
    bookList.appendChild(bookListElement);
    bookListElement.innerHTML += book;
}
)



