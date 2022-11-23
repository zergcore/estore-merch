import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBndOlSy6rwWzz9vr_l588ZJwD75xbKYJo"
      })

    const containerStyle = {
        width: '100%',
        height: '50vh'
      };
      
    const defaultCenter = {
        lat: 10.063611,
        lng: -69.334724
      };
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(
        function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(defaultCenter);
            map.fitBounds(bounds);
            setMap(map)
        }, [])
    
    const onUnmount = React.useCallback(
        function callback(map) {
            setMap(null)
        }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
      ) : <>Here should be a map</>
}

export default React.memo(Map)