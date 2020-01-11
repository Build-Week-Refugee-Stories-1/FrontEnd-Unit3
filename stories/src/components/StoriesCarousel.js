import React from "react";
import { images } from "../../src/imagesTest";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { PubContext } from "../contexts/PubStories";

const initialIndex = 0

function Carousel() {
  const [index, setIndex] = React.useState(initialIndex);
  const story = React.useContext(PubContext);

  // This code will cyclye thru the carousel every 3.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(initialIndex)
      } else {
        setIndex(index + 1)
      }
    }, 5500)
    return () => clearInterval(interval)
  }, [index])

  return (
    <>
      <h1>Refugee Stories</h1>
      
      <Gallery
        style={{
          //add styles like height, width, or opacity here for the pictures or background. 
          height: '500px',
          // width: '100vw',
          background: "linear-gradient(141deg, #9FB8AD 0%, #1FC8DB 51%, #2CB5E8 75%);"
        }}
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {/* test images - can be changed */}
        {story.map(image => (
          <>
            <GalleryImage objectFit="contain" src={image.image} />
            <p>{`"${image.quote}" - ${image.name}`}</p>
          </>
        ))

        }

      </Gallery>
    </>
  );
}

export default Carousel;