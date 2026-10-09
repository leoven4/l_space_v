import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GalleryItem from "../../components/gallery_item/gallery_item";
import "./gallery.scss"
// import { GoogleApis as google} from "googleapis";
// import google from "googleapis"
// const {google} = require('googleapis');

//const CLIENT_ID = '';
//const CLIENT_SECRET = '';
//const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
//const REFRESH_TOKEN = '';

const Gallery = () => {
  const [openItem, setOpenItem] = useState(null);
  const people = [
    {
      name: "Portrait 1",
      imageUrl: "https://images.unsplash.com/photo-1718964382789-57b24c5c4b97?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Portrait 2",
      imageUrl: "https://images.unsplash.com/photo-1642243947382-524cecf14085?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Portrait 3",
      imageUrl: "https://images.unsplash.com/photo-1598292254404-da6a31f7fa75?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Portrait 4",
      imageUrl: "https://images.unsplash.com/photo-1593501273289-354b4fcf3add?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Portrait 5",
      imageUrl: "https://images.unsplash.com/photo-1676540267447-cbdb50628d28?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Portrait 6",
      imageUrl: "https://images.unsplash.com/photo-1576695444267-40cdd214f06e?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const slides = people.map(({ imageUrl }) => ({ src: imageUrl }));


  return (
    <div className="gallery_wrapper">
      {people.map((person, index) => (
        <GalleryItem
          key={person.name}
          item={{ ...person, setOpen: () => setOpenItem(index) }}
        />
      ))}
      <Lightbox
        open={openItem !== null}
        close={() => setOpenItem(null)}
        slides={slides}
        index={openItem ?? 0}
      />

    </div>
  );
};

export default Gallery;
