import React, { Component } from 'react';
import SeleccionarFecha from './DatePicker';
import Chart from './Chart';

import axios from 'axios';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/cliente')
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })

  }

  render() {
    return (
      <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="fila">
          <div className="columna">
            <div style={{flex: 1}}>
              <SeleccionarFecha/>
            </div>
            <div style={{flex: 1}}>
              <div className="columna">
                <div className="columna">
                  <label htmlFor="hour" style={{flex: 1}}>Hora:</label>
                  <input style={{flex: 1}} type="number" id="hour" name="hour" min="0" max="23" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="chart">
          <div style={{flex: 1}}>
            <Chart/>
          </div>
        </div>
        <div className="columna">
        <span className="pulse"></span>
          Promedio: 12 C°
          Máx.: 12
          Mín.: 12
        </div>
      </div>
    );
  }
}

export default Body;
