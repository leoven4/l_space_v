import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GalleryItem from "../../components/gallery_item/gallery_item";

const Gallery = () => {
    const [open, setOpen] = useState(false);

    const item1 = {name:"item1", 
    imageUrl:"https://drive.google.com/uc?export=view&id=1R_cHu1oISQDLiCVD3En8odwfWXBFdf9E",
    setOpen : setOpen} 

    return (
      <>
        <GalleryItem item={item1}/>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: "https://drive.google.com/uc?export=view&id=1R_cHu1oISQDLiCVD3En8odwfWXBFdf9E" },
            { src: "https://drive.google.com/uc?export=view£id=1F-85yEICXOKIsIWTOeVy7xeyAzjeMFN-" },
            { src: "https://drive.google.com/uc?export=view£id=1HL24_X81TzrMYvb8K9px0O-jZ1Gz9jSt" }
          ]}
        />
      </>
    );
  };

export default Gallery;
