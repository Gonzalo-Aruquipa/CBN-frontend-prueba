import { Slider, Switch } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {

  
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="home">
        <div className="div-btn">
          <button className="btn">+ {} AGREGAR DISPOSITIVOS</button>
        </div>

        <div className="home-grid">
          <div className="card">
            <h1 className="p-text">AC Cocina</h1>
            <p className="p-text">Aire acondicionado de la cocina</p>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Cocina</h1>
            <p className="p-text">Luz principal del comedor</p>
            <Switch defaultChecked />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Velador</h1>
            <p className="p-text">Velador del dormitorio principal</p>
            <Switch defaultChecked />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Caloventor</h1>
            <p className="p-text">Caloventor del dormitorio principal</p>
            <Switch defaultChecked />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Equipo de música</h1>
            <p className="p-text">Equipo de música de la sala de estar</p>
            <Switch defaultChecked />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Televisión</h1>
            <p className="p-text">Televisión de la sala de estar</p>
            <Switch defaultChecked />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Ventilador</h1>
            <p className="p-text">Ventilador del dormitorio principal</p>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>

          <div className="card">
            <h1 className="p-text">Ventana</h1>
            <p className="p-text">Persianas de la cocina</p>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            <div className="btn-color">
              <button className="btn-card">EDITAR</button>
              <button className="btn-card">ELIMINAR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
