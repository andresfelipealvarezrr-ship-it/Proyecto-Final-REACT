import { createContext, useState, useEffect } from "react"

export const ProductoContext = createContext()  // ← aquí estaba el problema

export function ProductoProvider({ children }) {
  const [productos, setProductos] = useState(() => {
    const productosGuardados = localStorage.getItem("productos")
    return productosGuardados ? JSON.parse(productosGuardados) : []
  })

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos))
  }, [productos])

  const agregarProducto = (producto) => {
    const nuevoProducto = { ...producto, id: Date.now(), precio: Number(producto.precio) }
    setProductos([...productos, nuevoProducto])
  }

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id))
  }

  const editarProducto = (productoEditado) => {
    setProductos(productos.map((p) => p.id === productoEditado.id ? productoEditado : p))
  }

  return (
    <ProductoContext.Provider value={{ productos, agregarProducto, eliminarProducto, editarProducto }}>
      {children}
    </ProductoContext.Provider>
  )
}
