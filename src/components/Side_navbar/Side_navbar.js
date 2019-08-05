import React from 'react';
import './Side_navbar.css';
import BGA from'../BGA/Bga';
import {BrowserRouter as Router ,Link,Route} from 'react-router-dom';
import Empty from '../Empty';
import Itinerary from '../Itinerary/Itinerary'


class Side_navbar extends React.Component{

        constructor(props){
          super(props) 
         }

         togglePicked(n){

          let nav=document.querySelectorAll("#sidenav ul li");
          var i;
          for (i = 0; i < nav.length; i++) {
              nav[i].classList.remove("picked");
          }
         
          nav[n].classList.add("picked");
          
         }

    render()
    {
      console.log(this.props.sideToggle.sideToggle)
            return(
              
           <div className="flex" id={this.props.sideToggle.sideToggle}>
 
            <div className={this.props.sideToggle.sideToggle} id="sidenav">
              <ul>
              <Link to="/BGA">    <li className="picked" onClick={()=>{this.togglePicked(0)}}>
                  <a>
                    <div className="flex-sidenav">
                      <div>
                        <img src="assets/images/tachometer-alt-solid.svg" />
                      </div>
                      <div> <span>BGA</span></div>
    
                    </div>
                  </a>
                </li></Link>
                <Link to="/MASTERS-LISTS">    <li onClick={()=>{this.togglePicked(1)}}>
                  <a>
                    <div>
                      <img src="assets/images/list-alt-regular.svg" />
                    </div>
                    <span>MASTERS LISTS</span>
                  </a>
                </li></Link>
               <Link to="/AGA" ><li onClick={()=>{this.togglePicked(2)}}>
                  <a>
                    <div>
                      <img src="assets/images/book-open-solid.svg" />
                    </div>
                    <span>AGA</span>
                  </a>
                </li></Link>
                <Link to="/AGA-MASTERDATA" >  <li onClick={()=>{this.togglePicked(3)}}>
                  <a>
                    <div>
                      <img src="assets/images/message (copy).svg" />
                    </div>
                    <span>AGA MASTERDATA</span>
                  </a>
                </li></Link>
               <Link to="FINANCE"><li onClick={()=>{this.togglePicked(4)}}>
                  <a>
                    <div>
                      <img src="assets/images/building (copy).svg" />
                    </div>
                    <span>FINANCE</span>
                  </a>
                </li></Link> 
               <Link to="HR"> <li onClick={()=>{this.togglePicked(5)}}>
                  <a>
                    <div>
                      <img src="assets/images/hand-holding-usd-solid.svg" />
                    </div>
                    <span>HR</span>
                  </a>
                </li></Link>
              <Link to="STATISTICS">  <li onClick={()=>{this.togglePicked(6)}}>
                  <a>
                    <div>
                      <img src="assets/images/file-alt-regular.svg" />
                    </div>
                    <span>STATISTICS</span>
                  </a>
                </li></Link>
                <Link to="HOT-DATES">    <li onClick={()=>{this.togglePicked(7)}}>
                  <a>
                    <div>
                      <img src="assets/images/badge (copy).svg" />
                    </div>
                    <span>HOT DATES</span>
                  </a>
                </li></Link>
             <Link to="/empty"><li onClick={()=>{this.togglePicked(8)}}>
                  <a>
                    <div>
                      <img src="assets/images/edit-regular (1) (copy).svg" />
                    </div>
                    <span>REMARKS</span>
                  </a>
                </li></Link>
              </ul>
             
            </div> 
          
            <div className="layout">
             
               <Route exact path="/" render={() =>  <BGA /> } />
               <Route exact path="/BGA" render={() =>  <BGA /> } />
               {/* <Route  path="/BGA/iti" render={()=>< BGA quotation="Itinerary"/>}></Route> */}
                <Route exact path="/empty" render={()=><Empty/>}/>
           
            </div>
          </div>
        



        )


}
}
export default Side_navbar;