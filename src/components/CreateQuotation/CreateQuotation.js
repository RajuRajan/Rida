import React, { Component } from 'react'
import './CreateQuotation.css';

import edit from '../../assets/images/edit-regular (1).svg';
import trash from '../../assets/images/trash-alt-solid (1).svg';

import Row_Duration from '../Tables/Row_Duration';
import TableQuotation from '../Tables/TableQuotation';

export default class CreateQuotation extends Component {

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
      Validity: '',
      SameDateArrival: '',
      Master: '',
      Description: '',
      formOnedata: [],
      formTwoData: []

    }
    this.formOneSubmit = this.formOneSubmit.bind(this);
  }
  
  formOneSubmit() {

    const  { formOnedata,Validity,SameDateArrival,Master,Description,formTwoData, ...data } = this.state;
  

    const formdata = this.state.formOnedata;
    formdata.push(data);
    this.setState({ formOnedata: formdata })
    localStorage.setItem("Create-Quotation-formOneData", JSON.stringify(this.state.formOnedata))

    const object = {
      Validity: this.state.Validity,
      SameDateArrival: this.state.SameDateArrival,
      Master: this.state.Master,
      Description: this.state.Description
    }

    const formdataTwo = this.state.formTwoData;
    formdataTwo.push(object);
    this.setState({ formTwoData: formdataTwo })
    localStorage.setItem("Create-Quotation-formTwoData", JSON.stringify(this.state.formTwoData))

    this.setState({
      Agent: '',
      PIC: '',
      Duration: '',
      Pattern1: '',
      Pattern2: '',
      Start: '',
      End: '',
      Departure: '',
      Quoter: '',
      Validity: '',
      SameDateArrival: '',
      Master: '',
      Description: ''
    })
    alert("Value Submitted");

  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    console.log(this.state.formOnedata);
    console.log(this.state.formTwoData)
    return (
      <div>
        <div className="container-fluid">
          <div className="row brief" ><b>Quotation Creation form</b>
          </div>
          <div className="row hr" ></div>
          <form onSubmit={(e) => { e.preventDefault(); this.formOneSubmit() }}>
            <Row_Duration form_function={this.formHandler} form_field={this.state} />
          
            <TableQuotation form_function={this.formHandler} form_field={this.state} />

            <div className="row" style={{ margin: "1% 6%" }}>
              <div className="col-8"></div>
              <div className="col-2"><button className="btn-prim">Cancel</button></div>
              <div className="col-2"><input type="submit" className="btn-sec" /></div>
            </div></form>

          <div className="row trash-edit" >
            <div className="col-2">
              <div className="rectangle">503401 - 01</div>
            </div>
            <div className="col-9"></div>
            <div className="col-1 edit" >
              <img src={edit} />
              <img src={trash} />
            </div>

          </div>
          <Row_Duration form_function={this.formHandler} form_field={this.state} />
        </div>
      </div>
    )
  }
}
