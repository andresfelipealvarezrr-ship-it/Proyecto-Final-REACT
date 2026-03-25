import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductoProvider } from "./context/ProductoContext"
import BarraNavegacion from "./components/BarraNavegacion"  // ✅ mayúscula correcta
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import AgregarProducto from "./pages/AgregarProducto"
import EditarProducto from "./pages/EditarProducto"

function App() {
  return (
    <ProductoProvider>
      <BrowserRouter>
        <BarraNavegacion />  {/* ✅ ahora sí está dentro del BrowserRouter */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/agregar" element={<AgregarProducto />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
        </Routes>
      </BrowserRouter>
    </ProductoProvider>
  )
}

export default App