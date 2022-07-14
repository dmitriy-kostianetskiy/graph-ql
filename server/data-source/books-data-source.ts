import { DataSource } from 'apollo-datasource';
import { UserInputError } from 'apollo-server';
import { BOOKS } from '../data/books';
import { Book, CreateBookInput } from '../model';

export class BooksDataSource extends DataSource {
  getBooks(): Book[] {
    return BOOKS;
  }

  getBookById(id: string): Book | undefined {
    return this.findBook(id);
  }

  createBook(id: string, book: CreateBookInput): Book {
    if (this.findBook(id)) {
      throw new UserInputError(`Book with the id ${id} already exists`, {
        argumentName: 'id',
      });
    }

    const index =
      BOOKS.push({
        id,
        author: book.author,
        title: book.title,
      }) - 1;

    return BOOKS[index];
  }

  private findBook(id: string): Book | undefined {
    return BOOKS.find((x) => x.id === id);
  }
}
