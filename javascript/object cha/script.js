const library = [
  {
    author: "Charles Darwin",
    title: "On the origin of species",
    status: {
      own: "true",
      reading: "false",
      read: "false",
    },
  },
  {
    author: "Albert Einstein",
    title: "The photoeletric effect",
    status: {
      own: "true",
      reading: "false",
      read: "false",
    },
  },
  {
    author: "Stephen Hawking",
    title: "Blackholes and baby universes and other essays",
    status: {
      own: "true",
      reading: "false",
      read: "false",
    },
  },
];

//setting read status to true

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//setting title of first object to fitstBook

const { title = firstBook } = library[0];

//converting library object to JSON

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);