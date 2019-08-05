import React, { Component } from 'react';
import './Offer.css';

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
  <label class="container">Print agent T&C
      <input type="checkbox" name="print_agent"  onChange={(e)=>{this.check(e)}}/>
      <span class="checkmark"></span>
    </label>
    <label class="container">Print holidays/events
      <input type="checkbox" name="print_holiday" onChange={(e)=>{this.check(e)}}/>
      <span class="checkmark"></span>
    </label>
    <label class="container" name="print_picture">Print pictures
      <input type="checkbox" onChange={(e)=>{this.check(e)}} />
      <span class="checkmark"></span>
    </label>
    <label class="container">Itinerary summary
      <input type="checkbox" name="itinerary_summary"onChange={(e)=>{this.check(e)}}/>
      <span class="checkmark"></span>
    </label>
    <label class="container">Trade fair list
        <input type="checkbox" name="trade_fair_list"  onChange={(e)=>{this.check(e)}}/>
        <span class="checkmark"></span>
      </label>
      <label class="container">Parking Fees Included
          <input type="checkbox" name="parking_fees_included" onChange={(e)=>{this.check(e)}}/>
          <span class="checkmark"></span>
        </label>
        <label class="container">Driver’s Meal
            <input type="checkbox" name="drivers_meal"  onChange={(e)=>{this.check(e)}}/>
            <span class="checkmark"></span>
          </label>
  
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
