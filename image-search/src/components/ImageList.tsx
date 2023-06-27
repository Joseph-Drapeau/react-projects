import './ImageList.css';
import {ImageShow, Image} from './ImageShow'

interface ImageListProps {
    images: Image[];
}

const ImageList: React.FC<ImageListProps> = ({images}): JSX.Element => {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>
    });

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
};

export {ImageList};
