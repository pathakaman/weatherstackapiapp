import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const CurrentData = () => {
    const history=useHistory();
  const [name, setName] = useState([]);
  const [cData, setCdata] = useState([]);
  const [hData, setHdata] = useState([]);

  const inputEvent = (event) => {
    setName(event.target.value);
  }
  const fetchCurrentData = async () => {
    try {
      const res = await fetch(`http://api.weatherstack.com/current?access_key=f32fc781c5ec536022f4a148b60d1628&query=${name}`);
      const result = await res.json();
      setCdata(result.current.temperature);
      console.log(result.current.temperature);
    } catch (error) {
      console.log(error);
    }
  }
  const getCurrentData = (event) => {
    event.preventDefault();
    fetchCurrentData();
  }

  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(`http://api.weatherstack.com/current?access_key=f32fc781c5ec536022f4a148b60d1628&query=${name}`);
      const result = await res.json();
      setHdata(result.current.temperature);
      console.log(result.current.temperature);
    } catch (error) {
      console.log(error);
    }
  }
  
  const getHistoricalData = (event) => {
    event.preventDefault();
    fetchHistoricalData();
    history.push({pathname: '/historical',countryName:name ,hTemp:hData});
    
  }
  return (
    <>
      <h1 className='text-center'>Current Weather Report</h1>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-sm-12 col-xs-12">
            <div className="card text-white">
              <div className="div1 p-4 p-md-5 ">
                <h5>{name}</h5>
                <h1>{cData}<sup>&deg;C </sup> </h1>
              </div>
              <div className="div2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box_container">
        <form>
          <div className="mb-3">
            <input
              type="text"
              name="weatherinput"
              value={name}
              onChange={inputEvent}
              placeholder='Type Something Here'
              className="form-control input_field"
              id="input_example"
            />
          </div>
          <button
            type="submit"
            onClick={getCurrentData}
            className="btn btn-warning">
            Current
          </button>
          <span className="ml-5">
            <button
              type="submit"
              onClick={getHistoricalData}
              className="btn btn-warning">
              Historical
            </button>
          </span>
        </form>
      </div>
    </>
  );
}
export default CurrentData;
