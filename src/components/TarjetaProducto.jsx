import { useContext } from "react"
import { Link } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"

const categoriaBadge = {
  "Electrónica": "bg-indigo-900 text-indigo-300 border-indigo-700",
  "Ropa":        "bg-purple-900 text-purple-300 border-purple-700",
  "Alimentos":   "bg-emerald-900 text-emerald-300 border-emerald-700",
  "Hogar":       "bg-amber-900 text-amber-300 border-amber-700",
  "Deportes":    "bg-orange-900 text-orange-300 border-orange-700",
  "Otros":       "bg-slate-700 text-slate-300 border-slate-600",
}

function TarjetaProducto({ producto }) {
  const { eliminarProducto } = useContext(ProductoContext)
  const badge = categoriaBadge[producto.categoria] || "bg-slate-700 text-slate-300 border-slate-600"

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 flex flex-col gap-3 hover:border-slate-500 transition-colors duration-200">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-slate-100 font-medium text-base">{producto.nombre}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full border whitespace-nowrap ${badge}`}>
          {producto.categoria}
        </span>
      </div>

      <p className="text-slate-400 text-sm flex-1">{producto.descripcion}</p>

      <p className="text-emerald-400 text-xl font-medium">
        ${Number(producto.precio).toLocaleString("es-CO")}
      </p>

      <div className="flex gap-2 mt-1">
        <Link
          to={`/editar/${producto.id}`}
          className="flex-1 text-center text-amber-400 border border-amber-800 bg-amber-900/30 hover:bg-amber-900/60 text-sm font-medium py-2 rounded-lg transition-colors duration-200"
        >
          ✏️ Editar
        </Link>
        <button
          onClick={() => eliminarProducto(producto.id)}
          className="flex-1 text-red-400 border border-red-900 bg-red-900/30 hover:bg-red-900/60 text-sm font-medium py-2 rounded-lg transition-colors duration-200"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  )
}

export default TarjetaProducto
