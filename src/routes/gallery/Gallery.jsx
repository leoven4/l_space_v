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
  const [openItem1, setOpenItem1] = useState(false);
  const [openItem2, setOpenItem2] = useState(false);

  //const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

  //oauth2Client.setCredetials({refresh_token:REFRESH_TOKEN});
  //const drive = google.drive({version: 'v3', auth: oauth2Client});

  //console.log(drive);

  const item1 = {
    name: "item1",
    imageUrl: "https://drive.google.com/uc?export=view&id=1R_cHu1oISQDLiCVD3En8odwfWXBFdf9E",
    setOpen: setOpenItem1,
    slides: [
      { src: "https://drive.google.com/uc?export=view&id=1R_cHu1oISQDLiCVD3En8odwfWXBFdf9E" },
      { src: "https://drive.google.com/uc?export=view&id=1F-85yEICXOKIsIWTOeVy7xeyAzjeMFN-" },
      { src: "https://drive.google.com/uc?export=view&id=1HL24_X81TzrMYvb8K9px0O-jZ1Gz9jSt" }]
  }


  const item2 = {
    name: "item2",
    imageUrl: "https://drive.google.com/uc?export=view&id=1F-85yEICXOKIsIWTOeVy7xeyAzjeMFN-",
    setOpen: setOpenItem2,
    slides: [
      { src: "https://drive.google.com/uc?export=view&id=1R_cHu1oISQDLiCVD3En8odwfWXBFdf9E" },
      { src: "https://drive.google.com/uc?export=view&id=1F-85yEICXOKIsIWTOeVy7xeyAzjeMFN-" },
      { src: "https://drive.google.com/uc?export=view&id=1HL24_X81TzrMYvb8K9px0O-jZ1Gz9jSt" }]
  }


  return (
    <div className="gallery_wrapper">
      <GalleryItem item={item1} />
      <Lightbox
        open={openItem1}
        close={() => setOpenItem1(false)}
        slides={item1.slides}
      />

      <GalleryItem item={item2} />
      <Lightbox
        open={openItem2}
        close={() => setOpenItem2(false)}
        slides={item2.slides}
      />

    </div>
  );
};

export default Gallery;
