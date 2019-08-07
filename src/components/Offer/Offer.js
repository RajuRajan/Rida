import React, { Component } from 'react';
import './Offer.css';
import {Terms} from'./TermsData/Terms'

export default class Offer extends Component {
constructor()
{
  super();
    this.state={
      print_agent:false,
      print_holiday:false,
      print_picture:false,
      itinerary_summary:false,
      trade_fair_list:false,
      parking_fees_included:false,
      drivers_meal:false   
    }
    
 } 

    check=(e)=>
    {
     
     if(e.target.checked)
     {
       this.setState({[e.target.name]:true})
     } 
     else{
      this.setState({[e.target.name]:false})
     }
     
     
    }
    render() {
      console.log(this.state)
        return (
            <div>
                
  <div class="container-fluid">

<div class="term-field"><input type="text" name="offer-textfield" /></div>

<div class="row brief-tour" ><b>Tour reference : test name</b></div>

<div class="term-header"><b>Terms</b></div>


<div class="term-body">
  {Terms.map((value,index)=>{
    return(
      <label class="container">{value.name}
      <input type="checkbox"  onChange={(e)=>{this.check(e)}}/>
      <span class="checkmark"></span>
    </label>
  
  )}
    )}
  
</div>
<div class="row offer-btn" >
<div class="col-3"></div>
<div class="col-3"><button class="btn-sec-1">Preview</button></div>
<div class="col-3"><button class="btn-sec-2">Download Quotation</button></div>
<div class="col-3"><button class="btn-sec-2">Generate Quotation</button></div>

</div>


</div>
            </div>
        )
    }
}
