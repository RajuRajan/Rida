import React, { Component } from 'react';
import './Itinerary.css';


import edit from '../../assets/images/edit-regular (1).svg';
import trash from '../../assets/images/trash-alt-solid (1).svg';

import Row_Duration from '../Tables/Row_Duration';
import unlock from '../../assets/images/unlock-alt-solid.svg';


export default class Itinerary extends Component {
  constructor() {
    super()
    this.state = {
      Agent: '',
      PIC: '',
      Duration: '',
      Pattern1: '',
      Pattern2: '',
      Start: '',
      End: '',
      Departure: '',
      Quoter: '',
      formOnedata: []
    }
    this.formOneSubmit = this.formOneSubmit.bind(this);
  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formOneSubmit() {
    const  { formOnedata, ...data } = this.state;

    const formdata = this.state.formOnedata;
    formdata.push(data);
    this.setState({ formOnedata: formdata });
    localStorage.setItem("Itinerary-formOneData", JSON.stringify(this.state.formOnedata))


    this.setState({
      Agent: '',
      PIC: '',
      Duration: '',
      Pattern1: '',
      Pattern2: '',
      Start: '',
      End: '',
      Departure: '',
      Quoter: ''
    })
    alert("Value Submitted");

  }


  render() {

    return (

      <div>
        <div className="container-fluid">
          <div className="row trash-edit" >
            <div className="col-2">
              <div className="rectangle">503401 - 01</div>
              <div className="rectangle-toggle">503401 - 02</div>
            </div>
            <div className="col-9"></div>
            <div className="col-1 edit" >
              <img src={edit} />
              <img src={trash} />
            </div>

          </div>
          <form onSubmit={(e) => { e.preventDefault(); this.formOneSubmit() }}>
            <Row_Duration form_function={this.formHandler} form_field={this.state} disable_textfield={true} />

            <div class="row" style={{ margin: "1% 6%" }}>
              <div class="col-8"></div>
              <div class="col-2"><button class="btn-prim">Cancel</button></div>
              <div class="col-2"><input type="submit" class="btn-sec" value="Create" /></div>
            </div> </form>
          <div className="row brief"><b>Itinerary brief : 503401 - 01</b>
          </div>
          <div className="row hr" ></div>
        </div>

        <div className="row duration-table-manager-iti" >
          <table className="col-12" >
            <thead>
              <tr className="table-row1">
                <td width="79px">Position</td>
                <td width="69px">Date</td>
                <td width="160px">City</td>
                <td width="95px">Time</td>
                <td width="335px">Service</td>
                <td width="252px" >Details</td>
                <td width="150px">

                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="table-row2">
                <td>001</td>
                <td>Day 2</td>
                <td>Frankfrut</td>
                <td>12:45 PM</td>
                <td>Start LDC Road tolls are included in the main package price. NO DIRECT PAYMENT TO THE DRIVER IS REQUIRED FOR THESE SERVICES. Parking fees and city permits are not included and MUST be paid by the Tour Leader directly to the driver. The Tour Leader must take care of the meals for the driver.</td>
                <td className="details">Pick‐Up Frankfurt Airport Flight
              CI61 @14:45</td>
                <td>
                  <div className="flex">
                    <img src={unlock} />
                    <img src={edit} />
                    <img src={trash} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row" style={{ margin: "1% 2%" }}>
          <div className="col-8"></div>
          <div className="col-2"><button className="btn-sec-copy">Copy</button></div>
          <div className="col-2"><button className="btn-sec" onClick={this.formOneSubmit}>Quote</button></div>
        </div>
      </div>
    )
  }
}
