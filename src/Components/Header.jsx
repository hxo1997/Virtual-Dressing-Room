import React, { Component } from "react";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
          <div className="card hovercard">
            <div className="card-background" />
            <div className="useravatar">
              <img alt="cybersoft.edu.vn" src="images/cybersoft.png" />
            </div>
            <div className="card-info">
              {" "}
              <span className="card-title">
                Virtual Dressing Room Project
              </span>
            </div>
          </div>
    );
  }
}
