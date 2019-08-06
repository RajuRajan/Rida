import React from 'react';
import './Top_navbar.css';

import Dropdown from '../Dropdown/Dropdown'

class Top_navbar extends React.Component{

  constructor(props){

   super(props) 
  }
   toggleSidenav()
  {
    if(this.props.NavState.sideToggle==="sidenav")
    this.props.sideNavToggle("sidenav-toggle")
    else
    this.props.sideNavToggle("sidenav")
  }


render(){
    return(
      <div>
        <div className="nav">
      <div className="right-box">
        <ul>
          <li className="list list-one" onClick={()=>{this.toggleSidenav()}}>
            <img alt="alt" src="assets/images/bar.svg" />
          </li>
        </ul>
        <div className="logo">
          <img alt="alt" src="assets/images/logo.png" />
        </div>
        <ul>
          <li className="list  list-two">
            <div className="addcity"><img alt="alt" src="assets/images/plus.svg" /><span>Add new City</span>
            </div>
          </li>
          <li className="list">Report Bug
        </li>
        </ul>
      </div>
      <div className="left-box">
        <ul>
          <li className="list list-one">
            <img alt="alt" src="assets/images/message.svg" />
          </li>
          <li className="list list-two">

            <a href="#" className="notification">
              <span><img alt="alt" src="assets/images/bell.svg" /></span>
              <span className="badge">3</span>
            </a>

          </li>
          <li className="location list list-three">
            <div>
              <img alt="alt" src="assets/images/location.svg" /><span>Thailand</span>
            </div>
          </li>
          <li className="list">
            <Dropdown/>    
          </li>
        </ul>
      </div>
    </div>
   

</div>
    )
}
}

export default Top_navbar;