import React, {useState, useContext} from 'react'
import './Map.css'

import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import { UserContext } from '../../context/UserContext'
import { getData } from '../../services/api'



const Map = () => {

  const position = [51.505, -0.09]

  const {ipData, locationData, timezoneData, ispData} = useContext(UserContext)
  const [ip, setIP] = ipData;
  const [location, setLocation] = locationData
  const [timezone, setTimezone] = timezoneData
  const [isp, setIsp] = ispData

  return (
    <>
        <div className='col-1'>
            <div className='info-container'>
              <div className='info-row'>
                  <div className='info-col'>
                      <span>IP ADDRESS</span>
                      <span className='main-content'>{ip}</span>
                  </div>
                  <div className='info-col'>
                      <span>LOCATION</span>
                      <span className='main-content'>{location}</span>
                  </div>
                  <div className='info-col'>
                      <span>TIMEZONE</span>
                      <span className='main-content'>{timezone}</span>
                  </div>
                  <div className='info-col'>
                      <span>ISP</span>
                      <span className='main-content'>{isp}</span>
                  </div>
              </div>
            </div>
            <div className='map'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
          </MapContainer>
            </div>
        </div>
    </>
  )
}

export default Map