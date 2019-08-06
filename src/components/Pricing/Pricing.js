import React, { Component } from 'react';
import './Pricing.css';
import Row_Duration from '../Tables/Row_Duration';
import {accordian} from './accordian/Accordian'

export default class Pricing extends Component {

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
       day:'',
       city:'',
       hostel:'',
       single_pax:'',
       single_price:'',
       twin_pax:'',
       twin_price:'',
       triple_pax:'',
       triple_price:'',
       total_pax:'',
       total_price:'',
       formOnedata:[],
       formTwodata:[] 
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
    var object={
      Agent:this.state.Agent,
      PIC:this.state.PIC,
      Duration:this.state.Duration,
      Pattern1:this.state.Pattern1,
      Pattern2:this.state.Pattern2,
      Start:this.state.Start,
      End:this.state.End,
      Departure:this.state.Departure,
      Quoter:this.state.Quoter ,
      
    }
    var formdata=this.state.formOnedata;
    formdata.push(object);
    this.setState({formOnedata:formdata})

    localStorage.setItem("Pricing-formOneData",JSON.stringify(this.state.formOnedata))

    var objectTwo={
       day:this.state.day,
       city:this.state.city,
       hostel:this.state.hostel,
       single_pax:this.state.single_pax,
       single_price:this.state.single_price,
       twin_pax:this.state.twin_pax,
       twin_price:this.state.twin_price,
       triple_pax:this.state.triple_pax,
       triple_price:this.state.triple_price,
       total_pax:this.state.total_pax,
       total_price:this.state.total_price
    }
    var formdataTwo=this.state.formTwodata;
    formdataTwo.push(objectTwo);
   
    this.setState({formTwodata:formdataTwo});
    localStorage.setItem("Pricing-formTwoData",JSON.stringify(this.state.formTwodata))

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
        day:'',
        city:'',
        hostel:'',
        single_pax:'',
        single_price:'',
        twin_pax:'',
        twin_price:'',
        triple_pax:'',
        triple_price:'',
        total_pax:'',
        total_price:''
      })

      alert("Value Submitted")
  }

  editField()
  {
  // var textCount=document.getElementsByClassName("text").length;
  // for(let i=0 ;i<textCount;i++)
  // {
  // document.getElementsByClassName("text")[i].disabled=false;
  // }
  }

