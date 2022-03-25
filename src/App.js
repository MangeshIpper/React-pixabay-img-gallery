import "./App.css";
import Gallery from "./page/Gallery";
import ImageDetails from "./page/imageDetails/ImageDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";

//Added topbar comman component for all pages, added routing for change pages.

function App() {
  return (
    <>
      <Topbar />
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
