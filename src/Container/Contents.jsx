import React from "react";
import "../Components/Contents.css";
import DropzoneWithoutClick from "../Components/Example";
// import DropzoneComponent from 'react-dropzone-component';
import DropzoneWithoutKeyboard from "../Components/Basic";
import Axios from "axios";

class Contents extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      location: "",
      hari: "",
      awal: "",
      akhir: "",
      loading: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const title = this.state.title;
    const location = this.state.location;
    const hari = this.state.hari;
    const awal = this.state.awal;
    const akhir = this.state.akhir;
    Axios.post("https://limitless-brushlands-38718.herokuapp.com/tambah", {
      title,
      location,
      hari,
      awal,
      akhir
    }).then(res => {
      this.setState({
        title: "",
        location: "",
        hari: "",
        awal: "",
        akhir: "",
        loading:false
      });
  
      console.log(res);
    })
    .catch(err =>{
      setTimeout(this.setState({loading:false}),20000)
      alert("Failed")
    })
  };

  onChange = time => this.setState({ time });

  render() {
    return (
      <div id="container" className="container mt-5 ">
        {this.state.loading && (
         
            <div className="main">
              <div className="tile tile1"></div>
              <div className="tile tile2"></div>
              <div className="tile tile3"></div>
              <div className="tile tile4"></div>
              <div className="tile tile5"></div>
            </div>
          
        )}
        <h3> Create Event </h3>
        <button id="btn-cancel" type="button" class="btn btn-secondary">
          Cancel
        </button>
        <form onSubmit={this.handleSubmit}>
          <div className="row" id="row-1">
            <div id="col-1" className="col-8 col-md-6 mr-2">
              <a>TITLE</a>
              <div className="input-group mt-2">
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                  name="title"
                  id="form-control-id"
                  className="form-control"
                  placeholder="title..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    // type="button"
                    id="btn-title"
                    className="btn btn-outline-primary"
                  >
                    + add description
                  </button>
                </div>
              </div>
              {/*  <------->*/}
              <a>Day</a>
              <div className="date-container">
                <input
                  onChange={this.handleChange}
                  className="date"
                  name="hari"
                  value={this.state.hari}
                  type="date"
                />
              </div>

              <div id="time">
                <a>Time</a>
                <div className="time-container">
                  <input
                    onChange={this.handleChange}
                    value={this.state.awal}
                    name="awal"
                    className="time"
                    type="time"
                  />
                </div>
              </div>

              <div id="durations">
                <a>Durations</a>
                <div className="time-container">
                  <input
                    value={this.state.akhir}
                    onChange={this.handleChange}
                    name="akhir"
                    className="time"
                    type="time"
                  />
                </div>
              </div>
              {/*<------->*/}
              <div className="alert alert-light" role="alert">
                <i id="check" className="fas fa-check-circle"></i> This event
                will take place on the 13th of november 2017 from 10:15am until
                1:00pm
              </div>
              {/*<------->*/}
              <div className="location-box">
                <div id="location" className="input-group mt-2">
                  <a>Location</a>
                  <input
                    onChange={this.handleChange}
                    value={this.state.location}
                    name="location"
                    type="text"
                    id="form-control-ids"
                    className="form-control mr-5"
                    placeholder="location..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div
                    id="btn-meeting"
                    className="input-group-append btn-meeting"
                  >
                    <button
                      // type="button"
                      id="btn-title-rom"
                      className="btn btn-outline-primary"
                    >
                      + Set meeting room
                    </button>
                  </div>
                </div>

                {/*<------->*/}

                <a id="text-add" className="text-left">
                  Upload attachements
                </a>
                <DropzoneWithoutKeyboard />
                <DropzoneWithoutClick />
              </div>
            </div>
            <div id="col-2" className="col-6 col-md-4">
              <a>Add team members</a>
              <div className="box-far">
                <img
                  alt=""
                  id="pict-colom"
                  src="https://imagizer.imageshack.com/img922/5545/Y3Bihx.png"
                />
                <button
                  id="btn-far"
                  // type="button"
                  class="btn btn-outline-primary"
                >
                  {" "}
                  <i id="far" className="far fa-paper-plane"></i>{" "}
                  <a id="a"> + </a>
                </button>
              </div>
              <a>Add guest</a>
              <div className="send">
                <input
                  type="text"
                  id="form-control-id"
                  className="form-control"
                  placeholder="location..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  // type="button"
                  id="btn-title-send"
                  className="btn btn-outline-primary"
                >
                  <a id="send">Send</a>
                </button>
              </div>
              <a id="Notify">Notify people on</a>
              <div id="card" className="card">
                <div id="body-hip" className="card-body">
                  <div id="check-2" className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      <a>Slack</a>
                    </label>
                  </div>
                  <div id="check-1" className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      <a>HipChat</a>
                    </label>
                  </div>
                </div>
              </div>
              <a id="set">Set reminder</a>
              <select id="select" className="form-control form-control-sm">
                <option>2 hours before event</option>
                <option>3 hours before event</option>
                <option>4 hours before event</option>
              </select>
              <button
                type="submit"
                id="btn-create-event"
                class="btn btn-primary"
                onSubmit={this.handleSubmit}
                disabled={this.state.loading}
              >
                Create event
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Contents;
