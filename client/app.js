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

fetchBooks().then(({ books }) => {
    const list = document.querySelector('#books-list');

    books.forEach(book => {
      const item = document.createElement('li');

      item.innerText = book.title + ' - ' + book.author;

      list.insertBefore(item, null);
    });
});
