import React from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapTest.css';
import axios from 'axios';
import MapSportPlaceMarkerLayer from './MapSportPlaceMarkerLayer';

const myIcon = L.icon({
  iconUrl: 'https://image.noelshack.com/fichiers/2019/44/3/1572430557-logomap.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});

class MapTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMarkers: '',
      location: {
        lat: '',
        lng: ''
      },
      haveUsersLocation: false,
      zoom: 2
    };
    this.getSportPlaces = this.getSportPlaces.bind(this);
    this.askGeolocation = this.askGeolocation.bind(this);
  }

  componentDidMount() {
    this.askGeolocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.geometryInput !== this.props.geometryInput) {
      this.getSportPlaces();
    }
  }

  getSportPlaces() {
    axios
      .get('https://sportplaces.api.decathlon.com/api/v1/places?', {
        params: {
          origin: this.props.geometryInput,
          radius: 200,
          sports: ''
        }
      })
      .then(response => response.data.data.features)
      .then(data => {
        this.setState({
          dataMarkers: data
        });
      });
  }

  askGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
        zoom: 13
      });
    });
  }

  render() {
    const position = [this.state.location.lat, this.state.location.lng];
    const isUserLocation = this.state.haveUsersLocation;
    const finalZoom = isUserLocation ? this.state.zoom : this.props.zoomCity;
    const finalCenter = isUserLocation ? position : this.props.cityCenter;
    return (
      <div className="map-container">
        <Map className="map" zoom={finalZoom} center={finalCenter}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.haveUsersLocation ? (
            <Marker position={position} icon={myIcon}>
              <Popup>Vous êtes ici.</Popup>
            </Marker>
          ) : (
            ''
          )}
          {this.state.dataMarkers && (
            <MapSportPlaceMarkerLayer dataMarkers={this.state.dataMarkers} />
          )}
        </Map>
      </div>
    );
  }
}

export default MapTest;
