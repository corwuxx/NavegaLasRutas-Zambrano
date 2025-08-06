import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/pages/cart/Cart";
import { NotFound } from "./components/pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;