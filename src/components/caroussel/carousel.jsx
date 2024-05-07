/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage image="/images/lose+built.jpg" />
        <Carousel.Caption>
          <h1>Lose </h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage image="/images/built.jpg" />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage image="/images/lose.jpg" />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;

function CarouselImage(props) {
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
        src={props.image}
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
