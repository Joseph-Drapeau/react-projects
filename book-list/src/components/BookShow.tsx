import {Book} from '../App'
import {BookEdit} from './BookEdit'
import { useState } from 'react'

interface BookShowProps {
    book: Book;
    onDelete: (id: number) => void;
    onEdit: (newTitle: string, bookId: number) => void;
}

const BookShow: React.FC<BookShowProps> = ({ book, onDelete, onEdit }): JSX.Element => {  
    const [showEdit, setShowEdit] = useState<boolean>(false);
    
    const handleClickDelete = () => {
        onDelete(book.id);
    }

    const handleClickEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (newTitle: string, bookId: number) => {
        setShowEdit(false);
        onEdit(newTitle, bookId);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return (
    <div className='book-show'> 
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books'/>
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
    )
};

export { BookShow };
