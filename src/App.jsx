import { Navbar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Mi Tienda!" />
      <Footer />
    </div>
  )
}

export default App