import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        setImageGallery(response.hits);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const getImgData = (imgData) => {
    navigate("/imgdetails", {data: imgData});
  };

  return (
    <>
      <div className="gallery">
        {imgGallery.map((item, index) => {
          return (
            <div
              className="images"
              key={index}
              onClick={() => getImgData(item)}
            >
              <img src={item.webformatURL} className="imgBox" alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
