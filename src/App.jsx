import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Hero from "./components/home/Hero";
import Partners from "./components/home/Partners";
import Offers from "./components/home/Offers";
import Features from "./components/home/Features";
import Slider from "./components/home/Slider";
import About from "./components/home/About";
import ContactUs from "./components/home/ContactUs";
import Error from "./components/error/Error";
import Pricing from "./components/routes/Pricing";
import Customers from "./components/routes/Customers";
import AboutUs from "./components/routes/AboutUs";
import Solutions from "./components/routes/Solutions";
import BookADemo from "./components/routes/BookADemo";
import ContactUsAll from "./components/routes/ContactUsAll";

const App = () => {
  return (
    <BrowserRouter>
      {/* Main layout wrapper */}
      <main className="bg-accent">
        {/* Header component for consistent display across all pages */}
        <Header />

        {/* Define application routes */}
        <Routes>
          {/* Home page route */}
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
              </>
            }
          />

          {/* AboutUs page route */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Pricing page route */}
          <Route path="/pricing" element={<Pricing />} />

          {/* Customers page route */}
          <Route path="/customers" element={<Customers />} />

          {/* Solutions page route */}
          <Route path="/solutions" element={<Solutions />} />

          {/* BookADemo page route */}
          <Route path="/book-a-demo" element={<BookADemo />} />

          {/* ContactUsAll page route */}
          <Route path="/contact-us" element={<ContactUsAll />} />

          {/* Define Custom Error fallback for undefined paths */}
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Footer component for consistent display across all pages */}
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
