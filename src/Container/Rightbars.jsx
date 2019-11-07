import React from "react";
import "../Components/Rightbars.css";
import pict1 from "../Container/Icons/pict1.png"

const Contents = () => {
  return (
    <div className="box-content ">
      <form className="md-form">
        <div className="file-field">
          <div className="z-depth-1-half mb-4">
            <img
              src="https://b.imge.to/2019/09/26/vc5jat.png"
              className="img-fluid"
              alt="example placeholder"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div
              id="tombol"
              className="btn btn-mdb-color btn-rounded float-left"
            >
              <span>Uploader </span>
              <br/>
              <input id="file-input" type="file" />
            </div>
          </div>
        </div>
        <div id="progress" className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <i id="ceklis" class="fas fa-check"></i>
        <a  id="mb">10,9mb</a>
        <a  id="file">User_interviews.pdf</a>
        <br></br>
        <a  id="view">View file</a>
        <div id="progress2" class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <i id="silang" class="fas fa-times"></i>
        <a  id="mb2">7,48mb</a>
        <br></br>
        <img
        alt=""
          id="img-pict"
          src="https://imagizer.imageshack.com/img921/6836/mwzh6j.png"
        />
        <p id="name-jpg">Sketches_01.jpeg</p>
        <a  id="mb3">view file</a>
        <div id="progress3" class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: "0%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {" "}
          </div>
         
        </div>
        <i id="silang2" class="fas fa-times"></i>
        <a  id="mb2">6,00mb</a>
        <br></br>
        <img alt="" id="png" src={pict1} />
        <p id="name-jpg">Sketches_02.jpeg</p>
        <a  id="mb3">view file</a>
      </form>
    </div>
  );
};

export default Contents;
