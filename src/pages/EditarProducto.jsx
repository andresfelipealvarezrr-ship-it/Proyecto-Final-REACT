import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductoContext } from "../context/ProductoContext"

function EditarProducto() {
  const { productos, editarProducto } = useContext(ProductoContext)
  const navigate = useNavigate()
  const { id } = useParams()

  const [formulario, setFormulario] = useState({ nombre: "", descripcion: "", precio: "", categoria: "" })
  const [errores, setErrores] = useState({})

  const categorias = ["Electrónica", "Ropa", "Alimentos", "Hogar", "Deportes", "Otros"]

  useEffect(() => {
    const producto = productos.find((p) => p.id === Number(id))
    if (producto) setFormulario(producto)
  }, [id, productos])

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
    editarProducto({ ...formulario, precio: Number(formulario.precio) })
    navigate("/productos")
  }

  const inputClass = "w-full px-4 py-2 bg-slate-900 border border-slate-600 text-slate-100 placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 mt-1"

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-10">
      <div className="bg-slate-800 w-full max-w-lg rounded-xl border border-slate-700 p-8">
        <h2 className="text-xl font-medium text-slate-100 mb-6">Editar Producto</h2>
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
          <div className="flex gap-3 mt-2">
            <button type="button" onClick={() => navigate("/productos")}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium py-3 rounded-lg text-sm transition-colors duration-200">
              Cancelar
            </button>
            <button type="submit"
              className="flex-1 bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 rounded-lg text-sm transition-colors duration-200">
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditarProducto
