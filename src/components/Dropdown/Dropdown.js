import React, { Component } from 'react'
import './Dropdown.css';

export default class Dropdown extends Component {
  dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

    render() {
        return (
            <div>
                 <div className="dropdown">
              <button onClick={()=>{this.dropDown()}} className="dropbtn">
              <div className="Mask-flex">
              <div className="Mask">J</div>
              <div className="profile-name">
                <div>
                  Helmut Krause
               </div>
              </div>
              <div>
                <img src="assets/images/caret-down.svg" width="5px" height="5px"></img>
                </div>
            </div>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            </div>
        )
    }
}
