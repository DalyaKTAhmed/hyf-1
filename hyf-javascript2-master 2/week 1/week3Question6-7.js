7//

let booksCoverImage = {

    in_search_of_lost_time:
        {
            bookCoverLink: "https://drive.google.com/uc?id=160Dd6-6OyBhTz373cFdElc8DZtjr0fDG"
        },

    don_quixote:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1BW4Kdn4UGTQwK7fjc2BIgtvfOpk7tLtc"
        },
    ulysses:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1jKJoP6bgLDBDyz7tP5QHyUFeIlkLRJHk"

        },
    hamlet:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1Ui7Ir0lDxSeM67S8V2_TU2u82_o1CwHz"

        },
    the_odyssey:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1zgPUB0fvIM2Ez1sjkcVcUv5lOo8gEtG5"

        },
    mopy_dick:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1vB_VHYtjkOEfnvvVurwd88Q85HJMFv7M"

        },
    war_and_peace:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1JZkxGNEl26lG1caLLBGgr2zZTgeb7t0H"

        },
    the_great_gatsby:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1bRwCYQA5fRt6x48K2BP0G63mpkyVyBZd"

        },
    en_man_heter_ove:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1ai77DH_5FrIuWcumdC0G9p-J0Vr1eFQR"

        },
    great_expectations:
        {
            bookCoverLink: "https://drive.google.com/uc?id=1eSScKfM-6cWDUY4GiNCat1CCnFQeQrTZ"

        }
}





function getBookCover(object) {

    var bookCoverList = document.createElement("ul");
    bookCoverList.setAttribute('class', 'books-cover');
    document.body.appendChild(bookCoverList);

    document.querySelector('.books-cover').innerHTML = "List of Book's Cover:";


    var arrayOfKeys = Object.keys(object);// create an array of the booCoverImage id

    for (var i = 0; i < arrayOfKeys.length; i++) {

        let key = arrayOfKeys[i];//to make sure that the right key is assigned to the right image "they have the same order"  

        var bookCoverItem = document.createElement('li');
        bookCoverItem.setAttribute('id', key);


        bookCoverList.appendChild(bookCoverItem);

        var image = document.createElement("img");
        image.setAttribute("src", object[key].bookCoverLink);
        image.setAttribute("width", "304");
        image.setAttribute("height", "228");
        image.setAttribute("alt", key);

        bookCoverItem.innerHTML = "<h2>" + arrayOfKeys[i]

        bookCoverItem.appendChild(image);
    }

}
getBookCover(booksCoverImage);
