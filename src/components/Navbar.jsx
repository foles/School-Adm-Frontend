import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2333/2333041.svg"
                width="30"
                height="30"
                className="d-inline-block align-top mr-3"
                alt="Logo Pagina"
                loading="lazy"
              />
              SCHOOL ADMINISTRATION
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
