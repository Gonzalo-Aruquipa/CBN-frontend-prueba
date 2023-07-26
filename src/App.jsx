import { Slider, Switch } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [productos, setProductos] = useState([]);
  const [update, setUpdate] = useState("");
  const [input, setInput] = useState({
    name: "",
    description: "",
    typeproduct: "",
  });

  const [form, setForm] = useState("0");
  const [formu, setFormu] = useState("0");

  const handleForm = (e) => {
    e.preventDefault();
    setForm(1);
  };
  const handleFormu = ( id) => {
    setFormu(1);
    setUpdate(id);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/products", input);
    setForm(0);
  };

  const handleUpdate = async()=>{
    await axios.put(`http://localhost:3000/${update}`, input);
    setFormu(0);

  }

  const handleDelete = async(id)=>{
     await axios.delete(`http://localhost:3000/${id}`);

 }

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000");
    setProductos(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="home">
        <div className="div-btn">
          <button className="btn" onClick={handleForm}>
            + {} AGREGAR DISPOSITIVOS
          </button>
        </div>
        <div>
          {form == "1" ? (
            <div className="form">
              <form onSubmit={handleSubmit}>
                <input
                  className="input-form"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  name="name"
                />
                <input
                  className="input-form"
                  type="text"
                  placeholder="Descripción"
                  onChange={handleChange}
                  name="description"
                />
                <select
                  className="input-form"
                  onChange={handleChange}
                  name="typeproduct"
                  value={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    ---
                  </option>
                  <option value="encendido">Electrodoméstico</option>
                  <option value="porcentaje">Accesorio</option>
                </select>
                <button type="submit" className="input-form">
                  Guardar Producto
                </button>
              </form>
            </div>
          ) : null}
        </div>

        <div>
          {formu == "1" ? (
            <div className="form">
              <form onSubmit={()=>handleUpdate()}>
                <input
                  className="input-form"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  name="name"
                />
                <input
                  className="input-form"
                  type="text"
                  placeholder="Descripción"
                  onChange={handleChange}
                  name="description"
                />
                <select
                  className="input-form"
                  onChange={handleChange}
                  name="typeproduct"
                  value={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    ---
                  </option>
                  <option value="encendido">Electrodoméstico</option>
                  <option value="porcentaje">Accesorio</option>
                </select>
                <button type="submit" className="input-form">
                  Guardar Cambios
                </button>
              </form>
            </div>
          ) : null}
        </div>

        <div className="home-grid">
          {productos.map((p, i) => (
            <div className="card" key={i}>
              <h1 className="p-text">{p.name}</h1>
              <p className="p-text">{p.description}</p>
              {p.typeproduct === "encendido" ? (
                <Switch defaultChecked />
              ) : (
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              )}

              <div className="btn-color">
                <input type="submit" className="btn-card"  onClick={()=>handleFormu(p.id)} value={"EDITAR"}/>
                <input type="submit" className="btn-card" onClick={()=>handleDelete(p.id) }  value={"ELIMINAR"}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
