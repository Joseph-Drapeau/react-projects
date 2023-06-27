import { useContext } from 'react'
import { BooksContext } from '../context/books'
import { BookShow } from './BookShow'
import { Book } from '../App'

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (newTitle: string, bookId: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }): JSX.Element => {
    const value = useContext(BooksContext);
    const renderedBooks = books.map((book: Book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
    });
  
    return (
    <div className='book-list'>
        {value}
        {renderedBooks}
    </div>
  );
};

export { BookList };
