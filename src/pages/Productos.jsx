import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"
import TarjetaProducto from "../components/TarjetaProducto"

function Productos() {
  const { productos } = useContext(ProductoContext)
  const [busqueda, setBusqueda] = useState("")
  const [categoriaFiltro, setCategoriaFiltro] = useState("")

  const categorias = ["Electrónica", "Ropa", "Alimentos", "Hogar", "Deportes", "Otros"]

  const productosFiltrados = productos.filter((p) => {
    const coincideNombre = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaFiltro === "" || p.categoria === categoriaFiltro
    return coincideNombre && coincideCategoria
  })

  return (
    <div className="min-h-screen bg-slate-900 px-6 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-medium text-slate-100">Lista de Productos</h2>
          <Link to="/agregar" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200">
            + Agregar Producto
          </Link>
        </div>

        {/* Búsqueda y filtro */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Contador */}
        {(busqueda || categoriaFiltro) && (
          <p className="text-slate-500 text-sm mb-4">{productosFiltrados.length} resultado(s) encontrado(s)</p>
        )}

        {/* Grid */}
        {productos.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">No hay productos registrados aún.</p>
            <Link to="/agregar" className="mt-3 inline-block text-indigo-400 hover:text-indigo-300 text-sm">
              Agregar el primero
            </Link>
          </div>
        ) : productosFiltrados.length === 0 ? (
          <p className="text-center text-slate-500 text-lg py-24">No se encontraron productos.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productosFiltrados.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Productos
