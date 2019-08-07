import React, { Component } from 'react'

export default class TableQuotation extends Component {
    render() {
        return (
            <div className="row duration-table-manager-quotation" >
            <table className="col-12" >
              <thead>
                <tr className="table-row1">
                  <td width="210px">Validity</td>
                  <td width="153px">Same Day Arrival  </td>
                  <td width="153px">Master</td>
                  <td colSpan="6">Description</td>

                </tr>
              </thead>
              <tbody>
                <tr className="table-row2">
                  <td><input type="text" name="Validity" placeholder="Validity" onChange={(e) => this.props.form_function(e)} required value={this.props.form_field.Validity}></input></td>

                  <td>
                    <select className="browser-default custom-select " name="SameDateArrival" required onChange={(e) => this.props.form_function(e)} value={this.props.form_field.SameDateArrival}>
                      <option selected>Choose</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select> 
                  </td>
                  <td >
                    <select className="browser-default custom-select " name="Master" required onChange={(e) => this.props.form_function(e)} value={this.props.form_field.Master}>
                      <option selected>Choose</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </td>
                  <td colSpan="6" width="450px">
                    <textarea placeholder="Provide detailed description here" name="Description" required onChange={(e) => this.props.form_function(e)} value={this.props.form_field.Description}></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}
