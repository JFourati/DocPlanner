import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class Society extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="companies">
          <div>
            <span className="companies-Slogan">
              We are a global company with local culture
            </span>
          </div>
          <div className="companis-Links">
            <div>
              <NavLink
                to="/About-Us"
                className="linkcom"
                activeClassName="selected"
              >
                ZnanyLekarz{" "}
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/About-Us"
                className="linkcom"
                activeClassName="selected"
              >
                Doctoralia{" "}
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/About-Us"
                className="linkcom"
                activeClassName="selected"
              >
                MioDottore{" "}
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/About-Us"
                className="linkcom"
                activeClassName="selected"
              >
                Doctoralia{" "}
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/About-Us"
                className="linkcom"
                activeClassName="selected"
              >
                DoktorTakvimi{" "}
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/About-Us"
                className="linkcom"
                activeClassName="selected"
              >
                Znamylekar{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Society;
