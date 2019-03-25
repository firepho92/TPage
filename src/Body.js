import React, { Component } from 'react';
import Welcome from './Welcome';
import Loading from './Loading';
import Statistics from './Statistics';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// eslint-disable-next-line
import MomentLocaleUtils, {formatDate, parseDate} from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

import axios from 'axios';


class Body extends Component {
  constructor() {
    super();
    this.state = {
      flag: 0,
      date: null,
      data: [],
      fData: [],
      hour: 0,
      msg: 'Bienvenido, selecciona un momento'
    }
  }

  componentDidMount() {
    axios.get('http://192.168.0.21:8000/cliente')
    .then((response) => {
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }

  promediarPorMinuto = (dataSet) => {
    let prom = 0;
    let nDataSet = [];
    for(let i = 0; i < dataSet.length; i++) {
      if((i + 1) % 60 === 0) {
        prom = prom / 60;
        prom = prom.toFixed(2);
        nDataSet.push({numero: i, temperatura: prom});
        prom = 0;
      } else {
        prom += dataSet[i].temperatura;
      }
    }
    this.setState({
      fData: nDataSet,
      title: 'Mostrando promedio de T por minuto'
    });
    return nDataSet;
  }

  handleClick = () => {
    console.log(this.state.data)
    console.log(this.state.date)
    console.log(this.state.hour)
    let dataset = [];
    if(this.state.date === null) {
      this.setState({
        msg: 'Selecciona una fecha.'
      });
    } else {
      // eslint-disable-next-line
      this.state.data.map(item => {
        let date = new Date(item.fecha);
        // eslint-disable-next-line
        if(date.getFullYear() === this.state.date.getFullYear() && date.getMonth() === this.state.date.getMonth() && date.getDate() === this.state.date.getDate() && date.getHours() == this.state.hour) {
          dataset.push(item);
        }
      });
    }
    if(dataset.length === 0) {
      this.setState({
        msg: 'No se encontraron elementos que coincidan con el criterio de búsqueda.'
      });
      return false;
    } else {
      console.log(dataset);
      this.promediarPorMinuto(dataset);
      this.setState({
        flag: 1
      });
      return true;
    }
  }

  handleHourChange = (e) => {
    this.setState({
      hour: e.target.value
    })
  }

  handleDayChange = (date) => {
    this.setState({
      date: date
    })
  }

  render() {
    return (
      <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="fila">
          <div className="columna">
            <div style={{flex: 1}}>
              <div className="columna">
                <label htmlFor="year">Fecha:</label>
                <DayPickerInput format="LL" formatDate={formatDate} parseDate={parseDate} onDayChange={date => this.handleDayChange(date)} />
              </div>
            </div>
            <div style={{flex: 1}}>
              <div className="columna">
                <div className="columna">
                  <label htmlFor="hour">Hora:</label>
                  <input style={{flex: 1}} type="number" id="hour" name="hour" min="0" max="23" value={this.state.value} onChange={this.handleHourChange} />
                </div>
              </div>
            </div>
            <div style={{flex: 1}}>
              <button type="button" className="btn btn-primary button-1" onClick={this.handleClick}>Aceptar</button>
            </div>
          </div>
        </div>
        <div className="main">
          {this.state.flag === 0 ? <Welcome msg={this.state.msg}/> : null}
          {this.state.flag === 1 && this.state.fData.length === 0 ? <Loading/> : null }
          {this.state.flag === 1 && this.state.fData.length !== 0 ? <Statistics data={this.state.fData} title={this.state.title}/> : null }
        </div>
      </div>
    );
  }
}

export default Body;
