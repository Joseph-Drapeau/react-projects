import './ImageShow.css'

interface ImageUrlSize {
    full: string;
    raw: String;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
}

interface Image {
    id: string;
    alt_description: string;
    urls: ImageUrlSize;
}

interface ImageShowProps {
    image: Image;
}

const ImageShow: React.FC<ImageShowProps> = ({image}): JSX.Element => {
    return (
        <div className="img">
            <img src={image.urls.small} alt={image.alt_description}/>
        </div>
    )
}

export {ImageShow};
export type {Image};