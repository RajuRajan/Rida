import React, { Component } from 'react';
import './Pricing.css';

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
    <div className="row duration-table" >
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
            <td width="219px"><input type="text" className="text" placeholder="Agent" name="Agent" onChange={(e) =>this.formHandler(e)} required value={this.state.Agent}/></td>
            <td width="153px"><input type="text" className="text" placeholder="PIC" name="PIC" onChange={(e) =>this.formHandler(e)} required value={this.state.PIC}/></td>
            <td width="131px">
              <select className="browser-default custom-select text " name="Duration" onChange={(e) =>this.formHandler(e)} required value={this.state.Duration}>
                <option selected>10 days</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px" >
              <select className="browser-default custom-select text " name="Pattern1" onChange={(e) =>this.formHandler(e)}required value={this.state.Pattern1} >
                <option selected>DE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text " name="Pattern2" onChange={(e) =>this.formHandler(e)} required value={this.state.Pattern2}>
                <option selected>SUM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text " name="Start" onChange={(e) =>this.formHandler(e)} required value={this.state.Start}>
                <option selected>FRA</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text " name="End" onChange={(e) =>this.formHandler(e)} required value={this.state.End }>
                <option selected>BER</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="111px"><input type="text" className="text" placeholder="Departure" name="Departure" onChange={(e) =>this.formHandler(e)} required value={this.state.Departure}/></td>
            <td width="111px"><input type="text" className="text" placeholder="Quoter" name="Quoter" onChange={(e) =>this.formHandler(e)} required value={this.state.Quoter}/></td>
          </tr>
        </tbody>
      </table>
    </div>
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
          <div className="panel-heading even" role="tab" id="headingOne">
            <h4 className="panel-title flex">
              <div className="left-img">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  <img src="assets/images/badge.svg"/><span>FOC</span>
                </a>
              </div>
              <div className="down"><a role="button" data-toggle="collapse" data-parent="#accordion"
                  href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <img src="assets/images/down.svg" />
                </a></div>
            </h4>
          </div>
          <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
              quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
              them accusamus labore sustainable VHS.</div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading " role="tab" id="headingTwo">
            <h4 className="panel-title flex">
              <div className="left-img">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                  href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <img src="assets/images/bus-solid.svg" /> <span>Coaches</span>
                </a></div>
              <div className="down"><a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                  href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <img src="assets/images/down.svg" />
                </a></div>
            </h4>
          </div>
          <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
              quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
              heard of them accusamus labore sustainable VHS.</div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading even" role="tab" id="headingThree">
            <h4 className="panel-title flex">
              <div className="left-img">
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                  href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <img src="assets/images/user.svg" /><span> Guides</span>
                </a></div>
              <div className="down"> <a className="collapsed" role="button" data-toggle="collapse"
                  data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  <img src="assets/images/down.svg" />
                </a></div>
            </h4>
          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
              quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
              them accusamus labore sustainable VHS.</div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading " role="tab" id="headingFour">
            <h4 className="panel-title flex">
              <div className="left-img"> <a className="collapsed" role="button" data-toggle="collapse"
                  data-parent="#accordion" href="#collapseFour" aria-expanded="false"
                  aria-controls="collapseFour">
                  <img src="assets/images/meal.svg" /><span> Meals</span>
                </a></div>
              <div className="down"><a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                  href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <img src="assets/images/down.svg" />
                </a></div>
            </h4>
          </div>
          <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
            <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
              richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
              quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
              occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
              them accusamus labore sustainable VHS.</div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading even" role="tab" id="headingFive">
              <h4 className="panel-title flex">
                <div className="left-img"><a className="collapsed" role="button" data-toggle="collapse"
                    data-parent="#accordion" href="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">
                    <img src="assets/images/building.svg" /><span> Entrance</span>
                  </a></div>
                <div className="down"><a className="collapsed" role="button" data-toggle="collapse"
                    data-parent="#accordion" href="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">
                    <img src="assets/images/down.svg" />
                  </a></div>
              </h4>
            </div>
            <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFives">
              <div className="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.</div>
            </div>

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
  </div>
           
        )
    }
}