// componentDidMount()
// {
//     var textCount=document.getElementsByClassName("text").length;
//       for(let i=0 ;i<textCount;i++)
//       {
//       document.getElementsByClassName("text")[i].disabled=true;
//       }
// }


    render() {
      console.log(this.state.formOnedata)
        return (
       
    <div className="container-fluid">
    <div className="row trash-edit">
      <div className="col-2">
        <div className="rectangle">503401 - 01</div>
        <div className="rectangle-toggle">503401 - 02</div>
      </div>
      <div className="col-9"></div>
      <div className="col-1 edit" onClick={()=>{this.editField()}}>
        <img src="assets/images/edit-regular (1).svg"/>
        <img src="assets/images/trash-alt-solid (1).svg" />
      </div>
     
    </div>
    <form onSubmit={(e)=>{e.preventDefault();this.formOneSubmit()}}>
    <Row_Duration form_function={this.formHandler} form_field={this.state} />
    <div class="row" style={{margin: "1% 6%"}}>
        <div class="col-8"></div>
        <div class="col-2"><button class="btn-prim">Cancel</button></div>
        <div class="col-2"><input type="submit"  class="btn-sec"  value="Create"/></div>
      </div> 
    <div className="row brief" ><b>Pricing list for : 503401 - 01</b>
    </div>
    <div className="row hr"></div>
    <div className="row hotel">
      <div style={{padding:"0% 8%",lineHeight:"50px",width: "100%"}}>
        <div className="flex">
          <div className="hotel-left-up" > <img src="assets/images/bed-solid.svg" /><span><b> Hotels</b></span></div>
          <div className="hotel-right-up"> <img src="assets/images/angle-up-solid.svg" /></div>
        </div>
      </div>
    </div>
    <div className="row acc-table">
      <table className="col-12">
        <thead className="parent">
          <tr>
            <td rowspan="2" width="160px">Day</td>
            <td rowspan="2" width="160px">City</td>
            <td rowspan="2" width="160px">Hostel</td>
            <td colspan="2" style={{textAlign:"center",borderBottom:"1px solid #cec6c6"}}>SINGLE</td>
            <td colspan="2" style={{textAlign:"center",borderBottom:"1px solid #cec6c6"}}>TWIN</td>
            <td colspan="2" style={{textAlign:"center",borderBottom:"1px solid #cec6c6"}}>TRIPLE</td>
            <td colspan="2" style={{textAlign:"center",borderBottom:"1px solid #cec6c6"}}>TOTAL</td>
          </tr>
          <tr>
            <td>Pax</td>
            <td>Price</td>
            <td>Pax</td>
            <td>Price</td>
            <td>Pax</td>
            <td>Price</td>
            <td>Pax</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td><input type="text" className="text-field" name="day" onChange={(e) =>this.formHandler(e)} required value={this.state.day}/></td>
            <td><input type="text" className="text-field" name="city" onChange={(e) =>this.formHandler(e)} required value={this.state.city}/></td>
            <td><input type="text" className="text-field" name="hostel" onChange={(e) =>this.formHandler(e)} required value={this.state.hostel}/></td>
            <td><input type="text" className="text-field" name="single_pax" onChange={(e) =>this.formHandler(e)} required value={this.state.single_pax}/></td>
            <td><input type="text" className="text-field" name="single_price" onChange={(e) =>this.formHandler(e)} required value={this.state.single_price}/></td>
            <td><input type="text" className="text-field" name="twin_pax" onChange={(e) =>this.formHandler(e)} required value={this.state.twin_pax}/></td>
            <td><input type="text" className="text-field" name="twin_price" onChange={(e) =>this.formHandler(e)} required value={this.state.twin_price}/></td>
            <td><input type="text" className="text-field" name="triple_pax" onChange={(e) =>this.formHandler(e)} required value={this.state.triple_pax}/></td>
            <td><input type="text" className="text-field" name="triple_price" onChange={(e) =>this.formHandler(e)} required value={this.state.triple_price} /></td>
            <td><input type="text" className="text-field" name="total_pax" onChange={(e) =>this.formHandler(e)} required value={this.state.total_pax}/></td>
            <td><input type="text" className="text-field" name="total_price" onChange={(e) =>this.formHandler(e)} required value={this.state.total_price}/></td>
          </tr>    
          <tr>
            <td></td>
            <td>Porterage</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>SUB TOTAL</td>
            <td></td>
            <td></td>
            <td>
              <div className="footer-textbox"></div>
            </td>
            <td></td>
            <td>
              <div className="footer-textbox"></div>
            </td>
            <td></td>
            <td>
              <div className="footer-textbox"></div>
            </td>
            <td></td>
            <td>
              <div className="footer-textbox"></div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div></form>
    <div className="row" style={{margin:"0% 6%"}}>
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">

      
      {accordian.map((value,index)=>{

        return(
          <div>
          <div className={value.classname} role="tab" id={value.id}>
            <h4 className="panel-title flex">
              <div className="left-img">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href={value.href}
                  aria-expanded="true" aria-controls={value.ariacontrols}>
                  <img src={value.icon}/><span>{value.name}</span>
                </a>
              </div>
              <div className="down"><a role="button" data-toggle="collapse" data-parent="#accordion"
                  href={value.href} aria-expanded="true" aria-controls={value.ariacontrols}>
                  <img src="assets/images/down.svg" />
                </a></div>
            </h4>
          </div>
          <div id={value.ariacontrols} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={value.id}>
            <div className="panel-body">{value.body}</div>
          </div>
          </div>

         ) 
        }
      )}
          <div className="footer flex">
              <div>
                <p>Packages</p>
              </div>
              <div><img src="assets/images/down-white.svg" width="15px" height="15px" /></div>
            </div>
        </div>

     

    

      </div>
    </div>
  </div>
           
        )
    }
}
