import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductoProvider } from "./context/ProductoContext"
import BarraNavegacion from "./components/barraNavegacion"
import Inicio from "./pages/Inicio"
import Productos from "./pages/Productos"
import AgregarProducto from "./pages/AgregarProducto"
import EditarProducto from "./pages/EditarProducto"
import NoEncontrado from "./pages/Noencontrado"

function App() {
  return (
    <ProductoProvider>
      <BrowserRouter>
        <BarraNavegacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/agregar" element={<AgregarProducto />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </ProductoProvider>
  )
}

export default App