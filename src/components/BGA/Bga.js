import React, { Component } from 'react';
import './Bga.css';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/arrow.svg'


import Itinerary from '../Itinerary/Itinerary';
import CreateQuotation from '../CreateQuotation/CreateQuotation';
import Offer from '../Offer/Offer';
import Pricing from '../Pricing/Pricing';
import Tab from '../Tab/Tab';


export default class Bga extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabOption: "Create-Quotation",
            BreadQuotation: "Quotation",
            tabs: "Create-Quotation"
        }
        this.tabOption = this.tabOption.bind(this);
        this.breadCrum = this.breadCrum.bind(this);
    }

    tabOption(option) {
        this.setState({ tabOption: option })
    }
    breadCrum(link) {
        this.setState({ tabs: link })
    }

    render() {
        return (
            <div>
                <div className="header">

                    <a href="#"> <img src={arrow} /></a><span>BGA/<Link to="/BGA">{this.state.BreadQuotation}</Link>/{this.state.tabs}</span>
                    <p> <span><b> Pricing</b></span></p>
                </div>

                <Tab optionChange={this.tabOption} bread={this.breadCrum} />

                {
                    this.state.tabOption === "Itinerary" ? (
                        <div id="Itinerary" >
                            <Itinerary />
                        </div>) : ""
                }

                {
                    this.state.tabOption === "Create-Quotation" ? (
                        <div id="Quotation" >
                            <CreateQuotation />
                        </div>) : ""
                }

                {
                    this.state.tabOption === "Pricing" ? (
                        <div id="Pricing" >
                            <Pricing />
                        </div>) : ""
                }
                {
                    this.state.tabOption === "Offer" ? (
                        <div id="Offer" >
                            <Offer />
                        </div>) : ""
                }
            </div>

        )
    }
}
