import CustomCarousel from "./components/caroussel/carousel";
import CustomNav from "./components/navbar/CustomNav";
import Testimonials from "./components/testimonials/Testimonials";
import Suppliment from "./components/suppliments/suppliment";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <CustomNav />
      <CustomCarousel />
      <div className="container py-5" id="Testimonials">
        <Testimonials />
      </div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <Suppliment />
          <Suppliment />
          <Suppliment />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
