import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./gallery.css";

function Gallery() {
  const [imgGallery, setImageGallery] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&q=yellow+flowers&image_type=photo"
        );
        if(response) {
            setImageGallery(response.hits);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const getImgData = (imgData) => {
    navigate("/imgdetails", {
      state: {
        largeImageURL: imgData.largeImageURL,
        user: imgData.user,
        tags: imgData.tags,
        views: imgData.views,
        downloads: imgData.downloads,
        imageSize: imgData.imageSize,
      },
    });
  };

  return (
    <>
      <div className="gallery">
        {imgGallery ? (
          imgGallery.map((item, index) => {
            return (
              <div data-testid="resolved"
                className="images"
                key={index}
                onClick={() => getImgData(item)}
              >
                <img src={item.webformatURL} className="imgBox" alt="" />
              </div>
            );
          })
        ) : (
          <h1 data-testid="notAvailable">Images are not available!</h1>
        )}
      </div>
    </>
  );
}

export default Gallery;
