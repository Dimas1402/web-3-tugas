import React from "react";
import "../Components/Navbar.css";
import Icons1 from "./Icons/Icon1.png";
import Icons2 from "./Icons/Icon2.png";
import Icons3 from "./Icons/Icon3.png";
import Icons4 from "./Icons/Icon7.png";
import Icons5 from "./Icons/Icon6.png";
import Icons6 from "./Icons/Icon4.png";
import Icons7 from "./Icons/Icon5.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  return (
    <div>
      {/* //////////////////////////////modal//////////////////////////////////// */}
    <Modal/>
      {/* /////////////////////////////////modal///////////////////////////// */}

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-nav">
          <br />
          <img className="icons1" src={Icons1} />
          <br />

          <NavLink activeClassName="active" id="active0" to="/menu0"></NavLink>
          <Link to="/menu0">
            <img className="icons2" src={Icons2} />
          </Link>
          <br />

          <NavLink activeClassName="active" id="active1" to="/menu"></NavLink>
          <Link to="/menu">
            <img className="icons3" src={Icons3} />
          </Link>
          <br />

          <NavLink activeClassName="active" id="active2" to="/menu1"></NavLink>
          <Link to="/menu1">
            <img className="icons4" src={Icons4} />
          </Link>
          <br />

          <NavLink activeClassName="active" id="active3" to="/menu2"></NavLink>
          <Link to="/menu2">
            {" "}
            <img className="icons5" src={Icons5} />
          </Link>

          <br />
          <NavLink activeClassName="active" id="active4" to="/menu3"></NavLink>
          <Link to="/menu3">
            {" "}
            <img className="icons6" src={Icons6} />
          </Link>

          <br />
          <NavLink activeClassName="active" id="active5" to="/menu4"></NavLink>
          <Link to="/menu4">
            {" "}
            <img className="icons7" src={Icons7} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
