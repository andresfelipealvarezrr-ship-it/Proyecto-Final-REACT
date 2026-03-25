
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductoContext } from "../context/ProductoContext"

function Inicio() {
  const { productos } = useContext(ProductoContext)
  const categorias = [...new Set(productos.map((p) => p.categoria))].length

  return (
    <div className="min-h-screen bg-slate-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="mb-12">
          <h2 className="text-4xl font-medium text-slate-100 mb-3">Gestor de Productos</h2>
          <p className="text-slate-400 text-lg mb-8">Administra tu inventario de forma fácil, rápida y profesional.</p>
          <div className="flex gap-3 flex-wrap">
            <Link to="/productos" className="bg-slate-700 hover:bg-slate-600 text-slate-100 font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm">
              Ver Productos
            </Link>
            <Link to="/agregar" className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm">
              + Agregar Producto
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-indigo-500 border border-slate-700">
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wide">Productos registrados</p>
            <p className="text-slate-100 text-3xl font-medium">{productos.length}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-emerald-500 border border-slate-700">
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wide">Categorías activas</p>
            <p className="text-slate-100 text-3xl font-medium">{categorias}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-5 border-l-4 border-amber-500 border border-slate-700">
            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wide">Operaciones</p>
            <p className="text-slate-100 text-3xl font-medium">CRUD</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Inicio
