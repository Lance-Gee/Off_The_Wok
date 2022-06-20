import Image from 'next/image';
import logo from '../public/images/off_the_wok_logo_white_text_only_transparent.png';

const ResponsiveAppBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-5">
        <a className="navbar-brand ms-5" href="#">
          <Image src={logo} alt="OTW_Logo" width={50} height={50} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ms-5">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item ms-5">
              <a className="nav-link" href="#">
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default ResponsiveAppBar;
