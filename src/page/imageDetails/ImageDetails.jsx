import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./imageDetails.css";

function ImageDetails() {
  const { state } = useLocation();
  const { largeImageURL, user, tags, views, downloads, imageSize } = state;

  return (
    <div className="container">
      <div className="imgBox">
        <img src={largeImageURL} className="image" alt="" />
      </div>
      <div className="dataDisplay">
        <div className="detailsBox">
          <h2>Image Information</h2>
          <p>Photographer: {user}</p>
          <p>Tags: {tags}</p>
          <p>Views: {views}</p>
          <p>Downloads: {downloads}</p>
          <p>ImageSize: {imageSize}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;
