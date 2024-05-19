import CustomNav from "./homePage/CustomNav";
import CustomCarousel from "./homePage/carousel";
import Footer from "./homePage/footer";
import Suppliment from "./homePage/suppliment";
import Testimonials from "./homePage/testimonials/Testimonials";

function AppHome() {
  return (
    <div>
      <CustomNav />
      <div id="caroussel">
        <CustomCarousel />
      </div>
      <div className="container py-5">
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
          id="suppliments"
        >
          <Suppliment
            image="/images/OMEGA3.jpg"
            review="One of the finest fish oils on the market, it offers 300mg of total omega-3 per 500mg capsule with a 60% concentration.  Extracted from small wild blue fish using a patented process, it ensures purity and efficacy."
          />
          <Suppliment
            image="/images/CASEIN-900-CHOCO.jpg"
            review="
Micellar casein is the purest and most effective form of casein. It is to casein what isolate is to whey. It is a slowly digested lacto-protein obtained by ultrafiltration from milk. It is a protein of high biological value with anti-catabolizing action"
          />
          <Suppliment
            image="/images/WKT.jpg"
            review="Creatine is essential for quick energy during intense exercise, regenerating ATP, the main cellular energy source. It enhances muscle strength and accelerates recovery, backed by strong science and safety. Contains 3g Creatine Monohydrate per 5g dose"
          ></Suppliment>
        </div>
      </div>
      <div className="container py-5" id="Testimonials">
        <Testimonials />
      </div>
      <div className="container py-5">
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
          id="equipments"
        >
          <Suppliment
            image="/images/file.jpg"
            review="Grab the bar with palms facing you. Pull yourself up gently while swinging legs toward the bar. Keep arms and torso steady as you swing legs right, then left."
          />
          <Suppliment
            image="/images/lastique.jpg"
            review="Resistance bands, versatile elastic bands, enable full-body workouts, suitable for those with limited mobility as many exercises can be done seated."
          />
          <Suppliment
            image="/images/ballon.jpg"
            review="The exercise ball offers varying difficulty levels, all beneficial for back pain patients, strengthening back and stomach muscles uniformly."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AppHome;
