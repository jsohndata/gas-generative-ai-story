import React, { useState } from "react";
import { Image } from "../../utils/Bootstrap.jsx";

interface ImageSwapProps {
  imageFile: string;
  motionFile: string;
};

export default function ImageSwap( {imageFile, motionFile}: ImageSwapProps) {
  const [isImageSwap, setIsImageSwap] = useState(false);

  const toggleView = () => {
    setIsImageSwap(!isImageSwap);

    const motionContainer:any = document.querySelector('.motion-img');
    motionContainer.style.animationDirection = isImageSwap ? 'reverse' : 'normal';

    // if (isImageSwap) {
    //   motionContainer.style.animationPlayState = 'running';
    // } else {
    //   motionContainer.style.animationPlayState = 'paused';
    // }
  };

  return (
    <figure className="motion-container">
      {!isImageSwap ? (
        <Image
          fluid
          src={imageFile}
          alt="Click Me"
          className="motion-img"
          onClick={toggleView} />
      ) : (
        <Image
          fluid
          src={motionFile}
          alt="Click Me"
          className="motion-img"
          onClick={toggleView} />
      )}
    </figure>
  );
};