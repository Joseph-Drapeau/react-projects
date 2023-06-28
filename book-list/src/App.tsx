import { useEffect, useContext } from 'react';
import { BookList } from './components/BookList';
import { BookCreate } from './components/BookCreate';
import { BooksContext } from './context/books';

const App: React.FC = (): JSX.Element => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  );
};

export { App };
