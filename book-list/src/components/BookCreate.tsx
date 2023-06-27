import { useState } from 'react';


interface BookCreateProps {
    onCreate: (bookTitle: string) => void;
}

const BookCreate: React.FC<BookCreateProps> = ({ onCreate }): JSX.Element => {
    const [title, setTitle] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    }
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return(
        <div className='book-create'>
            <h3>Add a book</h3>        
            <form onSubmit={handleFormSubmit}>
                <label>Title</label>
                <input className='input' type="text" value={title} onChange={handleChange} />
                <button className='button'>Create!</button>
            </form>
        </div>
    )
};

export {BookCreate};
