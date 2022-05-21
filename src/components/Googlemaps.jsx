import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import Reigster from "../images/wpforms-brands.svg";
import Flag from "../images/font-awesome-flag-brands.svg";
import { useState } from "react";

const mapContainerStyle = {
  width: "100vw",
  height: "100%",
};

const center = {
  lat: 54.71497,
  lng: -1.50254,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const GoogleMaps = () => {
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";
  return (
    <div id="location">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        options={options}
      >
        <Marker
          position={{ lat: 54.715492, lng: -1.508682 }}
          icon={{
            url: Reigster,
            scaledSize: new window.google.maps.Size(30, 30),
            anchor: new window.google.maps.Point(15, 15),
            origin: new window.google.maps.Point(0, 0),
          }}
          onClick={() => {
            setSelected({ marker: "form", lat: 54.715492, lng: -1.508682 });
          }}
        />
        <Marker
          position={{ lat: 54.716777, lng: -1.49005 }}
          icon={{
            url: Flag,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
          onClick={(event) => {
            setSelected({ marker: "flag", lat: 54.716777, lng: -1.49005 });
          }}
        />

        {/* {selected ? ( */}
        <InfoWindow position={{ lat: 54.715492, lng: -1.508682 }}>
          <div>
            <h2>Registration</h2>

            <p>
              8:30am Registrations Open <br />
              9:30am Registrations Close <br />
              10am Race Starts
            </p>
          </div>
        </InfoWindow>
        <InfoWindow position={{ lat: 54.716777, lng: -1.49005 }}>
          <div>
            <h2>Starting Position</h2>
          </div>
        </InfoWindow>
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
