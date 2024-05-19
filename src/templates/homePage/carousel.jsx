/* eslint-disable react/prop-types */
import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <CarouselImage image="/images/lose+built.jpg" />
        <p>
          <a
            className="btn btn-lg btn-dark"
            style={{
              position: "absolute",
              left: "46%",
              top: "85%",
            }}
            href="./login"
          >
            Start Now
          </a>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage image="/images/built.jpg" />
        <p>
          <a
            className="btn btn-lg btn-dark"
            style={{
              position: "absolute",
              left: "46%",
              top: "85%",
            }}
          >
            Start Now
          </a>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage image="/images/lose.jpg" />
        <p>
          <a
            className="btn btn-lg btn-dark"
            style={{
              position: "absolute",
              left: "46%",
              top: "85%",
            }}
          >
            Start Now
          </a>
        </p>
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
