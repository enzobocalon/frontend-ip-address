import React, {useContext} from 'react'
import './Map.css'

import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon_marker from '../../img/icon-location.svg'

import { UserContext } from '../../context/UserContext'
import UpdateMap from './UpdateMap'

import L from 'leaflet'


const Map = () => {
  const {ipData, locationData, timezoneData, ispData, latitudeData, longitudeData} = useContext(UserContext)
  const [ip, setIP] = ipData;
  const [location, setLocation] = locationData
  const [timezone, setTimezone] = timezoneData
  const [isp, setIsp] = ispData
  const [latitude, setLatitude] = latitudeData
  const [longitude, setLongitude] = longitudeData

  const icon = new L.icon({
    iconUrl: icon_marker,
    iconRetinaUrl: icon_marker,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 60),
    className: 'leaflet-div-icon'
  })

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
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]} icon={icon}/>
              <UpdateMap coords={[latitude, longitude]}/>
          </MapContainer>
            </div>
        </div>
    </>
  )
}

export default Map