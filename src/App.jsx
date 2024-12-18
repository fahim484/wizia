import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Hero,
  Partners,
  Offers,
  Features,
  Slider,
  About,
  ContactUs,
} from "./components/home";
import { Header, Footer } from "./components/shared";
import {
  AboutUs,
  Pricing,
  Customers,
  Solutions,
  BookADemo,
  ContactUsAll,
} from "./components/routes";
import Error from "./components/error/Error";

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
