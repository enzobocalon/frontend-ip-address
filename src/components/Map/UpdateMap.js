import React, { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const UpdateMap = ({coords}) => {
    const map = useMap();
    useEffect(() => {
        map.setView(coords)
    }, [map, coords])
  return (
    <>
    </>
  )
}

export default UpdateMap