import { useState } from 'react';
import { Book } from '../context/books';
import { useBooksContext } from '../hooks/use-books-context';

interface BookEditProps {
  book: Book;
  onSubmit: () => void;
}

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }): JSX.Element => {
  const { handleEditBookById } = useBooksContext();
  const [title, setTitle] = useState<string>(book.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
    handleEditBookById(title, book.id);
  };

  return (
    <form className='book-edit' onSubmit={handleFormSubmit}>
      <label>Title</label>
      <input className='input' type='text' value={title} onChange={handleChange} />
      <button className='button is=primary'>Save</button>
    </form>
  );
};

export { BookEdit };
