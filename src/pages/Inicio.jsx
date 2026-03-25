import { Link } from "react-router-dom"

function Inicio() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2c3e50" }}>🛍️ Gestor de Productos</h1>
      <p style={{ fontSize: "1.2rem", color: "#666", margin: "1rem 0 2rem" }}>
        Administra tus productos de forma fácil y rápida
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Link to="/productos" style={{
          background: "#2c3e50", color: "white", padding: "0.8rem 2rem",
          borderRadius: "8px", textDecoration: "none", fontSize: "1rem"
        }}>
          Ver Productos
        </Link>
        <Link to="/agregar" style={{
          background: "#27ae60", color: "white", padding: "0.8rem 2rem",
          borderRadius: "8px", textDecoration: "none", fontSize: "1rem"
        }}>
          Agregar Producto
        </Link>
      </div>
    </div>
  )
}

export default Inicio
