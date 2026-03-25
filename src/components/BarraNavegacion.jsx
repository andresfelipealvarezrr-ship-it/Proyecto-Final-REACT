import { Link, useLocation } from "react-router-dom"

function BarraNavegacion() {
  const location = useLocation()

  const linkClass = (path) =>
    `px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
      location.pathname === path
        ? "bg-slate-700 text-slate-100"
        : "text-slate-400 hover:text-slate-200 hover:bg-slate-700"
    }`

  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg">🛍️</span>
        <h1 className="text-slate-100 font-medium text-lg">Gestor de Productos</h1>
      </div>
      <div className="flex items-center gap-1">
        <Link to="/" className={linkClass("/")}>Inicio</Link>
        <Link to="/productos" className={linkClass("/productos")}>Productos</Link>
        <Link to="/agregar" className={linkClass("/agregar")}>Agregar Producto</Link>
      </div>
    </nav>
  )
}

export default BarraNavegacion
