import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./views/Home";
import NotFound from "./views/NotFound";

import Blends from "./views/Blends";
import ItemList from "./components/ItemList/ItemList";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/ItemList/Item";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/blends" element={<Blends />} />
          <Route path="/contacto" element={<h1>contactanos!</h1>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
