import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"
import TarjetaProducto from "../components/TarjetaProducto"

function Productos() {
  const { productos } = useContext(ProductoContext)
  const [busqueda, setBusqueda] = useState("")
  const [categoriaFiltro, setCategoriaFiltro] = useState("")

  const categorias = ["Electrónica", "Ropa", "Alimentos", "Hogar", "Deportes", "Otros"]

  // Filtrado en tiempo real por nombre y categoría
  const productosFiltrados = productos.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaFiltro === "" || p.categoria === categoriaFiltro
    return coincideNombre && coincideCategoria
  })

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <h2 style={{ color: "#2c3e50" }}>Lista de Productos</h2>
        <Link to="/agregar" style={{
          background: "#27ae60", color: "white", padding: "0.6rem 1.5rem",
          borderRadius: "8px", textDecoration: "none"
        }}>
          + Agregar Producto
        </Link>
      </div>

      {/* 🔍 Barra de búsqueda y filtro */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="🔍 Buscar por nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            flex: 1, minWidth: "200px", padding: "0.6rem 1rem",
            borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem"
          }}
        />
        <select
          value={categoriaFiltro}
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          style={{
            padding: "0.6rem 1rem", borderRadius: "8px",
            border: "1px solid #ddd", fontSize: "1rem", minWidth: "180px"
          }}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Contador de resultados */}
      {(busqueda || categoriaFiltro) && (
        <p style={{ color: "#666", marginBottom: "1rem", fontSize: "0.95rem" }}>
          {productosFiltrados.length} resultado(s) encontrado(s)
        </p>
      )}

      {productos.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
          No hay productos registrados aún.
        </p>
      ) : productosFiltrados.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666", fontSize: "1.2rem" }}>
          No se encontraron productos con ese criterio.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {productosFiltrados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Productos
