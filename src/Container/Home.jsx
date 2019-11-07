import React from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import RightBar from "./RightBar";
import "../Components/Home.css"
import Content from "./Content";

const Home = () =>{
    return(
        <div className="home">
            <Header/>
                 <Navbar/>
              <RightBar/> 
               
          <Content/> 
        </div>
    )
}

export default Home