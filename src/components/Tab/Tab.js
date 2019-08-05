import React, { Component } from 'react';
import './Tab.css'

export default class Tab extends Component {

    constructor(props){
        super(props)
       
    }

    openTab(tabName,n) {
      this.toggleLayoutMenu(n);
        this.props.bread(tabName)
        this.props.optionChange(tabName)    
    }

    toggleLayoutMenu(n)
    {   
        var i;
        let nav=document.querySelectorAll(".option");
        for (i = 0; i < nav.length; i++) {
            nav[i].classList.remove("selected");
        }
       
        nav[n].classList.add("selected");
    }
    render() {
        return (
            <div>
                  <div className="layout-menu">
                    <div className="row">
                    <div className="col-3 create-quotation selected  option" onClick={() => { this.openTab('Create-Quotation',0) }}>Create Quotation
                    </div>
                        <div className="col-3 itinerary-manger option" onClick={() => { this.openTab('Itinerary',1) }}>Itinerary Manager
                    </div>
                        <div className="col-3 pricing option" onClick={() => { this.openTab('Pricing',2) }}>Pricing</div>
                        <div className="col-3 offer-letter option" onClick={() => { this.openTab('Offer',3) }}>Offer Letter Generation</div>
                    </div>
                </div>
                
            </div>
        )
    }
}
