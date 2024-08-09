import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './assets/logo.jpeg';
import { Grid } from '@mui/material';
import Boundary from './Boundary';
import Checkin from './Checkin';
import EventView from "./EventView";
import Map from "./Map";


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <img src={logo} className="App-logo" alt="logo" />
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <h1>PegaWORLD Design Track</h1>
            </Grid>
          </Grid>
        </header>
      </div>

      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="checkin" element={<Checkin />} />
            <Route index path="eventview" element={<EventView />} />
            <Route path="map" element={<Map />} />
            <Route path="*" element={<Boundary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
