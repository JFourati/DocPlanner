import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const jobList = [
  {
    titre: "Warsaw",
    photo: "https://www.docplanner.com/images/warsaw.png"
  },
  {
    titre: "Barcelona",
    photo: "https://www.docplanner.com/images/barcelona.png"
  },
  {
    titre: "Istanbul",
    photo: "https://www.docplanner.com/images/istanbul.png"
  },
  {
    titre: "Rome",
    photo: "https://www.docplanner.com/images/rome.png"
  },
  {
    titre: "Mexico City",
    photo: "https://www.docplanner.com/images/mexico-city.png"
  },
  {
    titre: "Curitiba",
    photo: "https://www.docplanner.com/images/curitiba.png"
  }
];

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: true
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="job">
          <NavLink to="/About-Us" className="linkjob">
            <div className="Warsaw">
              <img className="city-img" src={this.props.job.photo} />
              <h5>{this.props.job.titre}</h5>
              <button name="SEE OPENINGS" type="submit" value="SEE OPENINGS">
                {" "}
                SEE OPENINGS{" "}
              </button>
            </div>
          </NavLink>
        </div>
      </BrowserRouter>
    );
  }
}

export default Jobs;
