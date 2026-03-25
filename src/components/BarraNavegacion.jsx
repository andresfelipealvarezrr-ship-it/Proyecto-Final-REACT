import { Link } from "react-router-dom"

function BarraNavegacion() {
  return (
    <nav style={{ background: "#2c3e50", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <h2 style={{ color: "white", margin: 0 }}>🛍️ Gestor de Productos</h2>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link>
        <Link to="/productos" style={{ color: "white", textDecoration: "none" }}>Productos</Link>
        <Link to="/agregar" style={{ color: "white", textDecoration: "none" }}>Agregar Producto</Link>
      </div>
    </nav>
  )
}

export default BarraNavegacion
