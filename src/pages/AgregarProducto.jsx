import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"

function AgregarProducto() {
  const { agregarProducto } = useContext(ProductoContext)
  const navigate = useNavigate()

  const [formulario, setFormulario] = useState({ nombre: "", descripcion: "", precio: "", categoria: "" })
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

  const manejarCambio = (e) => setFormulario({ ...formulario, [e.target.name]: e.target.value })

  const manejarEnvio = (e) => {
    e.preventDefault()
    const erroresEncontrados = validar()
    if (Object.keys(erroresEncontrados).length > 0) { setErrores(erroresEncontrados); return }
    agregarProducto(formulario)
    navigate("/productos")
  }

  const inputClass = "w-full px-4 py-2 bg-slate-900 border border-slate-600 text-slate-100 placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-10">
      <div className="bg-slate-800 w-full max-w-lg rounded-xl border border-slate-700 p-8">
        <h2 className="text-xl font-medium text-slate-100 mb-6">Agregar Producto</h2>
        <form onSubmit={manejarEnvio} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Nombre</label>
            <input name="nombre" value={formulario.nombre} onChange={manejarCambio} className={inputClass} />
            {errores.nombre && <p className="text-red-400 text-xs mt-1">{errores.nombre}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Descripción</label>
            <textarea name="descripcion" value={formulario.descripcion} onChange={manejarCambio} rows={3} className={inputClass} />
            {errores.descripcion && <p className="text-red-400 text-xs mt-1">{errores.descripcion}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Precio</label>
            <input name="precio" type="number" value={formulario.precio} onChange={manejarCambio} className={inputClass} />
            {errores.precio && <p className="text-red-400 text-xs mt-1">{errores.precio}</p>}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Categoría</label>
            <select name="categoria" value={formulario.categoria} onChange={manejarCambio} className={inputClass}>
              <option value="">Selecciona una categoría</option>
              {categorias.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {errores.categoria && <p className="text-red-400 text-xs mt-1">{errores.categoria}</p>}
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg text-sm transition-colors duration-200 mt-2">
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  )
}

export default AgregarProducto
