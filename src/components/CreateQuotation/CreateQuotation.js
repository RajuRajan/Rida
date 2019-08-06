import React, { Component } from 'react'
import './CreateQuotation.css'

export default class CreateQuotation extends Component {

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
       Validity:'',
       SameDateArrival:'',
       Master:'',
       Description:'',
       formOnedata:[] ,
       formTwoData:[]
      
    }
    this.formOneSubmit=this.formOneSubmit.bind(this);
  }

  formOneSubmit()
  {
   
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
    this.setState({formOnedata:formdata})
    localStorage.setItem("Create-Quotation-formOneData",JSON.stringify(this.state.formOnedata))

    var objectTwo={
      Validity:this.state.Validty,
      SameDateArrival:this.state.SameDateArrival,
      Master:this.state.Master,
      Description:this.state.Description
    }

    var formdataTwo=this.state.formTwoData;
    formdataTwo.push(objectTwo);
    this.setState({formTwoData:formdataTwo})

    var textFields=document.getElementsByClassName("field");
    localStorage.setItem("Create-Quotation-formTwoData",JSON.stringify(this.state.formTwoData))

    this.setState({
      Agent:'',
      PIC:'',
      Duration:'',
      Pattern1:'',
      Pattern2:'',
      Start:'',
      End:'',
      Departure:'',
      Quoter:'' ,
       Validity:'',
      SameDateArrival:'',
      Master:'',
      Description:''
    })
    alert("Value Submitted");

  }

  formHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
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
      console.log(this.state.formOnedata);
      console.log(this.state.formTwoData)
        return (
            <div>
                  <div class="container-fluid">
    <div class="row brief" ><b>Quotation Creation form</b>
    </div>
    <div class="row hr" ></div>
    <form onSubmit={(e)=>{e.preventDefault();this.formOneSubmit()}}>
    <div class="row duration-table" >
    <table class="col-12" >
        <thead>
          <tr class="table-row1">
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
          <tr class="table-row2">
            <td width="219px"><input type="text"  class="field" placeholder="Agent" name="Agent" required onChange={(e) =>this.formHandler(e)} value={this.state.Agent}/></td>
            <td width="153px"><input type="text" placeholder="PIC" name="PIC" required onChange={(e) =>this.formHandler(e)} value={this.state.PIC}/></td>
            <td width="131px">
              <select class="browser-default custom-select " name="Duration" required onChange={(e) =>this.formHandler(e)} value={this.state.Duration}>
                <option selected>10 days</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px" >
              <select class="browser-default custom-select " name="Pattern1" required onChange={(e) =>this.formHandler(e)} value={this.state.Pattern1}>
                <option selected>DE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select class="browser-default custom-select " name="Pattern2" required onChange={(e) =>this.formHandler(e)} value={this.state.Pattern2}>
                <option selected>SUM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select class="browser-default custom-select " name="Start" required  onChange={(e) =>this.formHandler(e)} value={this.state.Start}>
                <option selected>FRA</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select class="browser-default custom-select " name="End" required onChange={(e) =>this.formHandler(e)} value={this.state.End}>
                <option selected>BER</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="111px"><input type="text" placeholder="Departure" name="Departure" required onChange={(e) =>this.formHandler(e)} value={this.state.Departure}/></td>
            <td width="111px"><input type="text" placeholder="Quoter" name="Quoter" required onChange={(e) =>this.formHandler(e)} value={this.state.Quoter}/></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row duration-table-manager-quotation" >
        <table class="col-12" >
          <thead>
            <tr class="table-row1">
              <td width="210px">Validity</td>
              <td width="153px">Same Day Arrival  </td>
              <td width="153px">Master</td>
              <td colspan="6">Description</td>
             
            </tr>
          </thead>
          <tbody>
            <tr class="table-row2">
              <td><input type="text" name="Validity" placeholder="Validity" onChange={(e) =>this.formHandler(e)} required value={this.state.Validity}></input></td>
             
              <td>
                <select class="browser-default custom-select " name="SameDateArrival" required onChange={(e) =>this.formHandler(e)} value={this.state.SameDateArrival}>
                  <option selected>Choose</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td >
                <select class="browser-default custom-select " name="Master" required onChange={(e) =>this.formHandler(e)} value={this.state.Master}>
                  <option selected>Choose</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td colspan="6" width="450px">
                <textarea  placeholder="Provide detailed description here" name="Description" required onChange={(e) =>this.formHandler(e)}value={this.state.Description}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
      <div class="row" style={{margin: "1% 6%"}}>
        <div class="col-8"></div>
        <div class="col-2"><button class="btn-prim">Cancel</button></div>
        <div class="col-2"><input type="submit"   class="btn-sec"/></div>
      </div></form> 

      <div class="row trash-edit" >
        <div class="col-2">
          <div class="rectangle">503401 - 01</div>
        </div>
        <div class="col-9"></div>
        <div class="col-1 edit" >
          <img src="assets/images/edit-regular (1).svg" onClick={()=>{this.editField()}}/>
          <img src="assets/images/trash-alt-solid (1).svg" />
        </div>
      
      </div>

      <div class="row duration-table">
      <table class="col-12" >
        <thead>
          <tr class="table-row1">
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
          <tr class="table-row2">
            <td width="219px"><input type="text" className="text" placeholder="Agent" name="agent"/></td>
            <td width="153px"><input type="text" className="text" placeholder="PIC" name="pic"/></td>
            <td width="131px">
              <select class="browser-default custom-select text ">
                <option selected>10 days</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px" >
              <select class="browser-default custom-select text ">
                <option selected>DE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select class="browser-default custom-select  text">
                <option selected>SUM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select class="browser-default custom-select text">
                <option selected>FRA</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select class="browser-default custom-select text">
                <option selected>BER</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="111px"><input type="text" className="text" placeholder="Departure" name="Departure"/></td>
            <td width="111px"><input type="text" className="text" placeholder="Quoter" name="Quoter"/></td>
          </tr>
        </tbody>
      </table>
      </div>


  </div>
            </div>
        )
    }
}
