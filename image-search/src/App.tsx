import {useState} from 'react';
import {SearchBar} from './components/SearchBar';
import {searchImages} from './unsplash-api';
import {ImageList} from './components/ImageList';


const App: React.FC = () => {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term: string) => {
        const queriedImages = await searchImages(term);
        setImages(queriedImages);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;
