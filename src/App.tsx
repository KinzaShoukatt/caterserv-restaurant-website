import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import AppRoutes from "./AppRoutes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1400, // animation duration in ms — customize as you like
      once: true, // whether animation should happen only once
      // other AOS config...
    });
  }, []);
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
