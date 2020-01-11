import React from "react";
import { images } from "../../src/imagesTest";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const initialIndex = 0

function Carousel() {
  const [index, setIndex] = React.useState(initialIndex);

  // This code will cyclye thru the carousel every 3.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      if(index === images.length -1) {
        setIndex(initialIndex)
      } else {
        setIndex(index + 1)
      } 
    }, 5500)
    return () => clearInterval(interval)
    }, [index])

  return (
     //Start of the Carousel
     <>
      <h1>Refugee Stories</h1>
      <Gallery
        style={{
          //add styles like height, width, or opacity here for the pictures or background. 
          height: '100%',
          //  width: '100vw',
          background: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);'
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
        >
          {/* test images - can be changed */}
        {images.map(image => (
          <GalleryImage objectFit="contain" src={image} />
        ))}
    </Gallery>
   </>
  );
}

export default Carousel;