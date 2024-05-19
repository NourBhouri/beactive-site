/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Button } from "react-bootstrap";

export default function Testimonial(props) {
  return (
    <div className="col-lg-4 py-4">
      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 20,
          alignItems: "center",
        }}
      >
        <div>
          <img
            className="bd-placeholder-img rounded-circle "
            src={props.image}
            style={{
              width: 150,
              height: 150,
            }}
          ></img>
        </div>
        <div>
          <h2 className="fw-normal">{props.title}</h2>
          <p>{props.review}</p>
        </div>
      </div>
      <p>
        <Button className="btn btn-secondary" href={props.img}>
          View details »
        </Button>
      </p>
    </div>
  );
}
