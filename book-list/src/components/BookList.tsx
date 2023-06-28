import { BookShow } from './BookShow';
import { Book } from '../context/books';
import { useBooksContext } from '../hooks/use-books-context';

const BookList: React.FC = (): JSX.Element => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book: Book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
};

export { BookList };
