export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#caroussel" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#suppliments"
              className="nav-link px-2 text-body-secondary"
            >
              Suppliments
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Testimonials"
              className="nav-link px-2 text-body-secondary"
            >
              Testimonials
            </a>
          </li>
          <li className="nav-item">
            <a href="#equipments" className="nav-link px-2 text-body-secondary">
              Equipments
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          © BeActive company all rights served
        </p>
      </footer>
    </div>
  );
}
