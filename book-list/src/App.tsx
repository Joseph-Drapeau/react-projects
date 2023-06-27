
import { useState, useEffect } from 'react'
import { BookList } from './components/BookList'
import { BookCreate } from './components/BookCreate'
import axios from 'axios'

interface Book {
  id: number;
  title: string;
}

const App: React.FC = (): JSX.Element => {
  const [books, setBooks] = useState<Book[]>([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleCreateBook = async (title: string): Promise<void> => {
    const response = await axios.post('http://localhost:3001/books', { 
      title: title 
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  }

  const handleDeleteBookById = async (id: number): Promise<void> => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const handleEditBookById = async (newTitle: string, bookId: number): Promise<void> => {
    const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
      title: newTitle
    })
    
    const updatedBooks = books.map((book) => {
      if (book.id === bookId) {
        return { ...book, ...response.data };
      }
      return book
    });
    setBooks(updatedBooks)
  }

  return(
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={handleCreateBook}/>
      <BookList books={books} onDelete={handleDeleteBookById} onEdit={handleEditBookById}/>
    </div>
  )
}

export { App }
export type { Book }
