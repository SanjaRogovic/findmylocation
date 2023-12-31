import React, {useState} from "react"
import FetchIp from "./components/FetchIp"
import Map from './components/Map'
import Time from "./components/Time"
import Flag from "./components/Flag"
import Card from 'react-bootstrap/Card';
import './App.css'

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [countryData, setCountryData] = useState("");
  // console.log(lat, lng)

  return (
    <>
      <Card style={{width: "40rem"}}>
        <Card.Title>
          <FetchIp setLat={setLat} setLng={setLng} setCountryData={setCountryData}/>
        </Card.Title>  
        <Card.Text>
        <Time countryData={countryData}/>
        </Card.Text>     
        <Flag countryData={countryData} />  
        {lat !== 0 && lng !== 0 ? <Map lat={lat} lng={lng} /> : null}
       
      </Card>
    </>
  );
}

export default App
