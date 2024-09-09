import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({img,alt}) => {
  return (
    <LazyLoadImage
    src={img?img: "https://placedog.net/500/300"}
    width={600}
    height={400}
    alt={alt?alt:"Image Alt"}
    effect="blur"
  />
  )
}

export default LazyImage