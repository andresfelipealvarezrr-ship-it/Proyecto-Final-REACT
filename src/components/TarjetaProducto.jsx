import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"

function TarjetaProducto({ producto }) {
  const { eliminarProducto } = useContext(ProductoContext)

  return (
    <div style={{
      border: "1px solid #ddd", borderRadius: "10px", padding: "1.5rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)", background: "white"
    }}>
      <h3 style={{ color: "#2c3e50", marginBottom: "0.5rem" }}>{producto.nombre}</h3>
      <p style={{ color: "#666", marginBottom: "0.5rem" }}>{producto.descripcion}</p>
      <p style={{ color: "#27ae60", fontWeight: "bold", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        ${producto.precio}
      </p>
      <span style={{
        background: "#eaf4ff", color: "#2980b9", padding: "0.3rem 0.8rem",
        borderRadius: "20px", fontSize: "0.85rem"
      }}>
        {producto.categoria}
      </span>

      <div style={{ display: "flex", gap: "0.8rem", marginTop: "1rem" }}>
        <Link to={`/editar/${producto.id}`} style={{
          background: "#f39c12", color: "white", padding: "0.5rem 1rem",
          borderRadius: "6px", textDecoration: "none", flex: 1, textAlign: "center"
        }}>
          ✏️ Editar
        </Link>
        <button onClick={() => eliminarProducto(producto.id)} style={{
          background: "#e74c3c", color: "white", padding: "0.5rem 1rem",
          borderRadius: "6px", border: "none", cursor: "pointer", flex: 1
        }}>
          🗑️ Eliminar
        </button>
      </div>
    </div>
  )
}

export default TarjetaProducto

