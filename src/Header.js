import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: true
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <div className="logo">
            <img
              className="header-logo"
              src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
              alt="Docplanner Group"
            />
          </div>
          <div className="Nav">
            <NavLink to="/About-Us" className="lnk" activeClassName="selected">
              About us
            </NavLink>
            <NavLink to="/Career" className="lnk" activeClassName="selected">
              Career
            </NavLink>
            <NavLink
              to="/Departement"
              className="dropbtn"
              activeClassName="selected"
            >
              Departement
              <div className="dropdown-content">
                <a href="#">Marketing & PR</a>
                <a href="#">Finance & Administration</a>
                <a href="#">HR & More</a>
              </div>
            </NavLink>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navbar;
