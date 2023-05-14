import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Events,
  Intro,
  Navbar,
  StarsCanvas,
} from "./components";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Intro />
        </div>
        <About />
        <Events />
        <Sponsors />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
