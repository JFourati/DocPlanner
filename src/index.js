import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./styles.css";
import Navbar from "./Header";
import AboutUs from "./about-us";
import Society from "./Society";

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <img src={icon} />
    <h2 className="feature-card-title">{title}</h2>
    <p className="feature-card-description">{description}</p>
  </div>
);

const ServiceCard = ({
  showList,
  service: { background, category, title, image }
}) => (
  <div className="service-card" style={{ background: background }}>
    <p className="category">{category}</p>
    <h1 className="title">{title}</h1>
    {showList}
    <img className="screenshot" src={image} />
  </div>
);

const exampleProps = {
  category: "For patients",
  title: "Find a doctor, book a visit and solve...",
  background: "#5dc6b0",
  image: "https://www.docplanner.com/img/screen-marketplace@2x.png"
};

const exampleFeatureCardProps = {
  icon: "https://www.docplanner.com/img/patients.png",
  title: "20 million unique patients",
  description: "visit us every month"
};

const CountryOptions = () => (
  <select className="service-card-options">
    <option>CHOOSE COUNTRY</option>
    <option>Argentina</option>
    <option>Australia</option>
    <option>Tunisia</option>
  </select>
);

const Main = () => (
  <div>
    <div>
      <Navbar />
    </div>
    <div>
      <AboutUs />
    </div>

    <div className="cards">
      <ServiceCard innerJsx={<CountryOptions />} service={exampleProps} />
      <ServiceCard
        service={{
          title: "Save time managing visits and cut no-shows by half",
          category: "For doctors",
          background: "#4293db",
          image: "https://www.docplanner.com/img/screen-saas@2x.png"
        }}
      />
    </div>
    <div>
      <Society />
    </div>
    <div className="features">
      <BrowserRouter>
        <div className="platform-des">
          <div className="description-plat">
            <div className="text-container-2">
              <h1>The world's </h1>
              <h1>biggest heathcare platform</h1>
              <p>
                We work from 6 offices all over the world, bringing Docplanne.
                Group to life in almost 20 countries.
              </p>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <FeatureCard
        title={
          <span>
            Leader in <br />8 countries
          </span>
        }
        icon="https://www.docplanner.com/img/flag.png"
        description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile"
      />
      <FeatureCard
        title="600 000 appointments"
        icon="https://www.docplanner.com/img/visits.png"
        description="booked last month"
      />
      <FeatureCard
        title="20 million unique patients"
        icon="https://www.docplanner.com/img/patients.png"
        description="visit us every month"
      />
      <FeatureCard
        title="35 000 active doctors"
        icon="https://www.docplanner.com/img/doctors.png"
        description="trust in our solutions"
      />
    </div>
    <div className="description">
      <div className="title-1">
        <h2>Improve the lives of millions. Change yours forever</h2>
      </div>
      <div className="site-description">
        <div className="p-container">
          <p className="mission-desc">
            More than 500 team share our same vision,goals and passion. with
            offices in Warsaw. Barcelona, Istanbul, Rome, Mexico city and
            curitiba, our search for great talent never stops
          </p>
        </div>
      </div>
    </div>
    <div className="job">
      <div className="Warsaw">
        <a
          className="linkjob"
          href="https://www.docplanner.com/career?&loc=poland#jobs-offers"
        >
          <figure>
            <img
              src="https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/9G3s-warsaw.png"
              alt=""
            />
            <figcaption>Warsaw</figcaption>
          </figure>

          <input type="button" value="SEE OPENINGS" />
        </a>
        <a href="https://www.docplanner.com/career?&loc=spain#jobs-offers">
          <figure>
            <img
              src="https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/mb8V-barcelona.png"
              alt=""
            />
            <figcaption>Barcelona</figcaption>
          </figure>
          <input type="button" value="SEE OPENINGS" />
        </a>
        <a href="https://www.docplanner.com/career?&loc=rome#jobs-offers">
          <figure>
            <img
              src="https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/HnlG-istanbul.png"
              alt=""
            />
            <figcaption>Istanbul</figcaption>
          </figure>
          <input type="button" value="SEE OPENINGS" />
        </a>
        <a href="https://www.docplanner.com/career?&loc=italy#jobs-offers">
          <figure>
            <img
              src="https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/1hPi-rome.png"
              alt=""
            />
            <figcaption>Rome</figcaption>
          </figure>
          <input type="button" value="SEE OPENINGS" />
        </a>
        <a href="https://www.docplanner.com/career?&loc=mexico#jobs-offers">
          <figure>
            <img
              src="https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/JZEP-mexico-city.png"
              alt=""
            />
            <figcaption>Mexico City</figcaption>
          </figure>
          <input type="button" value="SEE OPENINGS" />
        </a>
        <a href="https://www.docplanner.com/career?&loc=brazil#jobs-offers">
          <figure>
            <img
              src="https://uploads.codesandbox.io/uploads/user/7e26aa09-540f-4bc0-98b7-d53f39c63330/mPY4-curitiba.png"
              alt=""
            />
            <figcaption>Curitiba City</figcaption>
          </figure>
          <input type="button" value="SEE OPENINGS" />
        </a>
      </div>
    </div>

    <div>
      <BrowserRouter>
        <div className="footer">
          <span> we are leaders in 8 countries </span>
          <div className="countries">
            <a href="https://www.znanylekarz.pl/">Poland</a>
            <a href="https://www.doktortakvimi.com/">Turky</a>
            <a href="https://www.doctoralia.es/">Spain</a>
            <a href="https://www.miodottore.it/">Italy</a>
            <a href="https://www.doctoralia.com.mx/">Mexico</a>
            <a href="https://www.doctoralia.com.br/">Brazil</a>
            <a href="http://www.doctoraliar.com/">Argentina</a> en{" "}
            <a href="http://www.doctoralia.cl">Chile</a>
          </div>
          <span>
            This site uses cookies to deliver services in accordance with this
            Privacy Policy. You can specify the conditions for storing or
            accessing cookies on your browser. www.docplanner.com © 2018
          </span>
        </div>
      </BrowserRouter>
    </div>
  </div>
);

ReactDOM.render(<Main />, document.getElementById("root"));
