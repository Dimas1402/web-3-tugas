import React from "react";
import "../Components/Modal.css";

const Modal = () => {
  return (
    // <div

    //   className="modal fade bd-example-modal-sm"
    //   tabindex="-1"
    //   role="dialog"
    //   aria-labelledby="mySmallModalLabel"
    //   aria-hidden="true"
    // >
    //   <div className="modal-dialog modal-sm">
    //     <div className="modal-content">
    //       <h2 id="title-profile">Profile</h2>
    //       <div className="text-center">
    //         <img id="img-profile" src="http://www.ultrasis.com.br/assets/img/default-profile-picture.jpg" className="circle" alt="..." />
    //       </div>
    //       <h2>nama</h2>
    //       <h2>telepon</h2>
    //     </div>
    //   </div>
    // </div>

    <div
      className="modal fade"
      id="exampleModalCenter2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 id="h5" className="modal-title" id="exampleModalLongTitle">
              Profile
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <img
                id="img-profile"
                src="http://www.ultrasis.com.br/assets/img/default-profile-picture.jpg"
                className="circle"
                alt="..."
              />
            </div>

            <div className="title-profiles">
              <div>
                {" "}
                <p className="text-user">Username</p>{" "}
                <p className="text-data">Dimas Anugerah P</p>{" "}
              </div>
              <hr style={{ size: "40px" }} id="garis" />
              <div className="top-data">
                <p className="text-user">Telp</p>{" "}
                <p className="text-data">08881458556</p>
              </div>
              <hr id="garis2" />
              <div className="top-data2">
                <p className="text-user">Email</p>{" "}
                <p className="text-data">anugerahdimas469@gmail.com</p>
              </div>
              <hr id="garis2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
