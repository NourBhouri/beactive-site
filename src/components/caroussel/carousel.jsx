import Carousel from "react-bootstrap/Carousel";
import lose from "./images/lose.jpg";
import built from "./images/built.jpg";
import builtLose from "./images/lose+built.jpg";
import Button from "react-bootstrap/Button";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;

function ExampleCarouselImage() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
        style={{
          objectFit: "cover",
          height: "100vh",
        }}
        src="https://images.pexels.com/photos/1199607/pexels-photo-1199607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></img>
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      ></div>
    </div>
  );
}
