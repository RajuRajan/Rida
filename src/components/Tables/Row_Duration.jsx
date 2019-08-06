import React from 'react';


class Row_Duration extends React.Component{
  constructor(props){
    super(props)
  }
  render()
  {
    
  return(
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
          <tr classNameName="table-row2">
            <td width="219px"><input type="text"  className="text" placeholder="Agent" name="Agent" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Agent}/></td>
            <td width="153px"><input type="text" className="text" placeholder="PIC" name="PIC" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.PIC}/></td>
            <td width="131px">
              <select className="browser-default custom-select text" name="Duration" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Duration}>
                <option selected>10 days</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px" >
              <select className="browser-default custom-select text" name="Pattern1" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Pattern1}>
                <option selected>DE</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text" name="Pattern2" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Pattern2}>
                <option selected>SUM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text" name="Start" required  onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Start}>
                <option selected>FRA</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="131px">
              <select className="browser-default custom-select text" name="End" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.End}>
                <option selected>BER</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </td>
            <td width="111px"><input type="text" className="text" placeholder="Departure" name="Departure" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Departure}/></td>
            <td width="111px"><input type="text" className="text" placeholder="Quoter" name="Quoter" required onChange={(e) =>this.props.form_function(e)} value={this.props.form_field.Quoter}/></td>
          </tr>
        </tbody>
      </table>
    </div>
)
  }
}
export default Row_Duration