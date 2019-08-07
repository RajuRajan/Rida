import React from 'react';
import './Side_navbar.css';
import { Link } from 'react-router-dom';


import RouterComponent from '../../Router/Router'
import { elements } from './side_navbar_elements/side_nav_elements';



class Side_navbar extends React.Component {

  constructor(props) {
    super(props)
  }

  togglePicked(n) {

    let nav = document.querySelectorAll("#sidenav ul li");
    var i;
    for (i = 0; i < nav.length; i++) {
      nav[i].classList.remove("picked");
    }
    nav[n].classList.add("picked");
  }

  render() {

    return (
      <div className="flex" id={this.props.sideToggle.sideToggle}>

        <div className={this.props.sideToggle.sideToggle} id="sidenav">
          <ul>
            {elements.map((value, index) => {

              return (
                <Link to={value.link_to} key={index}>    <li className={value.class_name} onClick={() => { this.togglePicked(index) }}>         
                    <div>
                      <img src={value.icon} />
                    </div>
                    <span>{value.name}</span>
                </li>
                </Link>)
            }
            )
            }
          </ul>
        </div>

        <div className="layout">
          <RouterComponent />
        </div>
      </div>
    )
  }
}
export default Side_navbar;