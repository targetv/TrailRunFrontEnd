

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api';

import Reigster from "../images/wpforms-brands.svg";
import Flag from "../images/font-awesome-flag-brands.svg";
const mapContainerStyle = {
    width: '100vw',
    height: '100%',
}

const center = {
    lat: 54.714970,
    lng: -1.502540,
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    
   
}
function GoogleMaps(){

   
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    if (loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps"
    return(
        
      <div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center} options={options}><Marker position={{lat: 54.715492, lng: -1.508682}} icon={{ url: Reigster,  scaledSize: new window.google.maps.Size(30,30)} }/><Marker position={{lat: 54.716777, lng: -1.490050 }} icon={{
            url: Flag,
            scaledSize: new window.google.maps.Size(30,30)
        }}/></GoogleMap>  
        
      </div>  
    )
}

export default GoogleMaps