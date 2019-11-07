import React from "react";
import "../Components/Content.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: "",
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.lookInterval = setInterval(() => {
      axios
        .get("https://limitless-brushlands-38718.herokuapp.com/tampil")
        .then(res => {
          console.log(res.data);
          const data = res.data;
          this.setState({
            data: data,
            loading: false
          });
        });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.lookInterval);
  }

  idRemove = datas => {
    const id = datas.id;
    this.setState({
      id: id
    });
  };

  handleRemove = () => {
    const id = this.state.id;
    axios
      .delete(`https://limitless-brushlands-38718.herokuapp.com/delete/${id}`)
      .then(res => {
        console.log(res);
      });
  };
  render() {
    return (
      <div className="wrapper">
        {this.state.loading && (
          <div className="main">
            <div className="tile tile1"></div>
            <div className="tile tile2"></div>
            <div className="tile tile3"></div>
            <div className="tile tile4"></div>
            <div className="tile tile5"></div>
          </div>
        )}
        <div className="title-events">
          <a className="title-event">Event</a>
          <div className="buttons">
            <Link to="/menu">
              <button className="btn btn-primary" id="btn">
                + Create new
              </button>
            </Link>
          </div>
        </div>
        {this.state.data.map(datas => (
          <div
            onClick={() => this.idRemove(datas)}
            className="card"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            {/* /////////////////////////modal////////////////////////////////// */}
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Delete Event
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">delete this event ?</div>
                  <div class="modal-footer">
                    <button
                      id="btn1"
                      type="button"
                      class="btn btn-danger"
                      data-dismiss="modal"
                    >
                      No
                    </button>
                    <button
                      onClick={this.handleRemove}
                      id="btn2"
                      type="button"
                      class="btn btn-success"
                      disabled={this.state.loading}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////modal////////////////////////////////// */}
            <img
              src="http://www.ultrasis.com.br/assets/img/default-profile-picture.jpg"
              className="rounded"
              alt="..."
            />
            {/* <div className="card-body"> */}
            <div className="row">
              <a className="title-list">{datas.title}</a>
            </div>

            <a className="title-list2">{datas.location}</a>

            <div className="row">
              <a className="title-attacment">
                <a style={{ color: "blue" }}>10 </a>
                Attacment
              </a>
            </div>
            <div id="list-date-time">
              <p className="title-date"> {datas.day}</p>
              <p className="title-time">
                {" "}
                {datas.time_begin} AM - {datas.time_end} AM
              </p>
            </div>

            {/* </div> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
