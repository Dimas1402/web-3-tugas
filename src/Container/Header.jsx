import React from "react";
import "../Components/Header.css";

const Header = () => {
  return (
    <div>
      {/* <div className="topnav">
  <div className="search-container">
    <form action="/action_page.php">
<div className="src">
   <i className="fa fa-search"></i>   <input className="input-search" type="text" placeholder="Find a user, team, meeting..." name="search"/>
   </div>
   <img className="img-profil" src="https://www.picclickimg.com/d/l400/pict/232115221714_/Bill-Gates-8-x-10-8x10-GLOSSY.jpg"/>
   <div className="btn-div">
   <button type="button" className="btn btn-outline-primary btn-sm"><i className="far fa-paper-plane"></i> <a>Invite</a></button>
   </div>
    </form>
  </div>
</div> */}
      <div className="topnav">
        <div className="search">
          <i className="fa fa-search"></i>{" "}
          <input
            className="input-search"
            type="text"
            placeholder="Find a user, team, meeting..."
            name="search"
          />
        </div>
        <div className="pict">
          <img
            className="img-profil"
            src="http://www.ultrasis.com.br/assets/img/default-profile-picture.jpg"
            alt=""
            data-toggle="modal" data-target="#exampleModalCenter2"
          />

          <button type="button" className="btn btn-outline-primary btn-sm">
            <i className="far fa-paper-plane"></i> <a>Invite</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
