import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"

function AgregarProducto() {
  const { agregarProducto } = useContext(ProductoContext)
  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: ""
  })

  const [errores, setErrores] = useState({})

  const categorias = ["Electrónica", "Ropa", "Alimentos", "Hogar", "Deportes", "Otros"]

  const validar = () => {
    const nuevosErrores = {}
    if (!formulario.nombre) nuevosErrores.nombre = "El nombre es obligatorio"
    if (!formulario.descripcion) nuevosErrores.descripcion = "La descripción es obligatoria"
    if (!formulario.precio || formulario.precio <= 0) nuevosErrores.precio = "El precio debe ser mayor a 0"
    if (!formulario.categoria) nuevosErrores.categoria = "Selecciona una categoría"
    return nuevosErrores
  }

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const erroresEncontrados = validar()
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados)
      return
    }
    agregarProducto(formulario)
    navigate("/productos")
  }

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto", padding: "2rem", background: "white", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "#2c3e50", marginBottom: "1.5rem" }}>Agregar Producto</h2>
      <form onSubmit={manejarEnvio}>

        <div style={{ marginBottom: "1rem" }}>
          <label>Nombre</label>
          <input name="nombre" value={formulario.nombre} onChange={manejarCambio}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #ddd", marginTop: "0.3rem" }} />
          {errores.nombre && <p style={{ color: "red", fontSize: "0.85rem" }}>{errores.nombre}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Descripción</label>
          <textarea name="descripcion" value={formulario.descripcion} onChange={manejarCambio}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #ddd", marginTop: "0.3rem" }} />
          {errores.descripcion && <p style={{ color: "red", fontSize: "0.85rem" }}>{errores.descripcion}</p>}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Precio</label>
          <input name="precio" type="number" value={formulario.precio} onChange={manejarCambio}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #ddd", marginTop: "0.3rem" }} />
          {errores.precio && <p style={{ color: "red", fontSize: "0.85rem" }}>{errores.precio}</p>}
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label>Categoría</label>
          <select name="categoria" value={formulario.categoria} onChange={manejarCambio}
            style={{ width: "100%", padding: "0.6rem", borderRadius: "6px", border: "1px solid #ddd", marginTop: "0.3rem" }}>
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errores.categoria && <p style={{ color: "red", fontSize: "0.85rem" }}>{errores.categoria}</p>}
        </div>

        <button type="submit" style={{
          width: "100%", padding: "0.8rem", background: "#27ae60",
          color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer"
        }}>
          Guardar Producto
        </button>
      </form>
    </div>
  )
}

export default AgregarProducto

