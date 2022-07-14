
function showBooks() {
  const list = document.querySelector('#books-list');

  for (const book of arguments) {
    const item = document.createElement('li');
    
    item.innerText = book.title + ' - ' + book.author;
  
    list.insertBefore(item, null);
  }
}

function getTitle() {
  const input = document.querySelector('#title');

  return input.value;
}

function getAuthor() {
  const input = document.querySelector('#author');

  return input.value;
}


const GRAPHQL_URL = 'http://localhost:9000/';

async function fetchBooks() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          books {
            title,
            author
          }
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data;
}

async function createBook(book) {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation CreateBook($book: CreateBookInput) {
          createBook(book: $book) {
            title,
            author
          }
        }
      `,
      variables: 
        {
          book
        }
    }),
  });

  const { data } = await response.json();
  return data;
}

function onCreateBookClick() {
  const title = getTitle();
  const author = getAuthor();

  createBook({ author, title }).then(({ createBook }) => {
    showBooks(createBook);
  })
}


fetchBooks().then(({ books }) => {
  showBooks(...books)
});

