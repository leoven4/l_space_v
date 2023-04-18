import Button from '../button/button';
import './gallery_item.scss';

const GalleryItem = ({ item }) => {
    const { name, imageUrl, setOpen } = item;

    return (
        <div className="gallery_item">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
            </div>
            <Button buttonType="inverted" onClick={() => setOpen(true)}>Open</Button>
        </div>
    );
};
export default GalleryItem;