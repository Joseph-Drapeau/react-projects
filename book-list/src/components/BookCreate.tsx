import { useState } from 'react';
import { useBooksContext } from '../hooks/use-books-context';

const BookCreate: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const { handleCreateBook } = useBooksContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Title</label>
        <input className='input' type='text' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
};

export { BookCreate };
