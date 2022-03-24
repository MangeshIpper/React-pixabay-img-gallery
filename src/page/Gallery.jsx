import {React, useEffect, useState} from 'react';
import axios from 'axios';

function Gallery() {

    const [imgGallery, setImageGallery] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            try {
              const {data: response} = await axios.get("https://pixabay.com/api/?key=6473511-0417f2cad683f1bee54cafe15&q=yellow+flowers&image_type=photo");
              setImageGallery(response.hits);
            } catch (error) {
              console.error(error.message);
            }
          }
          fetchData();
    },[])

  return (
    <div>Gallery</div>
  )
}

export default Gallery