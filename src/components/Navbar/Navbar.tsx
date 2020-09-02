import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HouseIcon } from "../../../node_modules/bootstrap-icons/icons/house-fill.svg";
export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-info text-light">
        <Link
          className=""
          to="/"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <HouseIcon
            className="navbar-brand text-light"
            height="30"
            width="30"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"></li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu <span className="sr-only">(current)</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="btn btn-outline-secondary dropdown-item btn btn-outline-secondary"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="btn btn-outline-secondary dropdown-item btn btn-outline-secondary"
                  to="/"
                >
                  About
                </Link>
                <Link className="dropdown-item" to="/">
                  Contact
                </Link>
                {/* <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">
                  Something else here
                </Link>*/}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link disabled" to="/" aria-disabled="true">
                Disabled
              </Link>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
