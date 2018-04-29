# hyf-javascript2
Step 3: Custom DOM manipulation challenge 🎓
Deadline Saturday

Open a new js file and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces or special characters so that you can use these later as Id's. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).

Create a basic html file called index.html and use it to load the js file, confirm the console.log show the array. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop.

Make an object containing information for each book. Each item (object) in this object should have the book ID you thought up in point 1 as a key, and it should have at least the following fields: title, language and author.

Now change the function you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the right html elements for each piece of info, for instance, a heading for the title.

Beautify your html page with css, add sources and alts to each of the images.

Download book covers for each book, construct a new Object which has as keys the bookId's again, and as value the path to the image source (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}). Now loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before)
