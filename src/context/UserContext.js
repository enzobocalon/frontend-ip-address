import React, { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {

  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone ] = useState('');
  const [isp, setIsp] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const provider = {
    ipData: [ip, setIp],
    locationData: [location, setLocation],
    timezoneData: [timezone, setTimezone],
    ispData: [isp, setIsp],
    latitudeData: [latitude, setLatitude],
    longitudeData: [longitude, setLongitude]
  }

  return (
    <UserContext.Provider value={provider}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider