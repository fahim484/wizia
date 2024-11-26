import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* <Header /> */}
          <div className="w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto">
            <div className="space-y-[128px]">
              {/* <Route path="" element={<Navbar />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Incidents" element={<Incidents />} />
                <Route path="/Locations" element={<Locations />} />
                <Route path="/new-incident" element={<IncidentsFirstPage />} />
                <Route path="*" element={<Error />} />
              </Route> */}
            </div>
          </div>
          {/* <Footer /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
