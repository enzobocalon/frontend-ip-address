import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { getData } from '../../services/api'
import './Header.css'

const Header = () => {

  const {ipData, locationData, timezoneData, ispData, latitudeData, longitudeData} = useContext(UserContext)
  const [ip, setIP] = ipData;
  const [location, setLocation] = locationData
  const [timezone, setTimezone] = timezoneData
  const [isp, setIsp] = ispData
  const [latitude, setLatitude] = latitudeData
  const [longitude, setLongitude] = longitudeData

  const [input, setInput] = useState('')

  const validIP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const handleClick = () => {
    if (input.match(validIP)) {
      getData(input).then(
        (response) => { 
          setIP(response.ip_address)
          setLocation(`${response.city}, ${response.country}`)
          setTimezone(`UTC ${response.timezone.abbreviation}:00`)
          setIsp(response.connection.isp_name)
          setLatitude(response.latitude)
          setLongitude(response.longitude) 
        }
      )
    }
    else if (!input.match(validIP) && input !== ''){
      console.log('asd')
    }
    else {
      getData('').then((response) => {
        setIP(response.ip_address)
        setLocation(`${response.city}, ${response.country}`)
        setTimezone(`UTC ${response.timezone.abbreviation}:00`)
        setIsp(response.connection.isp_name)
        setLatitude(response.latitude)
        setLongitude(response.longitude)
      })
    }

  }

  useEffect(() => {
    getData('').then((response) => {
      setIP(response.ip_address)
      setLocation(`${response.city}, ${response.country}`)
      setTimezone(`UTC ${response.timezone.abbreviation}:00`)
      setIsp(response.connection.isp_name)
      setLatitude(response.latitude)
      setLongitude(response.longitude)
    })
  }, [])

  return (
    <header>
        <div className='header-row-1'>
            <span>IP Address Tracker</span>
        </div>
        <div className='header-row-2'>
            <input onChange = {(e) => {setInput(e.target.value)}} placeholder='Search for any IP address or domain'/>
            <div className='row-2-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" id='search-arrow' onClick = {handleClick}>
                  <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/>
              </svg>
            </div>
        </div>
    </header>
  )
}

export default Header