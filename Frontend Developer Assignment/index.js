const dataList = document.querySelector("#dataList");
const searchInput = document.querySelector("#searchInput");
const searchInputBtn = document.querySelector("#searchInputBtn");
const authorCheck = document.querySelector("#authorCheck");
const titleCheck = document.querySelector("#titleCheck");
const genreCheck = document.querySelector("#genreCheck");

let sortedListOfBooks = listOfBooks;

//fn for sorting books alphabeticlly by the author nam
const sortingBooksByAlphabet = (books) => {
  books.sort((a, b) => {
    let aAuthor = a.author.toLowerCase(),
      bAuthor = b.author.toLowerCase();

    if (aAuthor < bAuthor) {
      return -1;
    }
    if (aAuthor > bAuthor) {
      return 1;
    }
    return 0;
  });
};
//

// fn for listing books from array
const booksListing = (books) => {
  books.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add('book-box')
    bookCard.innerHTML = `
    <h3>${book.author}</h3>
    <h4>${book.title}</h4>
    <h5>${book.genre}</h5>
    `;
    dataList.appendChild(bookCard);
  });
};
//

let searchQuery = "";

const handleSearchChange = (e) => {
  searchQuery = e.target.value;
};

const handleSubmitsearch = (e) => {
  e.preventDefault();
  let filteredBooks = [];
  if (authorCheck.checked) {
    filteredBooks = sortedListOfBooks.filter((book) =>
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (titleCheck.checked) {
    filteredBooks = sortedListOfBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (genreCheck.checked) {
    filteredBooks = sortedListOfBooks.filter((book) =>
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  dataList.innerHTML = "";
  sortingBooksByAlphabet(filteredBooks);
  booksListing(filteredBooks);
};

searchInput.addEventListener("keyup", handleSearchChange);
searchInputBtn.addEventListener("click", handleSubmitsearch);

sortingBooksByAlphabet(sortedListOfBooks);
booksListing(sortedListOfBooks);
