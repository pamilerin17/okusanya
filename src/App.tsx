import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Pagenotfound from "./components/Pagenotfound/pagenotfound";

const AppContent = () => {
  const location = useLocation();

  // Check if the current route is 404 by matching the "*" route
  const isNotFoundPage = location.pathname !== "/" &&
                         location.pathname !== "/#about" &&
                         location.pathname !== "/#projects" &&
                         location.pathname !== "/#services" &&
                         location.pathname !== "/#contact";

  return (
    <>
      {/* ✅ Show header ONLY if it's not a 404 route */}
      {!isNotFoundPage && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
