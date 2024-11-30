import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import { Hero } from "./components/home";
import Partners from "./components/home/Partners";
import Offers from "./components/home/Offers";
import Features from "./components/home/Features";
import Slider from "./components/home/Slider";
import About from "./components/home/About";
import ContactUs from "./components/home/ContactUs";
import Footer from "./components/shared/Footer";
import Error from "./components/error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-accent">
        <Header />
        <Routes>
          {/* Route for the single-page layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Partners />
                <Offers />
                <Features />
                <Slider />
                <About />
                <ContactUs />
                <Footer />
              </>
            }
          />
          {/* Fallback route for errors */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
