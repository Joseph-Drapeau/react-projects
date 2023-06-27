import './SearchBar.css';
import { useState } from 'react';


interface SearchBarProps {
    onSubmit: (searchTerm: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }): JSX.Element => { 
    const [term, setTerm] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    }

    const handleFormSubmit= (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(term);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit} className="search-bar-form">
                <label> Search for Images</label>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

export {SearchBar}; 