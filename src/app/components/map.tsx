'use client'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import wa from '../../data/washington.json';
import FetchCSVData from './fetchdata';

export default function Map() {

    const icon = L.icon({ iconUrl: '/marker-icon.png' });
    const clinics = FetchCSVData();
    const renderMarkers = (clinic: { [key: string]: any }, index: number) => {
        const { name, latitude, longitude, address, website, phone, email, hours, services, apptlink } = clinic;
        return (
            <Marker key={name} icon={icon} position={[latitude, longitude]}>
                <Popup>
                    <div className='popup'>
                        <a href={website} className='info-header'>{name}</a>
                        {address}

                        <br/><br/>
                        <div className='info-header'>Phone:</div> {phone}<br/>
                        <div className='info-header'>Email:</div> {email}

                        <br/><br/>

                        <div className='info-header'>Hours:</div> {hours}
                        <h4>Services</h4>
                        <div className='services'>
                            <ul>
                                {services.map((word: string, index: number) => (
                                    <li key={index}>{word}</li>
                                ))}
                            </ul>
                        </div>
                        <a href={apptlink} className='blue-button'>Schedule an Appointment</a>
                    </div>
                </Popup>
            </Marker>
        );
    };

    return (

        <MapContainer
            center={[47.6061, -122.3328]}
            zoom={13}
            minZoom={5}
            style={{ width: '100%', height: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            />
            <GeoJSON data={wa} style={{fillColor: 'transparent'}}/>

            {clinics.map(renderMarkers)}
        </MapContainer>
   
    );
}