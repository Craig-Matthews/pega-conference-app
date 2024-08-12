import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Grid } from '@mui/material';
import { Link } from "react-router-dom";

const Map = () => {
    const position = [28.3605, -81.5101]

    return <>
        <Link className="backButton" role="button" to="/">Back to events</Link>
        <div className="mapContainer">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={10} lg={12}>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "80vh", width: "100%" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Marriot Orlando
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Grid>
            </Grid>
        </div>
    </>
}

export default Map;