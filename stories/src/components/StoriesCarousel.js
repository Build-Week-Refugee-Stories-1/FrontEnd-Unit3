import React from "react";
import { images } from "../../src/imagesTest";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const initialIndex = 0;

function Carousel() {
  const [index, setIndex] = React.useState(initialIndex);

  // // This code will cyclye thru the carousel every 3.5 seconds

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if(index === images.length -1) {
  //       setIndex(initialIndex)
  //     } else {
  //       setIndex(index + 1)
  //     }
  //   }, 3500)
  //   return () => clearInterval(interval)
  //   }, [index])

  return (
    //Start of the Carousel
    <Gallery
      style={{
        //add styles like height, width, or opacity here for the pictures or background.
        width: "100%",
        background: "black"
      }}
      index={index}
      onRequestChange={(i) => {
        setIndex(i);
      }}
    >
      {/* test images - can be changed */}
      {images.map((image) => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
    </Gallery>
  );
}

export default Carousel;
