import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import TopNavbar from "./component/navbar/topNavbar";
import Footer from "./component/footer/Footer";
import Body from "./homeBody/body";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
