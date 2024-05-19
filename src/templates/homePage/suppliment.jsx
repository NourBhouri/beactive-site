/* eslint-disable react/prop-types */
export default function Suppliment(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          style={{
            width: "100%",
            height: 300,
            objectFit: "cover",
          }}
          src={props.image}
        ></img>
        <div className="card-body">
          <p className="card-text">{props.review}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              ></button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
}
