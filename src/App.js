import './App.css';
// import TempApp from './Components/TempApp';
import { useEffect, useState } from "react";
import axios from 'axios';
import Tilt from 'react-vanilla-tilt';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("delhi")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=23ab4556fbc924fd61518f51294a11bf`

  useEffect(() => {
      axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
      })
  }, [location,url])
  return (
    <div className="App">
      <Tilt style={{background:'transparent'}}>
            <div className="box-container">
                <div className="box">
                    <div className="inputData">
                        <input type="search" className="inputField" onChange={(event) => {setLocation(event.target.value)}} placeholder='Enter Location' style={{textAlign:'center'}}></input>
                    </div>

                    {!data.main?(
                        <h1>ERROR</h1>
                    ):(
                        <div className="parent">
                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <div className="info"></div>
                            <div className="info-contents">
                                <div className="icon-name">
                                    <h1>{data.name}</h1>
                                    {/* <h3>{data.weather[0].main}</h3> */}
                                </div>
                                <div className="temperature">
                                    <h1 className="temp">{data.main.temp.toFixed()}°C</h1>
                                    <div>
                                        <small>Min : {data.main.temp_min.toFixed()}°C</small> |
                                        <small> Max : {data.main.temp_max.toFixed()}°C</small>
                                    </div>
                                </div>
                                <div className="weather">
                                    <div className="sin-weather">
                                        <t>Pressure</t>
                                        <small>{data.main.pressure}</small>
                                    </div>
                                    <div className="sin-weather">
                                        <t>Humidity</t>
                                        <small>{data.main.humidity}</small>
                                    </div>
                                    <div className="sin-weather sin-3">
                                        <t>Wind Speed</t>
                                        <small>{data.wind.speed.toFixed()}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/faviconx/1.0.1/faviconx-min.js" integrity="sha512-3kfyqP98yizPZDXvUcMJWLIVUWT7THRf7TC0Aw//CJiNlL0ZZR6KVU305WEWD4YD9yCc8cEDEzKW/PHuYeBvaw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                </div>
            </div>
      </Tilt>
    </div>
  );
}

export default App;
