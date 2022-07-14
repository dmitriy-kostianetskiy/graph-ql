import { DataSource } from 'apollo-datasource';
import { BOOKS } from '../data/books';
import { Book } from '../model';

export class BooksDataSource extends DataSource {
  getBooks(): Book[] {
    return BOOKS;
  }

  getBookById(id: string): Book | undefined {
    return BOOKS.find((x) => x.id === id);
  }
}
