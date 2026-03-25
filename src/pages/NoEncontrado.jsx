import { Link } from "react-router-dom"

function NoEncontrado() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">Error 404</p>
        <h1 className="text-slate-100 text-6xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-slate-400 text-lg mb-8">La ruta que buscas no existe.</p>
        <Link
          to="/"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NoEncontrado
