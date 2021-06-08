import Image from "next/image";
import Link from "next/link";

export default function Navbar({}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand" href="#">
              <Image
                src="/images/logo.jpg"
                alt="Charleston Pride"
                width="300"
                height="82"
              ></Image>
            </a>
          </Link>
          <button
            className="navbar-toggler shadow-none ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
            id="navigation"
          >
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item mx-2">
                <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                  About Us
                  <img
                    src="/images/down-arrow-dark.svg"
                    className="arrow ms-1"
                  />
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                  Sponsors
                  <img
                    src="/images/down-arrow-dark.svg"
                    className="arrow ms-1"
                  />
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center">
                  Get Involved
                  <img
                    src="/images/down-arrow-dark.svg"
                    className="arrow ms-1"
                  />
                </a>
              </li>
            </ul>

            <ul className="navbar-nav d-lg-block d-none">
              <li className="nav-item">
                <a
                  href="#"
                  className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
