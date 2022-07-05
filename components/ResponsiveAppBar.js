import Image from 'next/image';
import logo from '../public/images/off_the_wok_logo_white_text_only_transparent.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ResponsiveAppBar = () => {
  const { asPath } = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ms-5">
        <Link href="/">
          <a className="navbar-brand ms-5" href="#">
            <Image src={logo} alt="OTW_Logo" width={50} height={50} />
          </a>
        </Link>
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
              <Link href="/">
                <a
                  className={`nav-link ${asPath === '/' ? 'active' : ''}`}
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/about">
                <a
                  className={`nav-link ${asPath === '/about' ? 'active' : ''}`}
                >
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/episode">
                <a
                  className={`nav-link ${
                    asPath === '/episode' ? 'active' : ''
                  }`}
                >
                  Episodes
                </a>
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/blogs">
                <a
                  className={`nav-link ${asPath === '/blogs' ? 'active' : ''}`}
                >
                  Blogs
                </a>
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link href="/store">
                <a
                  className={`nav-link ${asPath === '/store' ? 'active' : ''}`}
                >
                  Store
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default ResponsiveAppBar;
