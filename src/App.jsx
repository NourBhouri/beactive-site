import Karte from "./components/cards/Karte";
import CustomCarousel from "./components/caroussel/carousel";
import CustomNav from "./components/navbar/CustomNav";
import React from "react";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div>
      <CustomNav />
      <CustomCarousel />
      <Testimonials />
    </div>
  );
}
export default App;
