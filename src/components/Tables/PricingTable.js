import React, { Component } from 'react'

export default class PricingTable extends Component {
    render() {
        return (
            <div>
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
            <td><input type="text" className="text-field" name="day" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.day}/></td>
            <td><input type="text" className="text-field" name="city" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.city}/></td>
            <td><input type="text" className="text-field" name="hostel" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.hostel}/></td>
            <td><input type="text" className="text-field" name="single_pax" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.single_pax}/></td>
            <td><input type="text" className="text-field" name="single_price" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.single_price}/></td>
            <td><input type="text" className="text-field" name="twin_pax" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.twin_pax}/></td>
            <td><input type="text" className="text-field" name="twin_price" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.twin_price}/></td>
            <td><input type="text" className="text-field" name="triple_pax" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.triple_pax}/></td>
            <td><input type="text" className="text-field" name="triple_price" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.triple_price} /></td>
            <td><input type="text" className="text-field" name="total_pax" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.total_pax}/></td>
            <td><input type="text" className="text-field" name="total_price" onChange={(e) =>this.props.form_function(e)} required value={this.props.form_field.total_price}/></td>
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
    </div>
            </div>
        )
    }
}
