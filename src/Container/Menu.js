import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Rightbars from "./Rightbars";
import Contents from "./Contents";

const Menu = () => {
  return (
    <div>
      <Header />
        <Contents/>
      <Navbar />
    
      <Rightbars/>
    </div>
  );
};

export default Menu;
