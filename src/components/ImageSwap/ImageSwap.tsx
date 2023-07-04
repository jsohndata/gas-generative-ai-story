import React, { useState } from "react";
import { Image } from "../../utils/Bootstrap.jsx";

interface ImageSwapProps {
  imageFile: string;
  motionFile: string;
};

export default function ImageSwap( {imageFile, motionFile}: ImageSwapProps) {
  const [isImageSwap, setIsImageSwap] = useState(false);

  const toggleView = (ImageSwapId: any) => { ImageSwapId(true); };
  
  return (
      <div className="motion-container">
        {
          !isImageSwap
          ? (<Image 
            fluid                   
            src={imageFile} 
            alt="Click Me" 
            onClick={ () => toggleView(setIsImageSwap)} />)

          : (<Image 
            fluid                   
            src={motionFile} 
            alt="Click Me" 
            onClick={ () => toggleView(setIsImageSwap)} />) 
        }
      </div>
  );
}

/*
<video         
  autoPlay
  controls
  style={{ 
    width: '100%', 
    border: 'none',
    padding: '0',
    margin: '0',
  }}>
  <source src={motionFile} type="video/mp4" />
</video>
*/
