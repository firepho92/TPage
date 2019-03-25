import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class SeleccionarFecha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    console.log(date.getFullYear())
    this.setState({
      startDate: date
    });
  }
  
  render() {
    return (
      <div className="Form">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SeleccionarFecha;