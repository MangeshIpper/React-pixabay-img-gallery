import "./App.css";
import Gallery from "./page/Gallery";
import ImageDetails from "./page/imageDetails/ImageDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <h1>Pixabay Image Gallery</h1>
      <Router>
        <Routes>
          <Route path="/imgdetails" element={<ImageDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route exact path="/" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
