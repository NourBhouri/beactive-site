/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

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
            className="bd-placeholder-img rounded-circle"
            src={props.image}
            style={{
              width: 100,
              height: 100,
            }}
          ></img>
        </div>
        <div>
          <h2 className="fw-normal">{props.title}</h2>
          <p>{props.review}</p>
        </div>
      </div>
      <p>
        <a className="btn btn-secondary" href="#">
          View details »
        </a>
      </p>
    </div>
  );
}
