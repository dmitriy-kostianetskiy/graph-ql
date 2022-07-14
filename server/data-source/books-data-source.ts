import { DataSource } from 'apollo-datasource';
import { BOOKS } from '../data/books';
import { Book, CreateBookInput } from '../model';

export class BooksDataSource extends DataSource {
  getBooks(): Book[] {
    return BOOKS;
  }

  getBookById(id: string): Book | undefined {
    return BOOKS.find((x) => x.id === id);
  }

  createBook(book: CreateBookInput): Book {
    BOOKS.push({
      id: Date.now().toFixed(0),
      author: book.author,
      title: book.title,
    });

    return BOOKS[BOOKS.length - 1];
  }
}
