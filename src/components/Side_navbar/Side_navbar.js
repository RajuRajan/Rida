import React from 'react';
import './Side_navbar.css';
import BGA from '../BGA/Bga';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Empty from '../Empty';
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
    console.log(elements)

    return (
      <div className="flex" id={this.props.sideToggle.sideToggle}>

        <div className={this.props.sideToggle.sideToggle} id="sidenav">
          <ul>

            {elements.map((value, index) => {
              console.log(value)
              return (
                <Link to={value.link_to}>    <li className={value.class_name} onClick={() => { this.togglePicked(index) }}>
                  <a>
                    <div>
                      <img src={value.icon} />
                    </div>
                    <span>{value.name}</span>
                  </a>
                </li>
                </Link>)
            }
            )

            }
          </ul>
        </div>

        <div className="layout">

          <Route exact path="/" render={() => <BGA />} />
          <Route exact path="/BGA" render={() => <BGA />} />
          <Route exact path="/empty" render={() => <Empty />} />

        </div>
      </div>
    )
  }
}
export default Side_navbar;