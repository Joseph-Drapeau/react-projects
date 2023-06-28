import { Book } from '../context/books';
import { BookEdit } from './BookEdit';
import { useState } from 'react';
import { useBooksContext } from '../hooks/use-books-context';

interface BookShowProps {
  book: Book;
}

const BookShow: React.FC<BookShowProps> = ({ book }): JSX.Element => {
  const { handleDeleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState<boolean>(false);

  const handleClickDelete = () => {
    handleDeleteBookById(book.id);
  };

  const handleClickEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleClickEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export { BookShow };
