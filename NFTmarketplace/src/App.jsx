import Navbar from "./layout/Navbar/Navbar";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./components/Discover/Discover";
import HowWork from "./components/HowWork/HowWork";
import Notification from "./components/Notification/Notification";
import Container from "./layout/Navbar/Container/Container";
import Footer from "./layout/Footer/Footer";
import FooterFaq from "./layout/Footer/FooterFaqs/FooterFaq";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Container> */}
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/how-it-works" element={<HowWork />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/footer" element={<FooterFaq />} />
        </Routes>
        <Footer />
        {/* </Container> */}
      </BrowserRouter>
    </>
  );
}

export default App;
