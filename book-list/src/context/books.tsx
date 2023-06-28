import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

interface Book {
  id: number;
  title: string;
}

interface BooksContextProps {
  books: Book[];
  handleCreateBook: (title: string) => Promise<void>;
  handleDeleteBookById: (id: number) => Promise<void>;
  handleEditBookById: (title: string, id: number) => Promise<void>;
  fetchBooks: () => Promise<void>;
}

const defaultState: BooksContextProps = {
  books: [],
  handleCreateBook: async (title: string): Promise<void> => {},
  handleDeleteBookById: async (id: number): Promise<void> => {},
  handleEditBookById: async (title: string, id: number): Promise<void> => {},
  fetchBooks: async (): Promise<void> => {},
};

const BooksContext: React.Context<BooksContextProps> = createContext(defaultState);

const Provider: React.FC<React.ReactNode> = ({ children }): JSX.Element => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const handleCreateBook = async (title: string): Promise<void> => {
    const response = await axios.post('http://localhost:3001/books', {
      title: title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const handleDeleteBookById = async (id: number): Promise<void> => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleEditBookById = async (newTitle: string, bookId: number): Promise<void> => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <BooksContext.Provider
      value={{ books, handleCreateBook, handleEditBookById, handleDeleteBookById, fetchBooks }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export { BooksContext, Provider };
export type { Book };
