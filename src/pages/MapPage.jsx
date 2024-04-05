import { icon, point } from 'leaflet';
import "/src/App.css";
import "leaflet/dist/leaflet.css";

import NavBar from "../components/Navbar.jsx";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

const MapPage = () => { 
    const markers = [
        {
            geocode : [43.6577, -79.3788],
            popUp: "Toronto Metroplitan University"
        },
        {
            geocode : [43.6585, -79.3801],
            popUp: "Kerr Hall"
        },
        {
            geocode : [43.6577, -79.3773],
            popUp: "George Vari Engineering Building"
        },
        {
            geocode : [43.6544, -79.3807],
            popUp: "Eaton Centre"
        },
        {
            geocode : [43.65926, -79.377862],
            popUp: "Architecture Building"
        },
        {
            geocode : [43.6572, -79.3778],
            popUp: "Daphne Cockwell Complex "
        }, 
        {
            geocode : [43.662222, -79.380278],
            popUp: "Maple Leaf Gardens"
        }, 
        {
            geocode : [43.656111, -79.380278],
            popUp: "Yonge and Dundas Square"
        }, 
        {
            geocode : [43.6546, -79.3748],
            popUp: "Ted Rogers School of Management"
        },
        {
            geocode : [43.6586, -79.3771],
            popUp: "Rogers Communication Centre"
        }, 
 



    ];

    const customIcon = new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38]
    });

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({ 
            html: `<div class="cluster-icon"> ${cluster.getChildCount()}</div>`,
            className: 'custom-marker-cluster',
            iconSize: point(33, 33, true)
        });
    };

    return (
        <div>
            <NavBar />
            <MapContainer center={[43.651070, -79.347015]} zoom={13}>
                <TileLayer
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                    showCoverageOnHover={true}
                >
                    {markers.map((marker, idx) => (
                        <Marker key={idx} position={marker.geocode} icon={customIcon}>
                            <Popup>
                                {marker.popUp}
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}; 

export default MapPage;
