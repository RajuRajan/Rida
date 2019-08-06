import React, { Component } from 'react';
import './Itinerary.css';

export default class Itinerary extends Component {
  constructor(){
    super()
    this.state={
       Agent:'',
       PIC:'',
       Duration:'',
       Pattern1:'',
       Pattern2:'',
       Start:'',
       End:'',
       Departure:'',
       Quoter:'' ,
       formOnedata:[] 
    }
    this.formOneSubmit=this.formOneSubmit.bind(this);
  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  formOneSubmit()
  {
    console.log("formsubmit")
    var object={
      Agent:this.state.Agent,
      PIC:this.state.PIC,
      Duration:this.state.Duration,
      Pattern1:this.state.Pattern1,
      Pattern2:this.state.Pattern2,
      Start:this.state.Start,
      End:this.state.End,
      Departure:this.state.Departure,
      Quoter:this.state.Quoter 
    }
    var formdata=this.state.formOnedata;
    formdata.push(object);
    this.setState({formOnedata:formdata});
    localStorage.setItem("Itinerary-formOneData",JSON.stringify(this.state.formOnedata))

    var textFields=document.getElementsByClassName("field");
   
    this.setState({
      Agent:'',
      PIC:'',
      Duration:'',
      Pattern1:'',
      Pattern2:'',
      Start:'',
      End:'',
      Departure:'',
      Quoter:'' 
    })
    alert("Value Submitted");

  }

  editField()
  {
  var textCount=document.getElementsByClassName("text").length;
  for(let i=0 ;i<textCount;i++)
  {
  document.getElementsByClassName("text")[i].disabled=false;
  }
  }

componentDidMount()
{
    var textCount=document.getElementsByClassName("text").length;
  for(let i=0 ;i<textCount;i++)
  {
  document.getElementsByClassName("text")[i].disabled=true;
  }
}
    render() {

      console.log(this.state.formOnedata)
        return (

            <div>
                  <div className="container-fluid">
    <div className="row trash-edit" >
      <div className="col-2">
        <div className="rectangle">503401 - 01</div>
        <div className="rectangle-toggle">503401 - 02</div>
      </div>
      <div className="col-9"></div>
      <div className="col-1 edit" onClick={()=>{this.editField()}}>
        <img src="assets/images/edit-regular (1).svg"/>
        <img src="assets/images/trash-alt-solid (1).svg"/>
      </div>
     
    </div>
    <form onSubmit={(e)=>{e.preventDefault();this.formOneSubmit()}}>
    <div className="row duration-table">
    <table className="col-12" >
        <thead>
          <tr className="table-row1">
            <td width="210px">Agent</td>
            <td width="153px">PIC</td>
            <td>Duration</td>
            <td>Pattern 1</td>
            <td>Pattern 2</td>
            <td>Start</td>
            <td>End</td>
            <td>Departure</td>
            <td>Quoter</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row2">
            <td width="219px"><input type="text" className="text" placeholder="Agent" name="Agent" required onChange={(e) =>this.formHandler(e)} value={this.state.Agent}/></td>
            <td width="153px"><input type="text" className="text" placeholder="PIC" name="PIC" required onChange={(e) =>this.formHandler(e)} value={this.state.PIC}/></td>
            <td width="131px">
              <select className="browser-default custom-select text " required name="Duration" onChange={(e) =>this.formHandler(e)} value={this.state.Duration}>
                <option selected>10 days</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px" >
              <select className="browser-default custom-select text " name="Pattern1" required onChange={(e) =>this.formHandler(e)} value={this.state.Pattern1}>
                <option selected>DE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text " name="Pattern2" required onChange={(e) =>this.formHandler(e)} value={this.state.Pattern2}>
                <option selected>SUM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text " name="Start" required onChange={(e) =>this.formHandler(e)} value={this.state.Start}>
                <option selected>FRA</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text " name="End" required onChange={(e) =>this.formHandler(e)} value={this.state.End}>
                <option selected>BER</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="111px"><input type="text" className="text" placeholder="Departure" name="Departure" required onChange={(e) =>this.formHandler(e)} value={this.state.Departure}/></td>
            <td width="111px"><input type="text" className="text" placeholder="Quoter" name="Quoter" required onChange={(e) =>this.formHandler(e)} value={this.state.Quoter}/></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="row" style={{margin: "1% 6%"}}>
        <div class="col-8"></div>
        <div class="col-2"><button class="btn-prim">Cancel</button></div>
        <div class="col-2"><input type="submit"  class="btn-sec"  value="Create"/></div>
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
                  <img src="assets/images/unlock-alt-solid.svg" width="15px" height="15px"/>
                  <img src="assets/images/edit-regular (1) (copy).svg" width="15px" height="15px"/>
                  <img src="assets/images/trash-alt-solid (1).svg" width="15px" height="15px"/>
                  </div>
           </td>
          </tr>

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
                      <img src="assets/images/unlock-alt-solid.svg" width="15px" height="15px"/>
                      <img src="assets/images/edit-regular (1) (copy).svg" width="15px" height="15px"/>
                      <img src="assets/images/trash-alt-solid (1).svg" width="15px" height="15px"/>
                      </div>
              </td>
             </tr>
        </tbody>
      </table>
    </div>
 
    <div className="row" style={{margin: "1% 2%"}}>
        <div className="col-8"></div>
        <div className="col-2"><button className="btn-sec-copy">Copy</button></div>
        <div className="col-2"><button className="btn-sec"  onClick={this.formOneSubmit}>Quote</button></div>
      </div>
            </div>
        )
    }
}
