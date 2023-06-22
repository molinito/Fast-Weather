import React from "react";
import "../../src/assets/css/App.css";

const Cards = ({ loadingData, showData, weather, forecast }) => {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
  var date = day + "/" + month + "/" + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    // if(loadingData){
    //    return  <Spinner />;
    
  if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        // definir forecast cada 24 horas

       
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">
      {showData === true ? (
        <div className="container-card ">
          <div className="card mb-3 mx-auto" style={{ opacity: 0.7, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%' }}
>
            <div className="row g-5 ">
              <div className="row-md-4 p-4">
                <h3
                  className="card-title"
                  style={{ color: "yellow", fontWeight: "bold", fontSize: '24px'}}
                >
                  {weather.name}
                </h3>
                <p
                  className="card-date"
                  style={{ color: "yellow", fontWeight: "bold" }}
                >
                  {date}
                </p>
                <h1
                  className="card-temp"
                  style={{ color: "yellow", fontWeight: "bold" }}
                >
                  {(weather.main.temp - 273.15).toFixed(1)}ºC
                </h1>
                <p
                  className="card-desc"
                  style={{ color: "yellow", fontWeight: "bold" }}
                >
                  <img src={iconUrl} alt="icon" style={{ width: '72px', height: '72px' }} />
                  {weather.weather[0].description}
                </p>
                                </div>
              <div className="row-md-8 m-0">
                <div className="card-body text-wrap mt-0">
                  <h5
                    className="card-text"
                    style={{ color: "yellow", fontWeight: "bold" }}
                  >
                    Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5
                    className="card-text"
                    style={{ color: "yellow", fontWeight: "bold" }}
                  >
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5
                    className="card-text"
                    style={{ color: "yellow", fontWeight: "bold" }}
                  >
                    Sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5
                    className="card-text"
                    style={{ color: "yellow", fontWeight: "bold" }}
                  >
                    Humedad: {weather.main.humidity}%
                  </h5>
                  <h5
                    className="card-text"
                    style={{ color: "yellow", fontWeight: "bold" }}
                  >
                    Velocidad del viento: {weather.wind.speed}m/s
                  </h5>
                                    </div>
                <br />
              
                <div
                  className="row mt-4 p-3"
                  style={{ color: "yellow", fontWeight: "bold" }}
                >
                                        <div className="col ">
                                           <p>{forecastDate3}h</p>
                    <p
                      className="description"
                      style={{ color: "yellow", fontWeight: "bold" }}
                    >
                      <img src={iconUrl3} alt="icon" style={{ width: '72px', height: '72px' }}/>
                      {forecast.list[1].weather[0].description}
                    </p>
                    <p
                      className="temp"
                      style={{ color: "yellow", fontWeight: "bold" }}
                    >
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}h </p>
                    <p
                      className="description"
                      style={{ color: "yellow", fontWeight: "bold" }}
                    >
                      <img src={iconUrl6} alt="icon" style={{ width: '72px', height: '72px' }}/>
                      {forecast.list[2].weather[0].description}
                    </p>
                    <p
                      className="temp"
                      style={{ color: "yellow", fontWeight: "bold" }}
                    >
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}h</p>
                    <p
                      className="description"
                      style={{ color: "yellow", fontWeight: "bold" }}
                    >
                      <img src={iconUrl9} alt="icon" style={{ width: '72px', height: '72px' }} />
                      {forecast.list[3].weather[0].description}
                    </p>
                    <p
                      className="temp"
                      style={{ color: "yellow", fontWeight: "bold" }}
                    >
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
      ) : (
        <h2 className="text-danger">Introduce la Ciudad</h2>
      )}
    </div>
    );
}; 
export default Cards;

